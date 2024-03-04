import React from 'react';
import '../Button.css';

const Button = ({ styles, children }) => {
  return (
    <button type='button'  className={`button ${styles} button-theme`}>
    {children}
    <span></span><span></span><span></span><span></span>
    Get Started
    </button>
  )
}

export default Button
