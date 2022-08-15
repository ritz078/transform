import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import { Alert } from "evergreen-ui";
import gofmt from "gofmt.js";
import { CadenceParser } from "@lemonneko/flow__cadence-parser";

const typeMap = {
  UInt: '*big.Int',
  UInt8: 'uint8',
  UInt16: 'uint16',
  UInt32: 'uint32',
  UInt64: 'uint64',
  UInt128: '*big.Int',
  UInt256: '*big.Int',
  Int: '*big.Int',
  Int8: 'int8',
  Int16: 'int16',
  Int32: 'int32',
  Int64: 'int64',
  Int128: '*big.Int',
  Int256: '*big.Int',
  UFix64: 'uint64',
  Fix64: 'int64',
  String: 'string',
  Character: 'string',
  Bool: 'bool',
  Path: 'string',
  Address: '[8]uint8'
}

function firstLetterUppercase(id: string): string {
  return id.charAt(0).toUpperCase() + id.slice(1)
}

async function cadenceToGo(value: string): Promise<string> {
  const parser = await CadenceParser.create("https://cdn.jsdelivr.net/npm/@lemonneko/flow__cadence-parser@0.24.1/dist/cadence-parser.wasm")
  const ast = parser.parse(value);
  const program = ast.program
  const declarations = program.Declarations
  let ret = ''
  for (const dec of declarations) {
    let decRet = ''
    // only struct can be converted
    if (dec.CompositeKind === "CompositeKindStructure") {
      decRet += `type ${dec.Identifier.Identifier} struct {\n`
      for (const member of dec.Members.Declarations) {
        if (member.Type === 'FieldDeclaration') {
          decRet += `${firstLetterUppercase(member.Identifier.Identifier)} ${typeMap[member.TypeAnnotation.AnnotatedType.Identifier.Identifier]} \`godence:"${member.Identifier.Identifier}"\`\n`
        }
      }
      decRet += '\n}'
    }
    ret += decRet
  }
  return ret
}

// return a promise
const transform = async(value: string) => {
  const ret = await cadenceToGo(value)
  return gofmt(ret)
}

export default function CadenceToGo() {
  const transformer = useCallback(({ value }) => transform(value),[]);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Cadence"
      editorLanguage="cadence"
      editorDefaultValue="cadence"
      resultTitle="Go struct"
      resultLanguage={"go"}
    />
  );
}
