import React from "react";
// eslint-disable-next-line 
import CodeMirror1 from "react-codemirror";
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/neo.css');

class PageCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: props.code
        };
        this.instance = null;
    }

    componentDidMount() {
        // setTimeout(() => {this.instance.refresh()}, 0); // Doesn't work
        this.instance.refresh();
    }

    componentWillReceiveProps(nextProps) {
        this.setcode(nextProps.code)
    }

    setcode = code => {
        this.setState({ code });
    };

    render() {
        return (
            <div style={{ width: "100%", maxHeight: "50%" }}>
                <CodeMirror
                    editorDidMount={editor => { this.instance = editor }}
                    value={this.state.code}
                    options={{
                        mode: 'javascript',
                        theme: 'neo',
                        lineNumbers: true,
                        readOnly: true,
                    }}
                />
            </div>)
    }
}

export default PageCode;
