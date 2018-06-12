import { connect } from "react-redux";
import PageCode from "../components/PageCode";
import prefix from 'react-prefixer';
import decamelizeKeys from "decamelize-keys";

var styles = prefix({
    display: 'flex',
    transition: 'transform 200ms',
    backgroundColor: "black"
});

const removeQuotes = (json) => {
    return !json ?
        json :
        // eslint-disable-next-line 
        json.replace(/["]/g, '');
}
const removeCurlyBraces = (json) => {
    return !json ?
        json :
        // eslint-disable-next-line 
        json.replace(/[{}]/g, '');
}

const replaceCommas = (json) => {
    return !json ?
        json :
        // eslint-disable-next-line 
        json.replace(/[\,]/g, '; ');
}

const handleStyle = (style) => {
    let x;
    x = prefix(style);
    x = decamelizeKeys(style, "-");
    x = JSON.stringify(x);
    x = removeQuotes(x);
    x = removeCurlyBraces(x);
    x = replaceCommas(x);
    return `"${x}"`
}

const htmlHeader = (body) => {
    return (
        `<html>
            <head> 
                <title>
                    flexbox-playground-react-redux
                </title>
            </head>
            <body style="display:flex; border:0px; padding:0px; margin:0px;">
                ${body}
            </body>
        </html>`
    );
}

const mapHtmlBody = (items = []) => {
    return items.map(item => {
        let tempHtml =
            `<div
          id=${item.id}
          style=${handleStyle(item.style)}
        >
          ${item.items && item.items.length
                ? mapHtmlBody(item.items).join(" ")
                : ""}
        </div>`
            ;
        return tempHtml;
    });
};

export const mapHtmlCode = (code) => {
    let html = "", body = "";
    body = mapHtmlBody(code).join(" ");
    html = htmlHeader(body);
    return html;
}


const mapStateToProps = state => ({
    code: mapHtmlCode(state.items),
    readOnly: true
});

export default connect(mapStateToProps, null)(PageCode);