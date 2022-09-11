import React from "react";

export const Button = (props) => {
    return (
        <button type="button" onClick={props.onClick}>
            {props.title ? props.title : "Hello!"}
        </button>
    )

};

export default Button;
