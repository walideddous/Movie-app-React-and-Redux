import React, { Component } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';
import { BrowserRouter } from 'react-router-dom';


class MovieList extends Component {

    render (){
          return ( 
            <React.Fragment>
            <BrowserRouter>
            <form className="Filmlist" >
            <MovieCard  />
            </form>
            </BrowserRouter>
            </React.Fragment>
         );
        }
}

export default MovieList;

// addnewmovie={(x)=>{this.props.addnewmovie(x)}} films={this.props.films}
 