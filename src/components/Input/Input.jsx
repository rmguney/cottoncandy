'use client';

import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(({ 
  className, 
  label, 
  error,
  required,
  ...props 
}, ref) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.error : ''} ${className || ''}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
