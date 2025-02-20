'use client';

import React from 'react';
import styles from './Button.module.css';

const Button = React.forwardRef(({ 
  className, 
  children,
  variant,
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={`${styles.button} ${variant ? styles[variant] : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
