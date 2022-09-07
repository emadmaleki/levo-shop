import React from 'react';

export const MenuReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW':
            return true
        case 'HIDE':
            return false
        default:
            return state;
    }
}
export const SearchMenuReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW':
            return true
        case 'HIDE':
            return false
        default:
            return state;
    }
}