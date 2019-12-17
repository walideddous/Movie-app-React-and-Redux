import React, { Component } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';


class MovieList extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    render (){
          return ( 
            <React.Fragment>
            <form className="Filmlist" >
            <MovieCard addnewmovie={(x)=>{this.props.addnewmovie(x)}} films={this.props.films} />
            </form>
            </React.Fragment>
         );
        }
}

export default MovieList;
 