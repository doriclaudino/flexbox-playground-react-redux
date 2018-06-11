import React from "react";
// eslint-disable-next-line 
import CodeMirror1 from "react-codemirror";
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/neo.css');

class CodeArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.code,
      updateInterval: props.updateInterval || 100
    };
  }

  removeQuotes = (json) => {
    return !json ?
      json :
      // eslint-disable-next-line 
      json.replace(/\"([^(\")"]+)\":/g, "$1:") || "";
  }

  addQuotes = (json) => {
    return !json ?
      json :
      // eslint-disable-next-line 
      json.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ') || "";
  }

  componentWillReceiveProps(nextProps) {
    let json = JSON.stringify(nextProps.code, undefined, 4);
    json = this.removeQuotes(json);
    this.setState({ code: json });
  }

  setcode = code => {
    this.setState({ code });
  };

  timeOutHandler = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      let json = this.addQuotes(this.state.code);
      if (this.parser(json)) {
        this.props.onUpdateCode(this.parser(json));
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
      <CodeMirror
        value={this.state.code}
        options={{
          mode: 'javascript',
          theme: 'neo',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, code) => {
          this.setcode(code)
        }}
        onChange={(editor, data, value) => {
          this.timeOutHandler();
        }}
      />)
  }
}

export default CodeArea;
