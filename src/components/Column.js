import React from "react";

function Column({image, title, text, button}) {
    return (
        <div className="column">
            <div>{image}</div>
            <div><h1>{title}</h1></div>
            <div><p>{text}</p></div>
            <div>{button}</div>
        </div>
    );
}

export default Column;
