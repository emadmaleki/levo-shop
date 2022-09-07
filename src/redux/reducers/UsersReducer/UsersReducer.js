import React from 'react';

export const            UserReducer = (state = { loading: false, user: {} }, action) => {
    switch (action.type) {
        case 'REQUEST_CREATE_USER':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_CREATE_USER':
            return {
                user: action.payload,
                loading: false
            }
        case 'FAILD_CREATE_USER':
            return {
                user: null,
                loading: false
            }
        case 'LIKE_MOBILE':
            return {
                loading: false,
                user: action.payload
            }
        case 'DISLIKE_MOBILE':
            return {
                loading: false,
                user: action.payload
            }
        default:
            return state;
    }
}
export const UsersReducer = (state = { loading: false, users: [] }, action) => {
    switch (action.type) {
        case 'REQUEST_CREATE_USERS':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_CREATE_USERS':
            return {
                users: action.payload,
                loading: false
            }
        default:
            return state;
    }
}