import React from "react";

const GroupButtons = ({
    onRootClick,
    onAddChildClick,
    onDelChildClick,
    disableRootButton,
    disableDelButton,
    disableAddButton,
}) => {
    return (
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <button onClick={onRootClick} disabled={disableRootButton}>
                root
        </button>
            <button onClick={onAddChildClick} disabled={disableAddButton}>
                add
        </button>
            <button onClick={onDelChildClick} disabled={disableDelButton}>
                del
        </button>
        </div>
    );
};

export default GroupButtons;


