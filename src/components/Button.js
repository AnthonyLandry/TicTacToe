import React from 'react';
import './Button.css';

const Button = (props) => (
    <div className="button-wrapper" onClick={props.buttonPressed}>
        {props.name}
    </div>
);

export default Button;