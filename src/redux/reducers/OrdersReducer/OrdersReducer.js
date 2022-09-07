export const OrderReducer = (state = { loading: false, order: {} }, action) => {
    switch (action.type) {
        case 'REQUEST_ADD_ORDER':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_ADD_ORDER':
            return {
                loading: true,
                state : action.payload
            }
        default:
            return state;
    }
}
export const UserOrdersReducer = (state = { loading: false, orders: [] }, action) => {
    switch (action.type) {
        case 'REQUEST_ADD_USER_ORDERS':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_ADD_USER_ORDERS':
            return {
                loading: false,
                orders:action.payload
            }
        default:
            return state;
    }
}