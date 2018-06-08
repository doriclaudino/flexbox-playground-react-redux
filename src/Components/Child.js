import React from "react";

const Child = props => <div {...props}>{props.children}</div>;

export default Child;
