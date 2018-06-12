import React from "react";
import EditorScreen from "../containers/EditorScreen";
import GroupButtons from "../containers/GroupButtons";
import ElementCode from "../containers/ElementCode";
import PageCode from "../containers/PageCode";

const Editor = props => {
  console.log(props);
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      flexFlow: "row wrap",
      boxSizing: "border-box",
      justifyContent: "center",
      alignContent: "baseline",
    }}>
      
      <EditorScreen/>
      <ElementCode/>
      <GroupButtons/>
      <PageCode/>      
    </div>
  );
};

export default Editor;
