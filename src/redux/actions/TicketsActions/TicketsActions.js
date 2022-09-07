import React from 'react';
import { get, remove, set } from '../../../services/evoUrl';

export const FetchUserTickets = (id) => async(dispatch,getState) => {
    dispatch({type:'REQUEST_FETCH_TICKETS'});
    let {data} = await get(`/tickets?userId=${id}`);
    dispatch({type:'SUCCESS_FETCH_TICKETS',payload:data});
}
export const DeleteUserTicket = (ticketId) => async(dispatch,getState) => {
    let {data} = await remove('/tickets',ticketId);
}
export const SetUserTicket = (info) => async(dispatch,getState) => {
    let {data} = await set(`/tickets`,info);
    dispatch({type:'CREAET_USER_TICKET',payload:data});
}