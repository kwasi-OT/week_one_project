import React from "react";

function Column({image, title, text, button}) {
    return (
        <div className="column">
            <div>{image}</div>
            <div><h2>{title}</h2></div>
            <div><p>{text}</p></div>
            <div className="button">{button}</div>
        </div>
    );
}

export default Column;
