import React from 'react';
import { get } from '../services/evoUrl';
import { toast } from 'react-toastify';
import { getStorage } from '../services/localStorage';


export let existUser = async (email) => {
    let { data } = await get(`/users?email=${email}`);
    return data[0];
}
export let getUser = async (id) => {
    let { data } = await get(`/users/${id}`);
    return data;
}



export let msgbox = (msg, type) => {
    toast(msg, {
        type: type,
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export let checkUser = () => {
    if (getStorage('userInfo')) {
        if (getUser(getStorage('userInfo'))) {
           return true;
        }else{
            msgbox('Please log in to the Levo!','warning');
            return false;
        }
    }else{
        msgbox('Please log in to the Levo!','warning');
        return false;
    }
}
export let checkCurrentUser = () => {
    if (getStorage('userInfo')) {
        if (getUser(getStorage('userInfo'))) {
           return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
