import React from "react";
import { Route, Routes as Router, BrowserRouter } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import Layout from "../components/Layouts/Layout";
import UserPanelLayout from "../components/Layouts/UserPanelLayout";
import Cart from "../pages/user/Cart";
import Checkout from "../pages/user/Checkout";
import Contact from "../pages/user/Contact";
import MobileDetail from "../pages/user/MobileDetail";
import Mobiles from "../pages/user/Mobiles";
import Home from "../pages/user/Home";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import CreateTicket from "../pages/userPanel/CreateTicket";
import EditInfo from "../pages/userPanel/EditInfo";
import Info from "../pages/userPanel/Info";
import LikesMobile from "../pages/userPanel/LikesMobile";
import Orders from "../pages/userPanel/Orders";
import Tickets from "../pages/userPanel/Tickets";
import UserPanel from "../pages/userPanel/UserPanel";
import Search from "../pages/user/Search";
import Logout from "../pages/userPanel/Logout";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route path="search/:name" element={<Search />} />
        <Route path="mobiles/:id" element={<MobileDetail />} />
        <Route path="mobiles" element={<Mobiles />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route index element={<Home />}/>
        <Route path="logout" element={<Logout />} />
      </Route>
      <Route path="/panel" element={<UserPanelLayout />}>
        <Route path="info" element={<Info />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="editInfo" element={<EditInfo />} />
        <Route path="likes" element={<LikesMobile />} />
        <Route path="createTicket" element={<CreateTicket />} />
        <Route path="orders" element={<Orders />} />
        <Route index element={<UserPanel />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Router>
  );
};

export default Routes;
