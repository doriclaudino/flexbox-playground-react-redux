import React from "react";

const Child = props => {
  return <div {...props}>{props.children}</div>;
};

export default Child;
