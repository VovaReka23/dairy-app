import { combineReducers } from 'redux';
import items from './items';
import comments from './comments';

const rootReducer = combineReducers({
	items, comments
});

export default rootReducer;
