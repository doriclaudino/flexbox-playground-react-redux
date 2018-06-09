import React from "react";
import Child from "../Components/Child";

const mapper = (items = [], onClick, onDoubleClick) => {
  return items.map(item => {
    return (
      <div
        key={item.id}
        id={item.id}
        style={item.style}
        className={item.className}
        onClick={e => onClick(item.id, e)}
        onDoubleClick={e => onDoubleClick(item.id, e)}
      >
        {item.items && item.items.length
          ? mapper(item.items, onClick, onDoubleClick)
          : ""}
      </div>
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
      {mapper(items, onChildClick, onChildDoubleClick)}
      {children}
    </div>
  );
};

export default EditorScreen;
