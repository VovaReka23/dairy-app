// Get Items from localStorage
const getItem = () => ({
  type: 'GET_ITEMS'
});

// Remove item 
const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});

// Add item
const addItem = (text) => ({
  type: 'ADD_ITEM',
  payload: text,
});

// Set active item
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

