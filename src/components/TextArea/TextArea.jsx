'use client';

import React from 'react';
import styles from './TextArea.module.css';

const TextArea = React.forwardRef(({ 
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
      <textarea
        ref={ref}
        className={`${styles.textarea} ${error ? styles.error : ''} ${className || ''}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});

TextArea.displayName = 'TextArea';
export default TextArea;
