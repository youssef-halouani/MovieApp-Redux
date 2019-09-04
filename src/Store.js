import { createStore, combineReducers } from "redux";
import AddReducer from './Reducer/AddReducer';
import SearchTitleReducer from './Reducer/SearchTitleReducer';
import SearchRatingReducer from './Reducer/SearchRatingReducer';

const store = createStore(combineReducers({ AddReducer, SearchTitleReducer, SearchRatingReducer }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;