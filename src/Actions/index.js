import * as types from "./types";

/**
 * stop the button action propagation to parent Divs
 */
export const onChildClick = (id, htmlElement) => {
  console.log("clicked:" + id);
  htmlElement.stopPropagation();
  return {
    type: types.ADD_ZOOM_ID,
    id: id
  };
};
