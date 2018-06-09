import React from "react";
import EditorScreen from "../containers/EditorScreen";
import EditorControls from "../containers/EditorControls";

const Editor = props => {
  console.log(props);
  return (
    <div className="flex border editor">
      <EditorScreen />
      <EditorControls />
    </div>
  );
};

export default Editor;
