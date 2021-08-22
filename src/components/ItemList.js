import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import cn from 'classnames';
import { removeItem } from '../redux/actions/items';
import { removeComments } from '../redux/actions/comments';
import styles from '../assets/scss/ItemList.module.scss';

const ItemList = ({ items, onCickActive, commentsCount }) => {
  const dispatch = useDispatch();
  const onClickRemoveItem = useCallback((event, id) => {
    event.stopPropagation();
    dispatch(removeItem(id));
    dispatch(removeComments(id));
  }, [dispatch])
  return (
    <ul className={styles.list}>
      {items.length !== 0 && items.map((item) => (
        <li key={item.id} onClick={(e) => onCickActive(e, item.id)} className={cn(styles.item, {
          [styles.active]: item.active
        })}>
          <h3>{item.text} {commentsCount[item.id] && <span className={styles.count}>{commentsCount[item.id]}</span>}</h3>
          <Button onClick={(event) => onClickRemoveItem(event, item.id)} del>Delete</Button>
        </li>
      ))}
    </ul>
  )
};
ItemList.propTypes = {
  items: PropTypes.array,
  onCickActive: PropTypes.func,
  commentsCount: PropTypes.any
}
export default ItemList;