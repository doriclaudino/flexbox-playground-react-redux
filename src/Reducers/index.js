import { combineReducers } from "redux";
import * as types from "../Actions/types";

export const editorReducer = (state = undefined, action) => {
  console.log("dispatched: " + action.type);
  switch (action.type) {
    case types.ADD_ZOOM_ID: {
      return {
        ...state,
        ZOOM_ID: action.id
      };
    }
    default:
      return state;
  }
};
