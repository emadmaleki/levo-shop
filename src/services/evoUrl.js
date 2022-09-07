import React from 'react';
import axios from "axios";
export const getApi = axios.create({
    baseURL:'http://localhost:5000'
})
export const get = (route) => {
    return getApi.get(route);
}                       

export const set = (route,data,type=null) => {
    if (type=='patch') {
        return getApi.patch(route,data);
    }else{
        return getApi.post(route,data);
    }
}   


export const remove = (route,id) => {
    return getApi.delete(route + `/${id}`);
}   