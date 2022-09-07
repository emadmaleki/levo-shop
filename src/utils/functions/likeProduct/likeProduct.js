import axios from "axios";
import { set } from "../../../services/evoUrl";
import { getStorage } from "../../../services/localStorage";
import { checkUser, getUser, msgbox } from "../../../utils/helpers";
import { filter, find, remove } from "lodash";

export let handleLikeProduct = async (mobile) => {
    let id = getStorage('userInfo');
    if (checkUser()) {
        let data = await getUser(id);
        let userLikes = [...data.likes];
        if (find(userLikes, i => i.id == mobile.id)) {
            userLikes = filter(userLikes, e => e.id !== mobile.id);
            let res = await set(`/users/${id}`, { likes: userLikes }, 'patch');
            msgbox('The product has been removed in favorites.');
            return false;
        }else{
            let res = await set(`/users/${id}`, { likes: [...data.likes, mobile] }, 'patch');
            msgbox('The product has been added to favorites.');
            return true;
        }
    }


    // // if (find(userLikes,like => like.id == mobile.id)) {
    // //     remove(userLikes,(e) => e.id == mobile.id);
    // //     let res = await set(`/users/${id}`,{likes:userLikes},'patch');
    // //     msgbox('The product has been removed to favorites.');
    // // }else{
    // //     let res = await set(`/users/${id}`,{likes:[...data.likes,mobile]},'patch');
    // //     msgbox('The product has been added to favorites.');
    // // }
}
