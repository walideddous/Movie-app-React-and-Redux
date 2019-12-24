import { ADD_NEW_MOVIE } from '../actionType';
import { ON_STAR_CLICK } from '../actionType';
import { ON_SEARCH } from '../actionType';
import {IS_LOADING } from '../actionType';
import { films } from '../Component/data';
import { REMOVE_MOVIE } from '../actionType';
import { EDIT_MOVIE } from '../actionType';

const initialState = {
    rating: 0   ,
    films : films , 
    recherche :"",
    isLoading:true,
}

const rootReducer = (state=initialState , action)=>{
    switch (action.type){
        case ADD_NEW_MOVIE:
        return Object.assign({}, state, {
            films: state.films.concat(action.payload)
          });
        case ON_STAR_CLICK: 
        return  Object.assign({}, state, {
            rating: action.payload
          });
          case ON_SEARCH: 
        return  Object.assign({}, state, {
            recherche: action.payload
          });
          case IS_LOADING:
        return Object.assign({},state,{ isLoading : false});
          case REMOVE_MOVIE:
        return {...state,films :state.films.filter((el,i)=> action.payload!==i)};
        case EDIT_MOVIE : 
        return {...state,films:state.films.map((el,i)=>i===action.payload.i ? {...el, filmtitle:action.payload.filmtitle, imagesource:action.payload.imagesource, year:action.payload.year, rating:action.payload.rating}:el)};
       default :
        return state;
    }
}

export default rootReducer