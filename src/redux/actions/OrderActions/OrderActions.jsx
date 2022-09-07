import React, { useSelector } from "react";
import { getStorage, setStorage } from "../../../services/localStorage";
import { v4 as uuid } from "uuid";
import { get, set } from "../../../services/evoUrl";
import { msgbox } from "../../../utils/helpers";
import { FetchUser } from "../UserActions/UserActions";
export const AddOrder =
  (...item) =>
  async (dispatch, getState) => {
    dispatch({ type: "REQUEST_ADD_ORDER" });
    let user = getState().user.user;
    let order = {
        id: uuid(),
        userid: user.id,
        resultPrice: item[4],
        mainPrice: item[6],
        orders: getState().cart.map((c) => ({
            id: c.id,
            title: c.title,
          price: c.price,
          category: c.category,
          color: c.colors,
          quantity: c.quantity,
          img: c.image01,
        })),
        discountValue: item[5],
      info: {
        fullname: item[0],
        phone: item[1],
        address: item[2],
        paymentMethod: item[3],
    },
      created_at: new Date(),
    };
    let res = await set("/orders", order);
    setStorage('cart','');  
    dispatch({ type: "SUCCESS_ADD_ORDER", payload: order });
    msgbox("The purchase was made successfully.", "success");
};
export const FetchUserOrders = () => async (dispatch, getState) => {
    dispatch({ type: "REQUEST_ADD_USER_ORDERS" });
    let userid = getStorage("userInfo");
  let res = await get(`/orders?userid=${userid}`);
  dispatch({ type: "SUCCESS_ADD_USER_ORDERS", payload: res.data });
};
