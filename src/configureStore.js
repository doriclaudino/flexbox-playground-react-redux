import { createStore } from "redux";
import { editorReducer } from "./Reducers";
import v4 from "uuid";
import randomColor from "randomcolor";

const configureStore = () => {
  const persistedState = {
    base_child: {
      id: v4(),
      className: "flex half-size hover-effect",
      style: { backgroundColor: randomColor() },
      items: []
    },
    items: [
      {
        id: v4(),
        className: "flex half-size hover-effect",
        style: { backgroundColor: randomColor() },
        items: [
          {
            id: v4(),
            className: "flex half-size hover-effect",
            style: { backgroundColor: randomColor() },
            items: [
              {
                id: v4(),
                className: "flex half-size hover-effect",
                style: { backgroundColor: randomColor() },
                items: []
              }
            ]
          }
        ]
      },
      {
        id: v4(),
        className: "flex half-size hover-effect",
        style: { backgroundColor: randomColor() },
        items: [
          {
            id: v4(),
            className: "flex half-size hover-effect",
            style: { backgroundColor: randomColor() },
            items: []
          },
          {
            id: v4(),
            className: "flex half-size hover-effect",
            style: { backgroundColor: randomColor() },
            items: []
          }
        ]
      }
    ]
  };
  const store = createStore(editorReducer, persistedState);
  return store;
};

export default configureStore;
