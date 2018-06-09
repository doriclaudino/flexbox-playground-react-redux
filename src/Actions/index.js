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

export const onRootClick = () => ({ type: types.ROOT_CLICK });
export const onAddChildClick = () => ({ type: types.ADD_CHILD });
export const onDelChildClick = () => ({ type: types.DEL_CHILD });
