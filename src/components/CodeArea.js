import React from "react";
import { PropTypes } from "prop-types";

const CodeArea = props => {
  return (
    <textarea className="no-resize full-size border-box" value={props.code} />
  );
};

CodeArea.defaultProps = {
  code: "/** [clickOn] or [add] an element */"
};

CodeArea.propTypes = {
  code: PropTypes.string
};

export default CodeArea;
