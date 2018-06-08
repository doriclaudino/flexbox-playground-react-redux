import React from "react";
import EditorScreen from "./EditorScreen";
import EditorControls from "./EditorControls";
import Child from "./Child";

const random = i => {
  let array = ["#6b5b95", "#feb236", "#d64161", "#ff7b25"];
  return array[i];
};
const code = {
  backgroundColor: "white"
};

const childList = [
  {
    id: 1,
    className: "flex half-size hover-effect",
    onClick: function(e) {
      e.stopPropagation();
      console.log(e);
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
];

const mapElements = (tree = []) => {
  /*combined destructuring, JSX Spread */
  return tree.map(({ id, ...el }) => {
    return (
      <Child
        key={id}
        {...el}
        /**if statment
         * children={el.children && mapElements(el.children)}
         */
        children={mapElements(el.children)}
      />
    );
  });
};

const Editor = () => {
  return (
    <div className="flex border editor">
      <EditorScreen>{mapElements(childList)}</EditorScreen>
      <EditorControls code={childList} />
    </div>
  );
};

export default Editor;
