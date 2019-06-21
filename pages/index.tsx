import EditorPanel from "@components/EditorPanel";
import * as React from "react";
import { json } from "@constants/data";

export default function() {
  return (
    <EditorPanel
      title="JSON"
      defaultValue={json}
      language="json"
      id={1}
      onChange={console.log}
    />
  );
}
