import { createStore } from "redux";
import { editorReducer } from "./Reducers";
import v4 from "uuid";

const random = i => {
  let array = ["#6b5b95", "#feb236", "#d64161", "#ff7b25"];
  return array[i];
};

const configureStore = () => {
  const persistedState = {
    base_child: {
      id: v4(),
      className: "flex half-size hover-effect",
      style: { backgroundColor: random(0) },
      children: []
    },
    items: [
      {
        id: 1,
        className: "flex half-size hover-effect",
        style: { backgroundColor: random(3) },
        children: [
          {
            id: 3,
            className: "flex half-size hover-effect",
            style: { backgroundColor: random(1) },
            children: []
          }
        ]
      },
      {
        id: 2,
        className: "flex half-size hover-effect",
        style: { backgroundColor: random(0) },
        children: [
          {
            id: 4,
            className: "flex half-size hover-effect",
            style: { backgroundColor: random(2) },
            children: []
          }
        ]
      }
    ]
  };
  const store = createStore(editorReducer, persistedState);
  return store;
};

export default configureStore;
