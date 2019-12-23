import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import MovieList from './Component/MovieList';
import { isloading } from './actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) =>{
  return {
    isloading : () =>dispatch(isloading())
  }
}

const mapStateToProps = (state) =>{
  return {
    isLoad: state.isLoading
  }
}

class ConnectedMovieContainer extends Component {
    constructor(props){
    super(props)
    this.state = {
      //  rating: 0 , films:films, recherche :""
    }
    console.log('constructor is called')
    }
    

  // addnewmovie = (x)=>{
  //     this.setState({
  //       films : this.state.films.concat(x)
  //     })
  // }

  // onStarClick =(nextValue) => {
  //   this.setState({rating: nextValue});
  // }

  // filterMovie=(listmovies)=>{
  //   return listmovies.filter( m =>m.rating>=this.state.rating && m.filmtitle.toLowerCase().includes(this.state.recherche.toLowerCase()))
  // }

  // onSearch = (y) =>{
  //   this.setState({recherche: y});
  // };

  componentDidMount() {
    setTimeout(this.props.isloading,2000)
    console.log('componentDidMount is called')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate is called')
  }

  render() { console.log('render is called')
    return (
      <div>
        <NavBar
          // onStarClick={this.onStarClick}
          // rating={this.state.rating}
          // onSearch={x => this.onSearch(x)}
        />
        {this.props.isLoad ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <MovieList
            // films={this.filterMovie(this.state.films)}
            // recherche={this.state.recherche}
          />
        )}
      </div>
    );
  }
}

const MovieContainer = connect(mapStateToProps,mapDispatchToProps)(ConnectedMovieContainer)
 

export default MovieContainer;

//  addnewmovie={(y)=>{this.addnewmovie(y)}} 