import { connect } from "react-redux";
import PageCode from "../components/PageCode";

const htmlHeader = (body) => {
    return (
        `<html>
            <head></head>
            <body>
                ${body}
            </body>
        </html>`
    );
}

const mapHtmlBody = (items = []) => {
    return items.map(item => {
        return (
            `<div
          id=${item.id}
          style=${JSON.stringify(item.style)}
        >
          ${item.items && item.items.length
                ? mapHtmlBody(item.items)
                : ""}
        </div>`
        );
    });
};

const mapHtmlCode = (code) => {
    console.log(code)
    let body;
    body = mapHtmlBody(code);
    console.log(body)
    return htmlHeader(body);
}


const mapStateToProps = state => ({
    code: mapHtmlCode(state.items),
    readOnly: true
});

export default connect(mapStateToProps, null)(PageCode);