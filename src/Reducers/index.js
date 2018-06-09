import { combineReducers } from "redux";
import * as types from "../Actions/types";
import v4 from "uuid";

export const editorReducer = (state = undefined, action) => {
  console.log("dispatched: " + action.type + " id:" + action.id);
  switch (action.type) {
    case types.SAVE_ZOOM_ID: {
      return {
        ...state,
        ZOOM_ID: action.id
      };
    }
    case types.SAVE_CLICKED_ID: {
      return {
        ...state,
        CLICKED_ID: action.id
      };
    }
    case types.ROOT_CLICK: {
      return {
        ...state,
        ZOOM_ID: undefined
      };
    }
    case types.ADD_CHILD: {
      return {
        ...state,
        items: addELementById(state.items, state.CLICKED_ID, {
          ...state.base_child,
          id: v4()
        })
      };
    }
    case types.DEL_CHILD: {
      return {
        ...state,
        ZOOM_ID: state.ZOOM_ID === state.CLICKED_ID ? undefined : state.ZOOM_ID,
        items: delElementById(state.items, state.CLICKED_ID)
      };
    }
    default:
      return state;
  }
};

let addELementById = (items, id, newELement) => {
  return items.map(item => {
    if (item.id === id) {
      item.children.push(newELement);
    } else {
      item.children = addELementById(item.children, id, newELement);
    }
    return item;
  });
};

let delElementById = (items, id) => {
  return items.filter(item => {
    if (item.id !== id) {
      item.children = delElementById(item.children, id);
      return item;
    } else return 0;
  });
};

function filterById(items, id) {
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
}
