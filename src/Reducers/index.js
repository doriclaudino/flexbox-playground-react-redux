import { combineReducers } from "redux";
import * as types from "../Actions/types";

export const editorReducer = (state = undefined, action) => {
  console.log("dispatched: " + action.type);
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
    default:
      return state;
  }
};
