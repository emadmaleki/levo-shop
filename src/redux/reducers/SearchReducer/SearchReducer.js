export const SearchReducer = (state = { loading: false, results: [] }, action) => {
    switch (action.type) {
        case 'REQUEST_SEARCH_PRODUCTS':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_SEARCH_PRODUCTS':
            return {
                loading: false,
                results:action.payload
            }
        default:
            return state
    }
}