import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/Block.module.scss';
const Block = ({ children, className }) => {
  return (
    <div className={`${styles.block} ${className}`}>
      {children}
    </div>
  )
}
Block.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string
}
export default Block;