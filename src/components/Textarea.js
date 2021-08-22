import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/Textarea.module.scss';
const Textarea = ({ onKeyPress }) => {
  return (
    <textarea onKeyPress={onKeyPress} className={styles.textarea} name="text"></textarea>
  )
}
Textarea.propTypes = {
  onKeyPress: PropTypes.func
}
export default Textarea;