import { createStore } from "redux";
import { editorReducer } from "./Reducers";

const random = i => {
  let array = ["#6b5b95", "#feb236", "#d64161", "#ff7b25"];
  return array[i];
};

const configureStore = () => {
  const persistedState = {
    children: [
      {
        id: 1,
        className: "flex half-size hover-effect",
        onClick: function(e) {
          e.stopPropagation();
          console.log(e.target.id);
        },
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
