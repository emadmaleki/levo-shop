import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/Routes';
import Cart from './components/User/Cart/Cart';
import { FetchMobiles } from './redux/actions/MobileActions/MobileActions';
import { getStorage } from './services/localStorage';
import { FetchUser } from './redux/actions/UserActions/UserActions';
import PageLoading from './components/User/Loading/PageLoading';

function App() {

  let dispatch = useDispatch();
  let {menuStatus,mobiles} = useSelector(state => state);
  let userId = getStorage('userInfo');

  useEffect(() => {
    dispatch(FetchMobiles());
    if (userId) {
      dispatch(FetchUser(userId))
    }
  }, [userId]);

  return (
    <>
      <ToastContainer />
      {menuStatus ? <Cart /> : ""}
      <Routes />
    </>
  );
}

export default App;
 