import React from "react";
import Child from "../Components/Child";

const mapChildren = (children = [], onclick) => {
  /*combined destructuring, JSX Spread */
  return children.map(({ id, ...child }) => {
    return (
      <Child
        key={id}
        id={id}
        {...child}
        /**if statment
         * children={child.children && mapChildren(child.children)}
         */
        onClick={e => onclick(id, e)}
        children={mapChildren(child.children, onclick)}
      />
    );
  });
};

const EditorScreen = ({ items, onChildClick, children }) => {
  return (
    <div className="flex screen resize">
      {mapChildren(items, onChildClick)}
      {children}
    </div>
  );
};

export default EditorScreen;
