import React from 'react';
import Star from './Star';
import { connect } from "react-redux";


function Movie(props) {
    return (
        <div className='all-film'>
            {props.movies.filter(el => el.title.toLowerCase().includes(props.search.toLowerCase().trim()) && el.rating >= props.rate).map((el) =>
                <div className='film'>
                    <Star count={el.rating} />
                    <img className='image' src={el.img} alt='' />
                    <p>{el.title}</p>
                </div>

            )}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        movies: state.AddReducer,
        search: state.SearchTitleReducer,
        rate: state.SearchRatingReducer
    };
};

const List = connect(mapStateToProps)(Movie);
export default List;