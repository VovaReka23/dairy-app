import React from 'react';
import styles from '../assets/scss/Textarea.module.scss';
const Textarea = ({ onKeyPress }) => {
  return (
    <textarea onKeyPress={(e) => onKeyPress(e)} className={styles.textarea} name="text"></textarea>
  )
}
export default Textarea;