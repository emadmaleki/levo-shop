import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../User/Cart/Cart";
import Footer from "../User/Footer/Footer";
import Header from "../User/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import PageLoading from "../User/Loading/PageLoading";
import { ChangeMenuStatus } from "../../redux/actions/SettingsAction/SettingsAction";

const Layout = () => {
  let dispatch = useDispatch();
  let { pathname } = useLocation();
  useEffect(() => {
    dispatch(ChangeMenuStatus(false));
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
