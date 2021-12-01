import React, { useState } from 'react';
import styles from './Button.css';

export const Button = (props) => {
  const { label, onClick } = props;

  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};
