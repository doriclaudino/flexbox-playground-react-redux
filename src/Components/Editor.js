import React from "react";
import EditorScreen from "./EditorScreen";
import EditorControls from "./EditorControls";

const Editor = props => {
  console.log(props);
  return (
    <div className="flex border editor">
      <EditorScreen {...props}>{props.children}</EditorScreen>
      <EditorControls code={props.items} {...props} />
    </div>
  );
};

export default Editor;
