import React from 'react';
import styles from '../assets/scss/Input.module.scss';
const Input = ({ placeholder, onChange, value }) => {
  return (
    <>
      <input onChange={onChange} value={value} className={styles.input} placeholder={placeholder} />
    </>

  )
}
export default Input;