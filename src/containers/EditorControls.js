import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "../actions";
import EditorControls from "../components/EditorControls";

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onRootClick: action.onRootClick,
      onAddChildClick: action.onAddChildClick,
      onDelChildClick: action.onDelChildClick
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(EditorControls);
