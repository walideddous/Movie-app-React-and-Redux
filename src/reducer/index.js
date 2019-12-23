import { ADD_NEW_MOVIE } from '../actionType';
import { ON_STAR_CLICK } from '../actionType';
import { FILTER_MOVIE } from '../actionType';
import { ON_SEARCH } from '../actionType';
import {IS_LOADING } from '../actionType';
import { films } from '../Component/data';

const initialState = {
    rating: 0   ,
    films : films , 
    recherche :"",
    isLoading:true,
    open : false
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
        default :
        return state;
    }
}

export default rootReducer