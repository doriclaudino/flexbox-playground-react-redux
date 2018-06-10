import React from "react";
import CodeArea from "./CodeArea";

const EditorControls = ({
  code,
  onRootClick,
  onAddChildClick,
  onDelChildClick,
  disableRootButton,
  disableDelButton,
  disableAddButton,
  onUpdateCode
}) => {
  return (
    <div className="controls flex border-box">
      <CodeArea onUpdateCode={onUpdateCode} code={code} updateInterval={200} />
      <div>
        <button onClick={onRootClick} disabled={disableRootButton}>
          root
        </button>
        <button onClick={onAddChildClick} disabled={disableAddButton}>
          add
        </button>
        <button onClick={onDelChildClick} disabled={disableDelButton}>
          del
        </button>
      </div>
    </div>
  );
};

export default EditorControls;
