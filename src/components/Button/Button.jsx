'use client';

import React from 'react';
import styles from './Button.module.css';

export function useButton(props = {}) {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const buttonProps = React.useMemo(() => ({
    role: 'button',
    'aria-disabled': props.disabled,
    onMouseDown: (e) => {
      setIsPressed(true);
      props.onMouseDown?.(e);
    },
    onMouseUp: (e) => {
      setIsPressed(false);
      props.onMouseUp?.(e);
    },
    onMouseEnter: (e) => {
      setIsHovered(true);
      props.onMouseEnter?.(e);
    },
    onMouseLeave: (e) => {
      setIsHovered(false);
      setIsPressed(false);
      props.onMouseLeave?.(e);
    },
    onFocus: (e) => {
      setIsFocused(true);
      props.onFocus?.(e);
    },
    onBlur: (e) => {
      setIsFocused(false);
      props.onBlur?.(e);
    },
    onClick: (e) => {
      if (props.disabled) {
        e.preventDefault();
        return;
      }
      if (props.soundEffect) {
        new Audio(props.soundEffect).play().catch(() => {});
      }
      props.onClick?.(e);
    },
    ...props
  }), [props]);

  return {
    buttonProps,
    isPressed,
    isHovered,
    isFocused
  };
}

const Button = React.forwardRef(({ as, children, className, disabled, ...props }, ref) => {
  const state = useButton(props);
  const Component = as || 'button';

  if (typeof children === 'function') {
    return children({ ...state, ref });
  }

  return (
    <div className={styles.wrapper}>
      <Component
        ref={ref}
        className={`${styles.button} ${className || ''}`}
        {...state.buttonProps}
      >
        {children}
      </Component>
      {disabled && <div className={styles.disabledOverlay}>×</div>}
    </div>
  );
});

Button.displayName = 'Button';
export default Button;
