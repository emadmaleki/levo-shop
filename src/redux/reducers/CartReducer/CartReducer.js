import React from 'react';

export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return [
                ...state,
                action.payload
            ]
        case 'INCREACE_FOOD':
            return action.payload
        case 'DECREACE_FOOD':
            return action.payload
        case 'REMOVE_FOOD':
            return action.payload
        case 'SET_CART':
            return action.payload
        default:
            return state
    }
}

