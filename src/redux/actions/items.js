const getItem = () => ({
  type: 'GET_ITEMS'
});
const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});
const addItem = (text) => ({
  type: 'ADD_ITEM',
  payload: text,
});
const setActiveItem = (id) => ({
  type: 'ACTIVE_ITEM',
  payload: id,
});

export {
  getItem,
  removeItem,
  setActiveItem,
  addItem
}

