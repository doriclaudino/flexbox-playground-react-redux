import React from "react";
import Child from "../Components/Child";

const mapChildren = (children = [], onClick, onDoubleClick) => {
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
        onClick={e => onClick(id, e)}
        onDoubleClick={e => onDoubleClick(id, e)}
        children={mapChildren(child.children, onClick, onDoubleClick)}
      />
    );
  });
};

const EditorScreen = ({
  items,
  onChildClick,
  onChildDoubleClick,
  children
}) => {
  return (
    <div className="flex screen resize">
      {mapChildren(items, onChildClick, onChildDoubleClick)}
      {children}
    </div>
  );
};

export default EditorScreen;
