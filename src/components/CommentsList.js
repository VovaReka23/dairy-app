import React from 'react';


import styles from '../assets/scss/CommentsList.module.scss';

const CommentsList = ({ comments }) => {
  return (
    <ul className={styles.comments}>
      {comments.length !== 0 && comments.map((comment, index) => (
        <li className={styles.comment} key={index}>
          <span className={styles.user}></span>
          <p className={styles.message}>{comment.text}</p>
        </li>
      ))}
    </ul>
  )
}
export default CommentsList;