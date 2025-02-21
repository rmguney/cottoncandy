'use client';

import React from 'react';
import styles from './Dropdown.module.css';

export function useDropdown(props = {}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(props.defaultValue);

  const selectProps = React.useMemo(() => ({
    'aria-invalid': !!props.error,
    'aria-disabled': props.disabled,
    value: props.value !== undefined ? props.value : selectedValue,
    onFocus: (e) => {
      setFocused(true);
      props.onFocus?.(e);
    },
    onBlur: (e) => {
      setFocused(false);
      setIsOpen(false);
      props.onBlur?.(e);
    },
    onClick: (e) => {
      setIsOpen(prev => !prev);
      props.onClick?.(e);
    },
    onChange: (e) => {
      if (props.value === undefined) {
        setSelectedValue(e.target.value);
      }
      setIsOpen(false);
      props.onChange?.(e);
    },
    disabled: props.disabled,
    ...props
  }), [props, selectedValue]);

  return {
    selectProps,
    isOpen,
    setIsOpen,
    focused,
    selectedValue: props.value !== undefined ? props.value : selectedValue,
    setSelectedValue: props.value === undefined ? setSelectedValue : () => {}
  };
}

const Dropdown = React.forwardRef(({ 
  as,
  children,
  className,
  options = [],
  error,
  disabled,
  unstyled,
  ...props 
}, ref) => {
  const state = useDropdown(props);
  const Component = as || 'select';

  if (typeof children === 'function') {
    return children({ ...state, ref });
  }

  return (
    <div className={styles.wrapper}>
      <Component
        ref={ref}
        className={unstyled ? className : `${styles.select} ${className || ''}`}
        {...state.selectProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Component>
      {error && !unstyled && <div className={styles.errorLabel}>{error}</div>}
      {disabled && !unstyled && <div className={styles.disabledOverlay}>×</div>}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';
export default Dropdown;
