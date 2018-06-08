import * as types from "/types";

export const onChildCliked = id => ({
  type: types.SCREEN_CHILD_CLICKED,
  id
});
