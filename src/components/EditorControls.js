import React from "react";
import CodeArea from "./CodeArea";

const EditorControls = ({
  code,
  onRootClick,
  onAddChildClick,
  onDelChildClick,
  disableRootButton
}) => {
  //console.log(`code: ${JSON.stringify(code)}`);
  return (
    <div className="controls flex border-box">
      <CodeArea code={JSON.stringify(code)} />
      <div>
        <button onClick={onRootClick} disabled={disableRootButton}>
          root
        </button>
        <button onClick={onAddChildClick}>add</button>
        <button onClick={onDelChildClick}>del</button>
      </div>
    </div>
  );
};

export default EditorControls;
