import React from "react";
import CodeArea from "./CodeArea";

const EditorControls = props => (
  <div className="controls flex border-box">
    <CodeArea {...props} />
    <div>
      <button onClick={e => console.log(e)}>root</button>
      <button onClick={e => console.log(e)}>+</button>
      <button onClick={e => console.log(e)}>-</button>
    </div>
  </div>
);

export default EditorControls;
