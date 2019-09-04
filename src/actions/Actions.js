import {ADD , SEARCH_TITLE , SEARCH_RATING} from './ActionType'

export function addMovie (payload) {
    return {type:ADD, payload}
}

export function searchTitle(payload) {
    return {type:SEARCH_TITLE, payload }  
}

export function searchRating(payload) {
    return {type:SEARCH_RATING, payload }  
}
