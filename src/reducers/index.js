import * as types from "../actions/types";
import v4 from "uuid";
import randomColor from "randomcolor";

export const editorReducer = (state = undefined, action) => {
  console.log("dispatched: " + action.type + " id:" + action.id);
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
    case types.ROOT_CLICK: {
      return {
        ...state,
        CLICKED_ID: undefined,
        ZOOM_ID: undefined
      };
    }
    case types.ADD_CHILD: {
      const newElement = {
        ...state.base_child,
        style: { backgroundColor: randomColor() },
        id: v4(),
        items: []
      };

      //empty insert
      if (!state.items.length) {
        return {
          ...state,
          items: [newElement]
        };
      } else {
        return {
          ...state,
          items: addELementById(state.items, state.CLICKED_ID, newElement)
        };
      }
    }
    case types.DEL_CHILD: {
      return {
        ...state,
        ZOOM_ID: state.ZOOM_ID === state.CLICKED_ID ? undefined : state.ZOOM_ID,
        items: delElementById(state.items, state.CLICKED_ID),
        CLICKED_ID: undefined
      };
    }
    case types.UPDATE_CODE: {
      return {
        ...state,
        items: updateELementById(state.items, state.CLICKED_ID, action.code)
      };
    }
    default:
      return state;
  }
};

let updateELementById = (items, id, newStyle) => {
  return items.map(item => {
    if (item.id === id) {
      item.style = newStyle;
    } else {
      item.items = updateELementById(item.items, id, newStyle);
    }
    return item;
  });
};

let addELementById = (items, id, newELement) => {
  return items.map(item => {
    if (item.id === id) {
      item.items.push(newELement);
    } else {
      item.items = addELementById(item.items, id, newELement);
    }
    return item;
  });
};

let delElementById = (items, id) => {
  return items.filter(item => {
    if (item.id !== id) {
      item.items = delElementById(item.items, id);
      return item;
    } else return 0;
  });
};
