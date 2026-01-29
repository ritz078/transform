import EditorPanel from "@components/EditorPanel";
import { useCallback } from "react";
import * as React from "react";

export default function Index() {
  const transformer = useCallback(async ({ value }) => {
    return value;
  }, []);

  return (
    <EditorPanel
      language="plaintext"
      hasLoad
      defaultValue="Hello, World!"
      title="Home"
      id={0}
    />
  );
}
