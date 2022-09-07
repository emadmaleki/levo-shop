const TicketsReducer = (state = { loading: false, tickets: [] }, action) => {
    switch (action.type) {
        case 'REQUEST_FETCH_TICKETS':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_FETCH_TICKETS':
            return {
                loading: false,
                tickets:action.payload
            }
        default:
            return state;
    }
}
export const TicketReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREAET_USER_TICKET':
            return action.payload
        default:
            return state;
    }
}
export default TicketsReducer;