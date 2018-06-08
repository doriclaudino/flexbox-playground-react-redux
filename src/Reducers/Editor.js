import * as types from "./Actions/types";

const editorReducer = (state = undefined, action) => {
  switch (action.type) {
    case types.SCREEN_CHILD_CLICKED:
      return {
        ...state,
        SCREEN_CHILD_CLICKED: action.id
      };
    default:
      return state;
  }
};
