  import { createStore } from "redux";
  import { editorReducer } from "./reducers";
  import v4 from "uuid";
  import randomColor from "randomcolor";

  const configureStore = () => {
    const persistedState = {
      base_child: {
        id: v4(),
        className: "half-size hover-effect",
        style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width":"50%", "height":"50%", },
        items: []
      },
      items: [
        {
          id: v4(),
          className: "half-size hover-effect",
          style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width":"50%", "height":"50%", },
          items: [
            {
              id: v4(),
              className: "half-size hover-effect",
              style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width":"50%", "height":"50%", },
              items: [
                {
                  id: v4(),
                  className: "half-size hover-effect",
                  style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width":"50%", "height":"50%", },
                  items: []
                }
              ]
            }
          ]
        },
        {
          id: v4(),
          className: "half-size hover-effect",
          style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width":"50%", "height":"50%", },
          items: [
            {
              id: v4(),
              className: "half-size hover-effect",
              style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width":"50%", "height":"50%", },
              items: []
            },
            {
              id: v4(),
              className: "half-size hover-effect",
              style: { "display": "flex", "flex": "0 1 auto", "flexFlow": "row nowrap", "backgroundColor": randomColor(), "width":"50%", "height":"50%", },
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
