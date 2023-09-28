import React from "react";

function ColorBlock(props) {
    return (
        <div className="color-block" style={{ backgroundColor: props.color }}>{props.color}</div>
    );
}

export default ColorBlock