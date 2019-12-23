import { ADD_NEW_MOVIE } from '../actionType';
import { ON_STAR_CLICK } from '../actionType';
import { FILTER_MOVIE } from '../actionType';
import { ON_SEARCH } from '../actionType';
import { IS_LOADING } from '../actionType'

export const addnewmovie = (payload) =>{
    return {
        type : ADD_NEW_MOVIE, payload
    }
};

export const onStarClick = (payload) =>{
    return {
        type : ON_STAR_CLICK, payload
    }
};

export const filterMovie = (payload) =>{
    return {
        type : FILTER_MOVIE, payload
    }
};

export const onSearch = (payload) =>{
    return {
        type : ON_SEARCH, payload
    }
};

export const isloading = () =>{
    return {
        type : IS_LOADING
    }
}