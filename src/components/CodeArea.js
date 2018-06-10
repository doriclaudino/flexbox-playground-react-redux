import React from "react";

class CodeArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: props.code,
      updateInterval: props.updateInterval || 100
    };
    this.timeout;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ textAreaValue: JSON.stringify(nextProps.code) });
  }

  setTextAreaValue = textAreaValue => {
    this.setState({ textAreaValue });
  };

  onKeyUpHandler = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.parser(this.state.textAreaValue)) {
        this.props.onUpdateCode(this.parser(this.state.textAreaValue));
      }
    }, this.state.updateInterval);
  };

  parser = text => {
    try {
      return JSON.parse(text);
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
    return false;
  };

  render() {
    return (
      <textarea
        className="no-resize full-size border-box"
        value={this.state.textAreaValue}
        onChange={e => {
          this.setTextAreaValue(e.target.value);
        }}
        onKeyUp={e => {
          this.onKeyUpHandler();
        }}
      />
    );
  }
}

export default CodeArea;
