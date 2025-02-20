'use client';

import React from 'react';
import styles from './TextArea.module.css';

export function useTextArea(props = {}) {
  const [focused, setFocused] = React.useState(false);
  const [wordCount, setWordCount] = React.useState(0);

  const handleChange = (e) => {
    const words = e.target.value.trim().split(/\s+/).filter(Boolean).length;
    setWordCount(words);
    props.onChange?.(e);
  };

  return {
    textareaProps: {
      onChange: handleChange,
      onFocus: (e) => {
        setFocused(true);
        props.onFocus?.(e);
      },
      onBlur: (e) => {
        setFocused(false);
        props.onBlur?.(e);
      },
      ...props
    },
    focused,
    wordCount
  };
}

const TextArea = React.forwardRef(({ 
  render,
  children,
  className,
  ...props 
}, ref) => {
  const state = useTextArea(props);

  if (render) {
    return render({ ...state, ref });
  }

  if (typeof children === 'function') {
    return children({ ...state, ref });
  }

  return (
    <textarea
      ref={ref}
      className={`${styles.textarea} ${className || ''}`}
      {...state.textareaProps}
    />
  );
});

TextArea.displayName = 'TextArea';
export default TextArea;
