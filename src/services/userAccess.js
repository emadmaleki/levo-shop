import React from 'react';
import { getUser } from '../utils/helpers';
import { getStorage } from './localStorage';

export let userAdminAccess = () => {
    let currentUser = getStorage('userInfo');
    let user = getUser(currentUser);
    user.then(res => {
        if (res.admin) {
            return true;
        } else {
        }
    })
}
export const userAccess = async () => {
    let currentUser = getStorage('userInfo');
    if (currentUser) {
        let user = await getUser(currentUser);
        if (user && user.status) {
            return true;
        }else{
            return false;
        }
    } else {
        return false;
    }
}