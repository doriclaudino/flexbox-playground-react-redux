import React from "react";
import EditorScreen from "./EditorScreen";
import EditorControls from "./EditorControls";

const Editor = ({ children }) => {
  return (
    <div className="flex border editor">
      <EditorScreen onScreenObjectClick>{children}</EditorScreen>
      <EditorControls code={children} />
    </div>
  );
};

export default Editor;
