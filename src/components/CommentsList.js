import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/CommentsList.module.scss';

const CommentsList = ({ comments }) => {
  return (
    <ul className={styles.comments}>
      {comments.length !== 0 && comments.map((comment, index) => (
        <li className={styles.comment} key={index}>
          <span style={{ background: comment.user }} className={styles.user}></span>
          <p className={styles.message}>{comment.text}</p>
        </li>
      ))}
    </ul>
  )
}

CommentsList.propTypes = {
  comments: PropTypes.array
}

export default CommentsList;