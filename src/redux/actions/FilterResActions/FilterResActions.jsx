import axios from "axios";
import React, { useSelector } from "react";
import { get } from "../../../services/evoUrl";

export const FetchFilteredResults = (category=null,memory=null,internet=null,display=null,camera=null,price={min:0,max:3000},search=null) => async (dispatch) => {
  dispatch({type:'REQUEST_FILTER_RESULTS'});
  let {data} = await axios.get('http://localhost:5000/products',{
    params:{
      'title_like':search,
      'category':category,
      'config.memory':memory,
      'config.internet':internet,
      'config.display':display,
      'config.camera':camera,
      'price_gte':price.min,
      'price_lte':price.max,
    }
  })
  dispatch({type:'SUCCESS_FILTER_RESULTS',payload:data});

}