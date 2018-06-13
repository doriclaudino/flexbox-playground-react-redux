import { createStore } from "redux";
import { editorReducer } from "./reducers";
import v4 from "uuid";
import randomColor from "randomcolor";
import throttle from "lodash.throttle";
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  var persistedState = loadState();
  
  
  if(!persistedState) persistedState= {
    base_child: {
      id: `"${v4()}"`,
      className: "half-size hover-effect",
      style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width": "50%", "height": "50%", },
      items: []
    },
    items: [
      {
        id: `"${v4()}"`,
        className: "half-size hover-effect",
        style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width": "50%", "height": "50%", },
        items: [
        ]
      }
    ]
  };

  const store = createStore(editorReducer, persistedState);

  store.subscribe(throttle(() => {
    saveState({
      items: store.getState().items,
      base_child: store.getState().base_child
    });
  }, 1000));

  return store;
};

export default configureStore;
