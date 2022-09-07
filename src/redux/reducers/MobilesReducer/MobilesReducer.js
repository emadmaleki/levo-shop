import React from 'react';

export const MobilesReducer = (state = { loading: false, mobiles: [] }, action) => {
    switch (action.type) {
        case 'REQUEST_FETCH_MOBILES':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_FETCH_MOBILES':
            return {
                loading: false,
                mobiles: action.payload
            }
        default:
            return state
    }
}
export const MobileReducer = (state = { loading: false, mobile: {} }, action) => {
    switch (action.type) {
        case 'REQUEST_FETCH_MOBILE':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_FETCH_MOBILE':
            return {
                loading: false,
                mobile: action.payload
            }
        
        default:
            return state
    }
}
export const CommentsReducer = (state = { loading: false, comments: [] }, action) => {
    switch (action.type) {
        case 'REQUEST_FETCH_COMMENTS':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_FETCH_COMMENTS':
            return {
                loading: false,
                comments: action.payload
            }
        
        default:
            return state
    }
}