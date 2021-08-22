import React, { useCallback, useState } from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  Block,
  Button,
  Input,
  ItemList,
  CommentsList,
  Textarea
} from '../components'
import {
  addItem,
  getItem,
  setActiveItem
} from '../redux/actions/items'
import {
  addComment,
  setCommentsItem,
  setCommentsCount,
  getComments,
  getCommentsItem
} from '../redux/actions/comments'

const Home = () => {
  const items = useSelector(({ items }) => items.items);
  const [activeTab, setActiveTab] = useState(1);
  const comments = useSelector(({ comments }) => comments.commentsItem);
  const commentsCount = useSelector(({ comments }) => comments.commentsCount);
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    const itemActive = items.filter((item) => item.active)
    setActiveTab(itemActive[0].id);
    dispatch(setCommentsItem(itemActive[0].id));
    dispatch(setCommentsCount());
    if (localStorage.getItem('items')) {
      dispatch(getItem(comments));
    }
    if (localStorage.getItem('commentsItem')) {
      getCommentsItem(localStorage.getItem('commentsItem'));
    }
    if (localStorage.getItem('comments')) {
      getComments(localStorage.getItem('comments'));
    }
  }, [])

  const onClickAddItem = useCallback(() => {
    if (inputText) {
      dispatch(addItem(inputText));
      setInputText('');
    }
  }, [dispatch, inputText])

  const keydownHandler = (e) => {
    if (e.charCode === 13 && e.ctrlKey && e.target.value) {
      dispatch(addComment(e.target.value, activeTab));
      e.target.value = '';
      dispatch(setCommentsItem(activeTab));
      dispatch(setCommentsCount());
    }
  }

  const onChangeInput = useCallback((event) => {
    setInputText(event.target.value)
  }, [])

  // set active tab 
  const onCickActive = useCallback((event, id) => {
    event.stopPropagation();
    setActiveTab(id)
    dispatch(setActiveItem(id));
    dispatch(setCommentsItem(id));
  }, [dispatch])

  return (
    <div className="container">
      <Block className={'items'}>
        <h2>Items</h2>
        <div className="d-flex s-between p-25t">
          <Input value={inputText} onChange={onChangeInput} placeholder="Type name here..." />
          <Button add onClick={onClickAddItem}>Add new</Button>
        </div>
        <ItemList commentsCount={commentsCount} onCickActive={onCickActive} items={items} />
      </Block>
      <Block className={'comments'}>
        <h2>Comments #{activeTab}</h2>
        {comments.length === 0 && <h4>No any Comments</h4>}
        {comments.length !== 0 &&
          <CommentsList comments={comments} />}
        <div className="d-flex s-between">
          <span className="user-picture"></span>
          <Textarea onKeyPress={keydownHandler} />
        </div>
      </Block>
    </div>
  )
}
export default React.memo(Home)