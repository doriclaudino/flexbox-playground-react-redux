import { combineReducers } from "redux";
import * as types from "../Actions/types";

export const editorReducer = (state = undefined, action) => {
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
