import React from "react";
import CodeArea from "./CodeArea";

const EditorControls = ({
  code,
  onRootClick,
  onAddChildClick,
  onDelChildClick
}) => {
  return (
    <div className="controls flex border-box">
      <CodeArea code={code} />
      <div>
        <button onClick={onRootClick}>root</button>
        <button onClick={onAddChildClick}>add</button>
        <button onClick={onDelChildClick}>del</button>
      </div>
    </div>
  );
};

export default EditorControls;
