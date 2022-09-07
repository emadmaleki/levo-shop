import React from 'react';

export const ChangeMenuStatus = (status = null) => (dispatch, getState) => {
    if (status != null) {
        if (status) {

            dispatch({ type: 'SHOW' });
        } else {
            dispatch({ type: 'HIDE' });

        }
    } else {
        if (getState().menuStatus) {
            dispatch({ type: 'HIDE' });
        } else {
            dispatch({ type: 'SHOW' });
        }
    }
}
export const ChangeSearchStatus = () => (dispatch, getState) => {
    if (getState().menuStatus) {
        dispatch({ type: 'HIDE' });
    } else {
        dispatch({ type: 'SHOW' });
    }
}