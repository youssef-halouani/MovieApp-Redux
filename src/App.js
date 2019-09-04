import React from 'react';
import './App.css';
import SearchBar from './component/SearchBar';
import List from './component/Movie';
import Container from './component/ModalExample';
import {searchTitle} from './actions/Actions';
import {connect} from "react-redux";

const  App = ({searchTitle}) => {
  return (
    <div className="App">
    <SearchBar onChange={(e) => {searchTitle(e.target.value)}} />
    <List/>
    <Container/>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    searchTitle: newFilter => dispatch(searchTitle(newFilter)),
  };
}

const Film = connect(null,mapDispatchToProps)(App)
export default Film;