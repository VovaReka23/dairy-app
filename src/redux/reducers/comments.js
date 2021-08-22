const initialState = {
	loadedСomments: false,
	comments: [
		{
			id: 1,
			user: '#ff8a00',
			idItem: 1,
			text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It wasintroduced to the Information Age in the mid-1980s"
		},
		{
			id: 3,
			user: '#ff8a00',
			idItem: 1,
			text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It wasintroduced to the Information Age in the mid-1980s"
		},
		{
			id: 2,
			user: '#ff8a00',
			idItem: 2,
			text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets."
		}
	],
	commentsItem: [],
	color: ['#ff8a00', '#47568c', '#27ccc0', '#ff2f5a', '#3e7ce9', '#a4ff3c', '#9821e5', '#feff0f', '#ff83cf', '#41e7ff'],
	commentsCount: []
}

const comments = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_COMMENT': {
			return {
				...state,
				comments: action.payload,
			};
		}

		case 'GET_COMMENT_ITEM': {
			return {
				...state,
				commentsItem: action.payload,
			};
		}

		case 'ADD_COMMENT': {
			var randomNum = Math.floor((Math.random() * 10) + 1);
			let newСomments = {
				id: Date.now(),
				idItem: action.payload.idUser,
				user: state.color[randomNum],
				text: action.payload.text,
			};
			const commentsAll = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : state.comments;
			const comments = [...commentsAll, newСomments];
			localStorage.setItem('comments', JSON.stringify(comments));
			return {
				...state,
				comments: comments,
			};
		}

		case 'SET_COMMENT_ITEM': {
			const comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : state.comments;
			const filterComments = comments.filter((comment) => comment.idItem === action.payload);
			localStorage.setItem('commentsItem', JSON.stringify(filterComments));
			return {
				...state,
				commentsItem: filterComments
			};
		}

		case 'SET_COMMENT_COUNT': {
			const commentsCount = {};
			const comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : state.comments;
			comments.forEach((comment) => {
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
