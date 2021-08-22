import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/Input.module.scss';
const Input = ({ placeholder, onChange, value }) => {
  return (
    <input onChange={onChange} value={value} className={styles.input} placeholder={placeholder} />
  )
};
Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
}
export default Input;