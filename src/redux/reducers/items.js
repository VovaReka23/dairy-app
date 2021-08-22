const initialState = {
	loadedItems: false,
	items: [{
		id: 1,
		active: false,
		text: 'First item with custom name',
		countComent: 0,
	},
	{
		id: 2,
		active: true,
		text: 'Second item is active',
		countComent: 0,
	}],
}

const items = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ITEMS':
			const itemsLocalSt = JSON.parse(localStorage.getItem('items'));
			return {
				...state,
				items: itemsLocalSt,
			};
		case 'ADD_ITEM':
			const newItem = {
				id: Date.now(),
				countComent: 0,
				text: action.payload,
			};
			const items = [...state.items, newItem];
			localStorage.setItem('items', JSON.stringify(items));
			return {
				...state,
				items: items,
			};
		case 'ACTIVE_ITEM': {
			const item = state.items.map((item) => {
				if (item.id === action.payload) {
					item.active = true;
				} else {
					item.active = false;
				}
				return item
			})
			localStorage.setItem('items', JSON.stringify(item));
			return {
				...state,
				items: item,
			};
		}


		case 'REMOVE_ITEM': {
			const newItemFilter = state.items.filter((item) => item.id !== action.payload)
			localStorage.setItem('items', JSON.stringify(newItemFilter));
			return {
				...state,
				items: newItemFilter,
			};
		}
		default:
			return state
	}
};

export default items;
