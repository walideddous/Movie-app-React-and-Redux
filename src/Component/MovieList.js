import React, { Component } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';


class MovieList extends Component {

    render (){
          return ( 
            <React.Fragment>
            <form className="Filmlist" >
            <MovieCard  />
            </form>
            </React.Fragment>
         );
        }
}

export default MovieList;

// addnewmovie={(x)=>{this.props.addnewmovie(x)}} films={this.props.films}
 