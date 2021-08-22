const getComments = () => ({
  type: 'GET_COMMENT'
});
const getCommentsItem = () => ({
  type: 'GET_COMMENT_ITEM'
});
const addComment = (text, idUser) => ({
  type: 'ADD_COMMENT',
  payload: { text, idUser },
});
const setCommentsItem = (id) => ({
  type: 'SET_COMMENT_ITEM',
  payload: id,
});
const setCommentsCount = () => ({
  type: 'SET_COMMENT_COUNT'
});
const removeComments = (id) => ({
  type: 'REMOVE_COMMENTS',
  payload: id,
});
export {
  addComment,
  setCommentsCount,
  getCommentsItem,
  removeComments,
  getComments,
  setCommentsItem
}

