'use client';

import React from 'react';
import styles from './TextArea.module.css';

const TextArea = React.forwardRef(({ 
  className,
  error,
  disabled,
  variant = 'horrific', // Add variant prop with default
  hideAnimations, // Add animation toggle
  ...props 
}, ref) => {
  const getClassName = () => {
    const classes = [styles.base];
    
    if (variant === 'horrific') {
      classes.push(styles.horrific);
      if (!hideAnimations) {
        classes.push(styles.animated);
      }
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        ref={ref}
        className={getClassName()}
        disabled={disabled}
        {...props}
      />
      {error && (
        <div className={styles.errorLabel}>
          {error}
        </div>
      )}
      {disabled && variant === 'horrific' && (
        <div className={styles.disabledOverlay}>
          ×
        </div>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';
export default TextArea;
