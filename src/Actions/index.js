import * as types from "./types";

/**
 * stop the button action propagation to parent Divs
 */
export const onChildClick = (id, htmlElement) => {
  htmlElement.stopPropagation();
  return {
    type: types.ADD_ZOOM_ID,
    id: id
  };
};
