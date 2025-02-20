'use client';

import React from 'react';
import styles from './Button.module.css';

export function useButton(props = {}) {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return {
    buttonProps: {
      onMouseDown: () => setIsPressed(true),
      onMouseUp: () => setIsPressed(false),
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => {
        setIsHovered(false);
        setIsPressed(false);
      },
      ...props
    },
    isPressed,
    isHovered
  };
}

const Button = React.forwardRef(({ 
  render,
  children,
  className,
  soundEffect,
  ...props 
}, ref) => {
  const state = useButton(props);
  
  const handleClick = (e) => {
    if (soundEffect) {
      new Audio(soundEffect).play().catch(() => {});
    }
    props.onClick?.(e);
  };

  if (render) {
    return render({ ...state, ref });
  }

  if (typeof children === 'function') {
    return children({ ...state, ref });
  }

  return (
    <button
      ref={ref}
      className={`${styles.button} ${className || ''}`}
      {...state.buttonProps}
      onClick={handleClick}
      data-sound={!!soundEffect}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
