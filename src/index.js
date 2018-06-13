import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// eslint-disable-next-line 
import * as style from "./styles/styles.css";
import configureStore from "./configureStore";
import Editor from "./components/Editor";
import { loadState, saveState } from './localStorage';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <Editor />
  </Provider>
);
render(<App />, document.getElementById("root"));
