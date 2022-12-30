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
    let currentClass: string = "";
    let variableNames: string[] = [];
    let variableTypes: string[] = [];

    kotlinTransformationLines.forEach((line: string) => {
      const originalLine = line;
      line = line.trim();

      if (line === ")") {
        // Class is closing so generate constructor, getters and setters for
        // the current class, close the class and reset running values
        let args: string[] = [];
        let getters: string[] = [];
        let setters: string[] = [];

        // Create args for constructor, getters and setters
        for (let i = 0; i < variableNames.length; i++) {
          const type = variableTypes[i];
          const variableName = variableNames[i];
          const titleCaseVariable =
            variableName.charAt(0).toUpperCase() + variableName.substring(1);
          args.push(`${type} ${variableName}`);
          getters.push(
            `\tpublic ${type} get${titleCaseVariable}() {\n\t\treturn this.${variableName};\n\t}\n`
          );
          setters.push(
            `\tpublic void set${titleCaseVariable}(${type} ${variableName}) {\n\t\tthis.${variableName} = ${variableName};\n\t}\n`
          );
        }

        // Create constructor
        let constructor = `\tpublic ${currentClass}(${args.join(", ")}) {`;
        let properties: string[] = [];
        variableNames.forEach(variable => {
          properties.push(`this.${variable} = ${variable};`);
        });
        constructor += `\n\t\t${properties.join("\n\t\t")}\n\t}\n`;
        javaTransformation += `\n${constructor}\n${getters.join(
          "\n"
        )}\n${setters.join("\n")}}`;

        // Reset running values
        currentClass = "";
        variableNames = [];
        variableTypes = [];
      } else if (line.startsWith("data class ")) {
        // Change the start of a class from 'data class Root(' to 'public class Root {'
        const classNameStartIndex = 11;
        const classNameEndIndex = line.indexOf("(");
        const className = line.substring(
          classNameStartIndex,
          classNameEndIndex
        );
        javaTransformation += `public class ${className} {`;
        currentClass = className;
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
        let type: string = processedLine.substring(
          typeStartIndex,
          processedLine.length - 1
        );

        // Update kotlin generic typing to Java generic typing
        type = type.replace("<Any>?", "<?>");
        type = type.replace("<Any>", "<?>");

        // Save variables and their types to be later used in constructor, getter, setter generation
        variableNames.push(variable);
        variableTypes.push(type);
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
        const getters = `\tpublic ${type} get${titleCaseVariable}() {\n\t\treturn this.${variable};\n\t}\n\n`;
        const setters = `\tpublic void set${titleCaseVariable}(${type} ${variable}) {\n\t\tthis.${variable} = ${variable};\n\t}\n\n`;
        const constructor = `\tpublic ${className}(${type} ${variable}) {\n\t\tthis.${variable} = ${variable};\n\t}\n`;
        javaTransformation += `public class ${className} {\n\tprivate ${type} ${variable};\n`;
        javaTransformation += `\n${constructor}\n${getters}${setters}}`;
      } else if (line.startsWith("import")) {
        javaTransformation += `${line};`;
      } else {
        // If there's any other line, it is most probably a 'next line character', so just append it
        javaTransformation += originalLine;
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
