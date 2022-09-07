import React from 'react';
import { get } from '../../../services/evoUrl';

export const SearchProducts = (term) => async(dispatch,getState) => {
    dispatch({type:'REQUEST_SEARCH_PRODUCTS'});
    let {data} = await get(`/products?title_like=${term}`);
    dispatch({type:'SUCCESS_SEARCH_PRODUCTS',payload : data});
}