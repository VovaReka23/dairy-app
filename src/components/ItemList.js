import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import Button from './Button'
import { removeItem } from '../redux/actions/items'
import { removeComments } from '../redux/actions/comments'
import styles from '../assets/scss/ItemList.module.scss';

const ItemList = ({ items, onCickActive, commentsCount }) => {
  const dispatch = useDispatch();
  const onClickRemoveItem = useCallback((event, id) => {
    event.stopPropagation();
    dispatch(removeItem(id));
    dispatch(removeComments(id));
  })
  return (
    <ul className={styles.list}>
      {items.length !== 0 && items.map((item) => (
        <li key={item.id} onClick={(e) => onCickActive(e, item.id)} className={`${styles.item} ${item.active && styles.active}`}>
          <h3>{item.text} {commentsCount[item.id] && <span className={styles.count}>{commentsCount[item.id]}</span>}</h3>
          <Button onClick={(event) => onClickRemoveItem(event, item.id)} del>Delete</Button>
        </li>
      ))}
    </ul>
  )
}
export default ItemList;