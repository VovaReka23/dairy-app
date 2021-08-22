import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from '../assets/scss/Button.module.scss';
const Button = ({ children, add, del, onClick }) => {
  return (
    <button onClick={onClick} className={cn(styles.button, {
      [styles.add]: add,
      [styles.del]: del
    })}>
      {children}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.string,
  add: PropTypes.bool,
  del: PropTypes.bool,
  onClick: PropTypes.func
}
export default Button;