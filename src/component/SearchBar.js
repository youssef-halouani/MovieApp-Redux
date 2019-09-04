import React from 'react';
import Star from './Star';
import {searchRating,searchTitle} from '../actions/Actions';
import { connect } from 'react-redux';


function SearchBar(props) {
    return (
       
<nav className="navbar navbar-dark bg-dark">

  <form className="form-inline">
    <input className="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="text" onChange={(e) => props.searchTitle(e.target.value)}></input>
    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
  </form>
  <p>MovieApp</p>
  <Star changeRate={(e)=>{props.searchRating(e)}} count={props.count} />
</nav>
    )
}

const mapStateToProps=(state) => {
 
  return {
    count:state.SearchRatingReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchRating: rate => dispatch(searchRating(rate)),
    searchTitle: search=>dispatch(searchTitle(search))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(SearchBar);
