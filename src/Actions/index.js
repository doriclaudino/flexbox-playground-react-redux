import * as types from "./types";

/**
 * stop the button action propagation to parent Divs
 */
export const onChildClick = (id, htmlElement) => {
  console.log("clicked:" + id);
  htmlElement.stopPropagation();
  return {
    type: types.SAVE_CLICKED_ID,
    id: id
  };
};

export const onChildDoubleClick = (id, htmlElement) => {
  console.log("clicked:" + id);
  htmlElement.stopPropagation();
  return {
    type: types.SAVE_ZOOM_ID,
    id: id
  };
};
