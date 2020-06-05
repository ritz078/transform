import React from "react";
import { editor } from "monaco-editor";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {}
});

export const lightEditor: editor.IStandaloneThemeData = {
  base: "vs",
  inherit: true,
  rules: [
    {
      foreground: "940494",
      background: "444494",
      token: "punctuation.definition.list"
    },
    {
      foreground: "404f50",
      background: "5f0fff",
      fontStyle: "italic",
      token: "comment"
    },
    {
      foreground: "5a5f9b",
      background: "aaafdb",
      token: "string"
    },
    {
      foreground: "4f827b",
      background: "77c2bb",
      token: "constant.numeric"
    },
    {
      foreground: "025f69",
      background: "7f2299",
      token: "constant.character"
    },
    {
      foreground: "025f69",
      background: "7f2299",
      token: "constant.other"
    },
    {
      foreground: "7d7e52",
      background: "bdbe82",
      token: "constant.language"
    },
    {
      foreground: "7b5d8f",
      background: "9b9ffd",
      fontStyle: "bold",
      token: "storage.modifier"
    },
    {
      foreground: "7b5cbf",
      background: "8b5ddf",
      fontStyle: "bold",
      token: "storage"
    },
    {
      foreground: "025f49",
      background: "22ff49",
      token: "entity.name.function"
    },
    {
      foreground: "9d7e62",
      background: "bdbe82",
      token: "support.function"
    },
    {
      foreground: "939469",
      background: "e3e4a9",
      token: "entity.name.function.misc"
    },
    {
      foreground: "856f63",
      background: "a5df93",
      token: "entity.name.function.predicate"
    },
    {
      foreground: "af938c",
      background: "dfb3ac",
      token: "entity.name.function.io"
    },
    {
      foreground: "7bafad",
      background: "bbdfdd",
      token: "variable.other.external-symbol"
    },
    {
      foreground: "316fcf",
      background: "3aafff",
      token: "variable.language"
    },
    {
      foreground: "316fcf",
      background: "3aafff",
      token: "variable.other"
    },
    {
      foreground: "33969f",
      background: "05d6f9",
      fontStyle: "italic",
      token: "variable.parameter"
    },
    {
      foreground: "674aa8",
      background: "a3aad8",
      token: "keyword"
    },
    {
      foreground: "b9986f",
      background: "b998df",
      fontStyle: "bold",
      token: "entity.name.class"
    },
    {
      foreground: "22af9d",
      background: "b998df",
      token: "entity.name.structure"
    },
    {
      foreground: "af47a9",
      background: "af77a9",
      token: "entity.name.type"
    },
    {
      foreground: "cc4357",
      background: "ffddff",
      token: "entity.name.class"
    },
    {
      foreground: "cc4357",
      background: "ffddff",
      token: "entity.name.type.class"
    },
    {
      foreground: "ef6aa7",
      background: "ef6aa7",
      token: "support.class"
    },
    {
      foreground: "dfdfd5",
      background: "cc1b27",
      token: "invalid"
    },
    {
      foreground: "13499f",
      background: "0099ff",
      fontStyle: "italic",
      token: "string source"
    },
    {
      foreground: "3976a2",
      background: "49a6d2",
      token: "entity.name.tag"
    },
    {
      foreground: "4946c2",
      background: "4986c2",
      token: "entity.other.attribute-name"
    }
  ],
  colors: {
    "editor.foreground": "#0f0009",
    "editor.background": "#f9f8f9",
    "editor.selectionBackground": "#BAD6FD",
    "editor.lineHighlightBackground": "#ffffff",
    "editorCursor.foreground": "#100011",
    "editorWhitespace.foreground": "#000000",
    "editor.selectionHighlightBorder": "#B3B3B3"
  }
};

export const darkEditor: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    {
      foreground: "75715e",
      token: "comment"
    },
    {
      foreground: "e6db74",
      token: "string"
    },
    {
      foreground: "ae81ff",
      token: "constant.numeric"
    },
    {
      foreground: "ae81ff",
      token: "constant.language"
    },
    {
      foreground: "ae81ff",
      token: "constant.character"
    },
    {
      foreground: "ae81ff",
      token: "constant.other"
    },
    {
      foreground: "f92672",
      token: "keyword"
    },
    {
      foreground: "f92672",
      token: "storage"
    },
    {
      foreground: "66d9ef",
      fontStyle: "italic",
      token: "storage.type"
    },
    {
      foreground: "a6e22e",
      fontStyle: "underline",
      token: "entity.name.class"
    },
    {
      foreground: "a6e22e",
      fontStyle: "italic underline",
      token: "entity.other.inherited-class"
    },
    {
      foreground: "a6e22e",
      token: "entity.name.function"
    },
    {
      foreground: "fd971f",
      fontStyle: "italic",
      token: "variable.parameter"
    },
    {
      foreground: "f92672",
      token: "entity.name.tag"
    },
    {
      foreground: "a6e22e",
      token: "entity.other.attribute-name"
    },
    {
      foreground: "66d9ef",
      token: "support.function"
    },
    {
      foreground: "66d9ef",
      token: "support.constant"
    },
    {
      foreground: "66d9ef",
      fontStyle: "italic",
      token: "support.type"
    },
    {
      foreground: "66d9ef",
      fontStyle: "italic",
      token: "support.class"
    },
    {
      foreground: "f8f8f0",
      background: "f92672",
      token: "invalid"
    },
    {
      foreground: "f8f8f0",
      background: "ae81ff",
      token: "invalid.deprecated"
    },
    {
      foreground: "cfcfc2",
      token: "meta.structure.dictionary.json string.quoted.double.json"
    },
    {
      foreground: "75715e",
      token: "meta.diff"
    },
    {
      foreground: "75715e",
      token: "meta.diff.header"
    },
    {
      foreground: "f92672",
      token: "markup.deleted"
    },
    {
      foreground: "a6e22e",
      token: "markup.inserted"
    },
    {
      foreground: "e6db74",
      token: "markup.changed"
    },
    {
      foreground: "ae81ff",
      token: "constant.numeric.line-number.find-in-files - match"
    },
    {
      foreground: "e6db74",
      token: "entity.name.filename.find-in-files"
    }
  ],
  colors: {
    "editor.foreground": "#F8F8F2",
    "editor.background": "#272822",
    "editor.selectionBackground": "#49483E",
    "editor.lineHighlightBackground": "#3E3D32",
    "editorCursor.foreground": "#F8F8F0",
    "editorWhitespace.foreground": "#3B3A32",
    "editorIndentGuide.activeBackground": "#9D550F",
    "editor.selectionHighlightBorder": "#222218"
  }
};
