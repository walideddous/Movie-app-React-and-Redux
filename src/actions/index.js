import { ADD_NEW_MOVIE } from '../actionType';
import { ON_STAR_CLICK } from '../actionType';
import { FILTER_MOVIE } from '../actionType';
import { ON_SEARCH } from '../actionType';
import { IS_LOADING } from '../actionType'
import {  REMOVE_MOVIE } from '../actionType';
import { EDIT_MOVIE } from '../actionType';

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

export const removeMovie = (payload) =>{
    return {
        type : REMOVE_MOVIE , payload
    }
}

export const editMovie = (payload)=>{
    return {
        type: EDIT_MOVIE , payload
    }
}