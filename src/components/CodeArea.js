import React from "react";
import { PropTypes } from "prop-types";

const CodeArea = props => {
  return (
    <textarea
      className="no-resize full-size border-box"
      defaultValue={props.code}
      value={props.code}
    />
  );
};

CodeArea.defaultProps = {
  code: "/** select an element */"
};

CodeArea.propTypes = {
  code: PropTypes.string
};

export default CodeArea;
