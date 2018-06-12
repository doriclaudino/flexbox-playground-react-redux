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
        let tempHtml =
            `<div
          id=${item.id}
          style=${JSON.stringify(item.style)}
        >
          ${item.items && item.items.length
                ? mapHtmlBody(item.items).join(" ")
                : ""}
        </div>`
            ;
        return tempHtml;
    });
};

const mapHtmlCode = (code) => {
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