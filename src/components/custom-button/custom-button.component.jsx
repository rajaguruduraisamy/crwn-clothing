import React from 'react';

import './custom-button.styles.scss';

export const CustomButton = ({ children, inverted, className, ...otherButtonProps }) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} custom-button ${className}`} {...otherButtonProps}>
      {children}
    </button>
  )
}
