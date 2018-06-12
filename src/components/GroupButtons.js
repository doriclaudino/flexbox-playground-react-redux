import React from "react";

const saveToFile = (filename, data) => {
    var blob = new Blob([data], { type: 'text/csv' });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}

const GroupButtons = ({
    onRootClick,
    onAddChildClick,
    onDelChildClick,
    disableRootButton,
    disableDelButton,
    disableAddButton,
    code,
    nextId
}) => {
    const fileName = `${nextId}.html`;
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <button onClick={onRootClick} disabled={disableRootButton}>
                root
        </button>
            <button onClick={onAddChildClick} disabled={disableAddButton}>
                add
        </button>
            <button onClick={onDelChildClick} disabled={disableDelButton}>
                del
        </button>
            <button
                onClick={() => {
                    var win = window.open(`${nextId}`, '_blank');
                    win.document.write(code)
                    win.focus();
                }}>
                open
        </button>
            <button
                onClick={() => {
                    saveToFile(fileName, code)
                }}>
                save
        </button>
        </div>
    );
};

export default GroupButtons;


