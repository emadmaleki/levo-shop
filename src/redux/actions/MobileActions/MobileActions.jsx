import React from "react";
import axios from "axios";
import { get,set } from "../../../services/evoUrl";
import { checkCurrentUser, checkUser, msgbox } from "./../../../utils/helpers";
import { filter, find } from "lodash";
import { getStorage } from "../../../services/localStorage";
import { v4 as uuid } from "uuid";

export const FetchMobiles =
  (category = null) =>
  async (dispatch) => {
    dispatch({ type: "REQUEST_FETCH_MOBILES" });
    await get(`/products${category ? "?category=" + category : ""}`).then(
      (res) => {
        dispatch({ type: "SUCCESS_FETCH_MOBILES", payload: res.data });
      }
    );
  };

export const FetchMobile = (id) => async (dispatch) => {
  dispatch({ type: "REQUEST_FETCH_MOBILE" });
  await get(`/products/${id}`).then((res) => {
    dispatch({ type: "SUCCESS_FETCH_MOBILE", payload: res.data });
  });
  
};

export const LikeMobile = (id) => async (dispath, getState) => {
  if (checkUser()) {
    let userid = getStorage('userInfo');
    let {data} = await get(`/users/${userid}`);
    let user = {...data}
    let userLikes = user?.likes;

    let existLike = find(userLikes, (l) => l.id == id);

    if (existLike) {
      userLikes = userLikes.filter((l) => l.id != existLike.id);
      let res = await set(`/users/${user.id}`, { likes: userLikes }, "patch");
      dispath({ type: "DISLIKE_MOBILE", payload: user });
      msgbox("The product has been removed in favorites.");
      return false;
    } else {
      let mobile = getState().mobile.mobile;
      userLikes.push(mobile);
      let res = await set(`/users/${user.id}`, { likes: userLikes }, "patch");
      dispath({ type: "LIKE_MOBILE", payload: user });
      msgbox("The product has been added to favorites.");
      return true;
    }

  }
};

export const FetchLike = (id) => async (dispath, getState) => {
  if (checkCurrentUser()) {
    let userid = getStorage('userInfo');
    let {data} = await get(`/users/${userid}`);
    let checkLikeMobile = find(data.likes,l => l.id == id);
    if (checkLikeMobile) {
      return true;
    }else{
      return false;
    }
  }
};

export const AddComment = (mobileId,data) => async (dispatch,getState) => {
  if (checkUser()) {
    let info = {
      id: uuid(),
      userId : getState().user.user.id,
      userName : getState().user.user.name,
      mobileId : mobileId,
      desc : data,
      created_at : new Date()
    }
    let res = await set('/comments',info);
    msgbox('Your comment has been sent successfully.','success');
  }
}

export const fetchComments = (mobileId=null,userId = null) => async(dispatch,getState) => {
  dispatch({type:'REQUEST_FETCH_COMMENTS'});
  let res = await get(`/comments${mobileId ? '?mobileId=' + mobileId : ''}${userId ? (mobileId ? '&userId='+userId :'?userId'+userId) : ''}`);
  dispatch({type:'SUCCESS_FETCH_COMMENTS',payload:res.data});
}