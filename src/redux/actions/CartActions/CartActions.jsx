import React, { useSelector } from "react";
import { setStorage } from "../../../services/localStorage";
import { msgbox } from "../../../utils/helpers";

export const AddMobile = (item) => (dispatch, getState) => {
  let findItem = getState().cart.find((i) => i.id == item.id);
  if (findItem) {
    msgbox('This product is in the cart!','warning');
    return false;
  } else {
    dispatch({ type: "ADD_FOOD", payload: item });
    setStorage('cart',getState().cart);
}
};
export const SetCart = (data) => (dispatch, getState) => {
  dispatch({ type: "SET_CART", payload: data});
};
export const RemoveMobile = (id) => (dispatch, getState) => {
  let filteredMobiles = getState().cart.filter((mobile) => mobile.id !== id);
  dispatch({ type: "REMOVE_FOOD", payload: filteredMobiles });
  setStorage('cart',getState().cart);
};
export const IncreaceCartMobile = (id) => (dispatch, getState) => {
  let mobiles = [...getState().cart];
  let mobile = mobiles.find((i) => i.id === id);
  mobile.quantity++;
  mobile.price = mobile.price * mobile.quantity;
  dispatch({ type: "INCREACE_FOOD", payload: mobiles });
  setStorage('cart',getState().cart);
};
export const DecreaceCartMobile = (id) => (dispatch, getState) => {
  let mobiles = [...getState().cart];
  let mobile = mobiles.find((i) => i.id === id);
  let orgMobile = getState().mobiles.mobiles.find((mobile) => mobile.id == id);
  if (mobile.quantity <= 1) {
    mobile.quantity = 1;
  } else {
    mobile.quantity--;
  }
  mobile.price = (orgMobile.price + mobile.colors.price + mobile.ram.price) * mobile.quantity;
  dispatch({ type: "DECREACE_FOOD", payload: mobiles });
  setStorage('cart',getState().cart);
};
