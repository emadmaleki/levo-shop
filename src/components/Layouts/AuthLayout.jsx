import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Outlet, useLocation} from 'react-router-dom'
import {ChangeMenuStatus} from './../../redux/actions/SettingsAction/SettingsAction';

const AuthLayout = () => {
  let dispatch = useDispatch();
  let {pathname} = useLocation();
  useEffect(() => {
    dispatch(ChangeMenuStatus(false));
  }, [pathname]);
  return <Outlet/>;
};

export default AuthLayout;
