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

const mapStateToProps = state => ({
  disableRootButton: !state.ZOOM_ID
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorControls);
