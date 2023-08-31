import React from "react";

function Column({image, title, text, cta}) {
    return (
        <div className="column">
            <div>{image}</div>
            <div><h2>{title}</h2></div>
            <div><p>{text}</p></div>
            <div className="button">{cta}</div>
        </div>
    );
}

export default Column;
