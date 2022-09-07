import React from 'react';

export const FilterResReducer = (state = { loading: false, results: [] }, action) => {
    switch (action.type) {
        case 'REQUEST_FILTER_RESULTS':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_FILTER_RESULTS':
            return {
                loading: false,
                results:action.payload
            }
        default:
            return state
    }
}

