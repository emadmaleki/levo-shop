import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteStorage,
  getStorage,
  setStorage,
} from "../../services/localStorage";
import { msgbox } from "../../utils/helpers";

const Logout = () => {
  let nav = useNavigate();
  let id = getStorage("userInfo");
  useEffect(() => {
    if (id) {
      deleteStorage("userInfo");
      nav("/");
      msgbox("You have successfully logged out of your account!", "success");
    } else {
      nav("/");
    }
  }, []);
};

export default Logout;
