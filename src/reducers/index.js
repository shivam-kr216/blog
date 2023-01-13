import blogReducer from './blogReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    blogReducer: blogReducer
});

export default rootReducer;