import * as types from "./types";

/**
 * stop the button action propagation to parent Divs
 */
export const onChildClick = (id, htmlElement) => {
  htmlElement.stopPropagation();
  return {
    type: types.SAVE_CLICKED_ID,
    id: id
  };
};

export const onChildDoubleClick = (id, htmlElement) => {
  htmlElement.stopPropagation();
  return {
    type: types.SAVE_ZOOM_ID,
    id: id
  };
};

export const onRootClick = () => ({ type: types.ROOT_CLICK });
export const onAddChildClick = () => ({ type: types.ADD_CHILD });
export const onDelChildClick = () => ({ type: types.DEL_CHILD });
export const onUpdateCode = code => ({ type: types.UPDATE_CODE, code });
