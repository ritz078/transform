import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";

export default function JsonToJava() {
  const transformer = useCallback(async ({ value }) => {
    const { run } = await import("json_typegen_wasm");
    const kotlinTransformationLines: string[] = run(
      "Root",
      value,
      JSON.stringify({
        output_mode: "kotlin"
      })
    ).split("\n");

    // use Kotlin transformation to convert JSON to Java
    let javaTransformation: string = "";
    let getters: string = "";
    let setters: string = "";

    kotlinTransformationLines.forEach((line: string) => {
      line = line.trim();

      if (line === ")") {
        // Class is closing so append the getters, setters for the current class,
        // close the class and reset the getters, setters
        javaTransformation += `\n${getters}${setters}}`;
        getters = "";
        setters = "";
      } else if (line.startsWith("data class ")) {
        // Change the start of a class from 'data class Root(' to 'public class Root {'
        const classNameIndex = 11;
        const classNameEndIndex = line.indexOf("(");
        javaTransformation += `public class ${line.substring(
          classNameIndex,
          classNameEndIndex
        )} {`;
      } else if (line.startsWith("val")) {
        // If this is a variable, change 'val name: String' to 'private String name;'
        // followed by respective getters, setters for the variable
        const processedLine = line.replace("?", "");
        const variableStartIndex = 4; // length of string "val "
        const variableEndIndex = processedLine.indexOf(":");
        const variable: string = processedLine.substring(
          variableStartIndex,
          variableEndIndex
        );
        const typeStartIndex = processedLine.indexOf(":") + 2;
        const type = processedLine.substring(
          typeStartIndex,
          processedLine.length - 1
        );
        const titleCaseVariable =
          variable.charAt(0).toUpperCase() + variable.substring(1);
        getters += `\tpublic ${type} get${titleCaseVariable}() {\n\t\treturn this.${variable};\n\t}\n\n`;
        setters += `\tpublic void set${titleCaseVariable}(${type} ${variable}) {\n\t\tthis.${variable} = ${variable};\n\t}\n\n`;
        javaTransformation += `\tprivate ${type} ${variable};`;
      } else if (line.startsWith("typealias")) {
        // If this is a kotlin typealias, make it into a class
        const classNameStartIndex = 10; // length of string "typealias "
        const classNameEndIndex = line.indexOf(" =");
        const className = line.substring(
          classNameStartIndex,
          classNameEndIndex
        );
        const typeNameEndIndex = line.indexOf("=") + 2;
        const type = line.substring(typeNameEndIndex, line.length - 1); // ignore the semi-colon
        const variable =
          className.charAt(0).toLowerCase() + className.substring(1);
        const titleCaseVariable = className;
        getters = `\tpublic ${type} get${titleCaseVariable}() {\n\t\treturn this.${variable};\n\t}\n\n`;
        setters = `\tpublic void set${titleCaseVariable}(${type} ${variable}) {\n\t\tthis.${variable} = ${variable};\n\t}\n\n`;
        javaTransformation += `public class ${className} {\n\tprivate ${type} ${variable};\n`;
        javaTransformation += `\n${getters}${setters}}`;
        getters = "";
        setters = "";
      } else {
        // If there's any other line, it is most probably a 'next line character', so just append it
        javaTransformation += line;
      }

      javaTransformation += "\n";
    });

    return javaTransformation;
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="Java"
      resultLanguage={"java"}
    />
  );
}
