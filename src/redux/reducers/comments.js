const initialState = {
	loadedСomments: false,
	comments: [
		{
			id: 1,
			idItem: 1,
			text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It wasintroduced to the Information Age in the mid-1980s"
		},
		{
			id: 3,
			idItem: 1,
			text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It wasintroduced to the Information Age in the mid-1980s"
		},
		{
			id: 2,
			idItem: 2,
			text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets."
		}
	],
	commentsItem: [],
	commentsCount: []
}

const comments = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_COMMENT': {
			const comments = JSON.parse(localStorage.getItem('comments'));
			return {
				...state,
				comments: comments,
			};
		}
		case 'GET_COMMENT_ITEM': {
			const comments = JSON.parse(localStorage.getItem('commentsItem'));
			return {
				...state,
				commentsItem: comments,
			};
		}
		case 'ADD_COMMENT':
			let newСomments = {
				id: Date.now(),
				idItem: action.payload.idUser,
				user: '#000',
				text: action.payload.text,
			};
			const comments = [...state.comments, newСomments];
			localStorage.setItem('comments', JSON.stringify(comments));
			return {
				...state,
				comments: comments,
			};
		case 'SET_COMMENT_ITEM':
			const filterComments = state.comments.filter((comment) => comment.idItem === action.payload);
			localStorage.setItem('commentsItem', JSON.stringify(filterComments));
			return {
				...state,
				commentsItem: filterComments
			};
		case 'SET_COMMENT_COUNT': {
			const commentsCount = {};
			state.comments.forEach((comment) => {
				if (!commentsCount[comment.idItem]) {
					commentsCount[comment.idItem] = 1;
				} else {
					commentsCount[comment.idItem] += 1;
				}
			})
			localStorage.setItem('commentsCount', JSON.stringify(commentsCount));
			return {
				...state,
				commentsCount: commentsCount
			};
		}
		case 'REMOVE_COMMENTS': {
			console.log(action.payload)
			const commentsFilter = state.comments.filter((comment) => comment.idItem !== action.payload);
			const commentsItemFilter = state.commentsItem.filter((comment) => comment.idItem !== action.payload);
			localStorage.setItem('comments', JSON.stringify(commentsFilter));
			localStorage.setItem('commentsItem', JSON.stringify(commentsItemFilter));
			return {
				...state,
				comments: commentsFilter,
				commentsItem: commentsItemFilter
			};
		}
		default:
			return state
	}
};

export default comments;
