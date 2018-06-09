import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "../Actions";
import Editor from "../Components/Editor";

const mapStateToProps = (state, ownProp) => ({
  items: state.items
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onChildClick: action.onChildClick,
      onChildDoubleClick: action.onChildDoubleClick,
      onRootClick: action.onRootClick,
      onAddChildClick: action.onAddChildClick,
      onDelChildClick: action.onDelChildClick
    },
    dispatch
  );
};

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);

export default EditorContainer;
