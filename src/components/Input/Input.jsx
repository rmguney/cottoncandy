'use client';

import React from 'react';
import styles from './Input.module.css';

export function useInput(props = {}) {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState(props.defaultValue || '');
  
  const inputProps = React.useMemo(() => ({
    'aria-invalid': !!props.error,
    'aria-disabled': props.disabled,
    value: props.value !== undefined ? props.value : value,
    onFocus: (e) => {
      setFocused(true);
      props.onFocus?.(e);
    },
    onBlur: (e) => {
      setFocused(false);
      props.onBlur?.(e);
    },
    onChange: (e) => {
      if (props.value === undefined) {
        setValue(e.target.value);
      }
      props.onChange?.(e);
    },
    disabled: props.disabled,
    ...props
  }), [props, value]);

  return {
    inputProps,
    focused,
    value: props.value !== undefined ? props.value : value,
    setValue: props.value === undefined ? setValue : () => {}
  };
}

const Input = React.forwardRef(({ 
  as,
  children,
  className,
  error,
  disabled,
  unstyled,
  ...props 
}, ref) => {
  const state = useInput(props);
  const Component = as || 'input';

  if (typeof children === 'function') {
    return children({ ...state, ref });
  }

  return (
    <div className={styles.wrapper}>
      <Component
        ref={ref}
        className={unstyled ? className : `${styles.input} ${className || ''}`}
        {...state.inputProps}
      />
      {error && !unstyled && <div className={styles.errorLabel}>{error}</div>}
      {disabled && !unstyled && <div className={styles.disabledOverlay}>×</div>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
