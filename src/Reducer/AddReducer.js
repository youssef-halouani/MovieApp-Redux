import {ADD} from '../actions/ActionType'

const movies = [
    { img: 'https://wallpapercave.com/wp/wp2554984.jpg', title: 'The Dictator', rating: 3 },
    { img: 'https://cdn.windows7themes.net/pics/the-godfather-1.jpg', title: 'The GodFadher', rating: 4 },
    { img: 'https://images7.alphacoders.com/294/thumb-1920-294072.jpg', title: 'Breaking Bad', rating: 5 },
    { img: 'https://wallpaperaccess.com/full/25540.jpg', title: 'Game Of Thrones', rating: 4 }
]

function AddReducer(state = movies, action) {
    if (action.type === ADD) {
        return state.concat(action.payload)
    }
    return state;
};
export default AddReducer;