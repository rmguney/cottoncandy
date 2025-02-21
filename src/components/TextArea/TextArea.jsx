'use client';

import React from 'react';
import styles from './TextArea.module.css';

export function useTextArea(props = {}) {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState(props.defaultValue || '');
  
  const textareaProps = React.useMemo(() => ({
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
    textareaProps,
    focused,
    value: props.value !== undefined ? props.value : value,
    setValue: props.value === undefined ? setValue : () => {}
  };
}

const TextArea = React.forwardRef(({ 
  as,
  children,
  className,
  error,
  disabled,
  unstyled, 
  ...props 
}, ref) => {
  const state = useTextArea(props);
  const Component = as || 'textarea';

  if (typeof children === 'function') {
    return children({ ...state, ref });
  }

  return (
    <div className={styles.wrapper}>
      <Component
        ref={ref}
        className={unstyled ? className : `${styles.textarea} ${className || ''}`}
        {...state.textareaProps}
      />
      {error && !unstyled && <div className={styles.errorLabel}>{error}</div>}
      {disabled && !unstyled && <div className={styles.disabledOverlay}>×</div>}
    </div>
  );
});

TextArea.displayName = 'TextArea';
export default TextArea;
