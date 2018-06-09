import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "../actions";
import EditorScreen from "../components/EditorScreen";

const filterById = (items, id) => {
  var result;
  items.some(item => {
    if (item.id === id) {
      return (result = item);
    }
    if (item.items) {
      return (result = filterById(item.items, id));
    }
  });
  return result;
};

const filterItems = state => {
  let result;
  if (state.ZOOM_ID) {
    result = filterById(state.items, state.ZOOM_ID);

    //could return indefined
    if (!result) result = state.items;
    else result = [result];
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
      onChildDoubleClick: action.onChildDoubleClick
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorScreen);
