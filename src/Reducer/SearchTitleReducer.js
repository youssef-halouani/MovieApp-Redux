import {SEARCH_TITLE} from '../actions/ActionType'

function SearchTitleReducer (state='',action){
    if(action.type === SEARCH_TITLE){
        return action.payload;
    }
    return state ;
};
export default SearchTitleReducer;