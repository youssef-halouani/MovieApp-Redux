import {SEARCH_RATING} from '../actions/ActionType'

function SearchRatingReducer (state=0,action){
    if(action.type === SEARCH_RATING){
        return action.payload;
    }
    return state ;
};
export default SearchRatingReducer;