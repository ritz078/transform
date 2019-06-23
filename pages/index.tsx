import EditorPanel from "@components/EditorPanel";
import * as React from "react";
import { json } from "@constants/data";
import { Pane } from "evergreen-ui";

export default function() {
  return (
    <Pane
      display="flex"
      flexDirection="row"
      height={"100vh"}
      overflow="hidden"
      flex={1}
    >
      <Pane display="flex" flex={1} borderRight>
        <EditorPanel
          title="JSON"
          defaultValue={json}
          language="json"
          id={1}
          onChange={console.log}
          hasLoad
          hasSettings
          hasClear
        />
      </Pane>
      <EditorPanel
        title="Flow"
        defaultValue={json}
        language="json"
        id={1}
        onChange={console.log}
        editable={false}
        hasPrettier={false}
      />
    </Pane>
  );
}
