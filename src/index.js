import React from "react";
import { render } from "react-dom";
import Editor from "./Components/Editor";
import * as style from "./styles/styles.css";

const App = () => <Editor />;
render(<App />, document.getElementById("root"));
