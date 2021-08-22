import React from 'react';
import styles from '../assets/scss/Button.module.scss';
const Button = ({ children, add, del, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${add && styles.add} ${del && styles.del}`}>
      {children}
    </button>

  )
}
export default Button;