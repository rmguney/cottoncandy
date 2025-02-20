'use client';

import React from 'react';
import styles from './Dropdown.module.css';

export function useDropdown(props = {}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  return {
    selectProps: {
      onFocus: (e) => {
        setFocused(true);
        props.onFocus?.(e);
      },
      onBlur: (e) => {
        setFocused(false);
        props.onBlur?.(e);
      },
      onClick: () => setIsOpen(prev => !prev),
      ...props
    },
    isOpen,
    focused
  };
}

const Dropdown = React.forwardRef(({ 
  render,
  children,
  className,
  options = [],
  error,
  disabled,
  ...props 
}, ref) => {
  const state = useDropdown(props);

  if (render) {
    return render({ ...state, options, ref });
  }

  if (typeof children === 'function') {
    return children({ ...state, options, ref });
  }

  return (
    <div className={styles.wrapper}>
      <select
        ref={ref}
        className={`${styles.select} ${className || ''}`}
        disabled={disabled}
        {...state.selectProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div className={styles.errorLabel}>
          AAAAAA IT BORKED
        </div>
      )}
      {disabled && (
        <div className={styles.disabledOverlay}>
          ×
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';
export default Dropdown;
