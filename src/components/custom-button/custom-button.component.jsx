import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({children, otherClass, ...otherProps}) => (
    <button className={`${otherClass} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;