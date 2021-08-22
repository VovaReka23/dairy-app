// Get Comments from localStorage
const getComments = (comments) => ({
  type: 'GET_COMMENT',
  payload: comments,
});

// Get Comments active item from localStorage
const getCommentsItem = (comments) => ({
  type: 'GET_COMMENT_ITEM',
  payload: comments,
});

// Add Comment 
const addComment = (text, idUser) => ({
  type: 'ADD_COMMENT',
  payload: { text, idUser },
});

// Set Comments to items 
const setCommentsItem = (id) => ({
  type: 'SET_COMMENT_ITEM',
  payload: id,
});

// Set count comment
const setCommentsCount = () => ({
  type: 'SET_COMMENT_COUNT'
});

// Remove comment
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

