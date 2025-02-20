'use client';

import React from 'react';
import styles from './Input.module.css';

export function useInput(props = {}) {
  const [focused, setFocused] = React.useState(false);
  
  return {
    inputProps: {
      onFocus: (e) => {
        setFocused(true);
        props.onFocus?.(e);
      },
      onBlur: (e) => {
        setFocused(false);
        props.onBlur?.(e);
      },
      ...props
    },
    focused
  };
}

const Input = React.forwardRef(({ 
  render,
  children,
  className,
  ...props 
}, ref) => {
  const { inputProps, focused } = useInput(props);

  if (render) {
    return render({ inputProps, focused, ref });
  }

  if (typeof children === 'function') {
    return children({ inputProps, focused, ref });
  }

  // Default awful styling
  return (
    <input
      ref={ref}
      className={`${styles.input} ${className || ''}`}
      {...inputProps}
    />
  );
});

Input.displayName = 'Input';
export default Input;
