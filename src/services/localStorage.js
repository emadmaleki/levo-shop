import React from 'react';




export const getStorage = (name) => {
    if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name))
    }
}

export const setStorage = (name,value) => {
    localStorage.setItem(name,JSON.stringify(value));
    return true;
}

export const deleteStorage = (name) => {
    localStorage.removeItem(name);
    return true;
}