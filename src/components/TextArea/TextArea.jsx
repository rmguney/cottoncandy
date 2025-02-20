'use client';

import React from 'react';
import styles from './TextArea.module.css';

const TextArea = React.forwardRef(({ 
  className,
  error,
  disabled,
  ...props 
}, ref) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        ref={ref}
        className={`${styles.textarea} ${className || ''}`}
        disabled={disabled}
        {...props}
      />
      {error && (
        <div className={styles.errorLabel}>
          {error}
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

TextArea.displayName = 'TextArea';
export default TextArea;
