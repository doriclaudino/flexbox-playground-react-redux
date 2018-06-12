import React from "react";

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
    <div style={{
      display: "flex",
      width: "50%",
      boxSizing: "border-box",
      minWidth: "50%",
      minHeight: "50%",
      flexGrow: 2,
      border: "0.1px solid rgb(169, 169, 169)"
    }}>
      {mapper(items, onChildClick, onChildDoubleClick)}
      {children}
    </div>
  );
};

export default EditorScreen;
