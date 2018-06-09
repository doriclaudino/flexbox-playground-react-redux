import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "../actions";
import EditorControls from "../components/EditorControls";

const getStyleById = (items, id) => {
  var result;
  items.some(item => {
    if (item.id === id) {
      return (result = item.style);
    }
    if (item.items) {
      return (result = getStyleById(item.items, id));
    }
  });
  return result;
};

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
  disableRootButton: !state.ZOOM_ID,
  code: getStyleById(state.items, state.CLICKED_ID),
  isScreenEmpty: !state.items[0]
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorControls);
