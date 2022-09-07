import React from 'react';
import { get, set } from '../../../services/evoUrl';
import { getUser } from './../../../utils/helpers';

export const UserRegister = (data) => async (dispatch, getState) => {
    dispatch({ type: 'REQUEST_CREATE_USER' });
    let res = await set('users', data);
    dispatch({ type: 'SUCCESS_CREATE_USER', payload: res.data });
}
export const FetchUser = (id) => async (dispatch, getState) => {
    if (id != null) {
        let user = await getUser(id);
        if (user) {
            dispatch({ type: 'REQUEST_CREATE_USER' });
            let res = await get(`/users/${id}`);
            dispatch({ type: 'SUCCESS_CREATE_USER', payload: res.data });
            return true;
        } else {
            dispatch({ type: 'FAILD_CREATE_USER'});
            return false;
        }
    } else {
        dispatch({ type: 'FAILD_CREATE_USER' });
        return false;
    }

}
export const UserEdit = (id, data) => async (dispatch, getState) => {
    dispatch({ type: 'REQUEST_CREATE_USER' });
    let res = await set(`users/${id}`, data, 'patch');
    dispatch({ type: 'SUCCESS_CREATE_USER' });
}
