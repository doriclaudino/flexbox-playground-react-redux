import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// eslint-disable-next-line 
import * as style from "./styles/styles.css";
import configureStore from "./configureStore";
import Editor from "./components/Editor";

const store = configureStore();
store.subscribe(() => {
  console.log("state changed!");
});
window.store = store;

const App = () => (
  <Provider store={store}>
    <Editor />
  </Provider>
);
render(<App />, document.getElementById("root"));
