import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "../Actions";
import Editor from "../Components/Editor";

const filterById = (items, id) => {
  var result;
  items.some(item => {
    if (item.id === id) {
      return (result = item);
    }
    if (item.children) {
      return (result = filterById(item.children, id));
    }
  });
  return result;
};

const filterItems = state => {
  let result;
  if (state.ZOOM_ID) {
    result = [filterById(state.items, state.ZOOM_ID)];
  } else {
    result = state.items;
  }
  return result;
};

const mapStateToProps = (state, ownProp) => ({
  items: filterItems(state)
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
