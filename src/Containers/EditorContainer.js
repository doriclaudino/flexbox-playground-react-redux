import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onChildClick } from "../Actions";
import Editor from "../Components/Editor";

const mapStateToProps = (state, ownProp) => ({
  items: state.items
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onChildClick: onChildClick
    },
    dispatch
  );
};

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);

export default EditorContainer;
