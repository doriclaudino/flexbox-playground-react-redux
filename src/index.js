import React from "react";
import { render } from "react-dom";
import * as style from "./styles/styles.css";
import configureStore from "./configureStore";
import EditorContainer from "./Containers/EditorContainer";

const store = configureStore();
store.subscribe(() => {
  console.log("state changed!");
});
window.store = store;

const App = () => <EditorContainer store={store} />;
render(<App />, document.getElementById("root"));
