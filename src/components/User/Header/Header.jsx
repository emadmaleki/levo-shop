import React, { useEffect, useRef, useState } from "react";
import "./../../../styles/header.css";
import logo from "./../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  CloseOutlined,
  GroupOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {IoIosArrowDown} from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeMenuStatus,
  ChangeSearchStatus,
} from "../../../redux/actions/SettingsAction/SettingsAction";
import { useNavigate } from "react-router-dom";
import { FetchUser } from "../../../redux/actions/UserActions/UserActions";
import { getStorage } from "./../../../services/localStorage";
const Header = () => {
  let dispatch = useDispatch();
  let nav = useNavigate();
  let { user } = useSelector((state) => state);
  const [inputTerm, setInputTerm] = useState("");
  let menuRef = useRef(null);
  let searchRef = useRef(null);
  let overleyRef = useRef(null);
  let authBoxRef = useRef(null);
  let panelRef = useRef(null);
  let toggleMenu = () => menuRef.current.classList.toggle("show");
  let toggleOverley = () => overleyRef.current.classList.toggle("show");
  let ShowSearchBox = () => searchRef.current.classList.toggle("show");
  let authBox = () => authBoxRef.current.classList.toggle("show");
  let showPanelList = () => panelRef.current.classList.toggle("show");
  let { cart } = useSelector((state) => state);
  let userId = getStorage("userInfo");

  useEffect(() => {
      if (userId) {
        dispatch(FetchUser(userId))
      }
  }, [userId]);

  let handleForm = (e) => {
    e.preventDefault();
    ShowSearchBox();
    nav(`/search/${inputTerm}`);
  };
  return (
    <>
      <section className="searchBox" ref={searchRef}>
        <span className="close-searchBox" onClick={() => ShowSearchBox()}>
          <CloseOutlined />
        </span>
        <form onSubmit={(e) => handleForm(e)}>
          <p className="searchBox-desc">Enter the product you want.</p>
          <input
            type="text"
            className="searchInput"
            placeholder="Search Products ..."
            onInput={(e) => setInputTerm(e.target.value)}
          />
        </form>
      </section>
      <header className="header">
        <section
          className="overley"
          ref={overleyRef}
          onClick={() => {
            toggleMenu();
            toggleOverley();
          }}
        ></section>
        <section className="h-contaner">
          <section className="header-inner">
            <section className="header-menu">
              <Link to='/' className="logo">
                <img src={logo} alt="" />
                <p className="logo-text">LEVO</p>
              </Link>
              <section className="menu" ref={menuRef}>
                <Link to="/" className="menu-item">
                  Home
                </Link>
                <Link
                  to="/mobiles"
                  className="menu-item"
                  onClick={() => {
                    toggleMenu();
                    toggleOverley();
                  }}
                >
                  Mobiles
                </Link>
                <Link
                  to="/contact"
                  className="menu-item"
                  onClick={() => {
                    toggleMenu();
                    toggleOverley();
                  }}
                >
                  Contact
                </Link>
                <Link
                  to="/cart"
                  className="menu-item"
                  onClick={() => {
                    toggleMenu();
                    toggleOverley();
                  }}
                >
                  Cart
                </Link>
              </section>
            </section>
            <section className="userArea">
              <span
                className="ua-btn"
                onClick={() => dispatch(ChangeMenuStatus())}
              >
                <span className="cart-q">{cart.length}</span>
                <ShoppingCartOutlined className="ua-icon" />
              </span>

              <span className="ua-btn" onClick={() => ShowSearchBox()}>
                <SearchOutlined className="ua-icon" />
              </span>
              {userId ? user.user ? (
                <section className="ua-panel">
                  <section className="uap-info" onClick={() => showPanelList()}>
                    <img src={user.user.img} alt="" />
                    <p className="uap-name">{user.user.name} <IoIosArrowDown/></p>
                  </section>
                  <section className="uap-list" ref={panelRef}>
                    <Link to='/panel'>User Panel</Link>
                    <Link to='/panel/likes'>Like Products</Link>
                    <Link to='/panel/orders'>Orders</Link>
                    <Link to='/panel/tickets'>Tickets</Link>
                    <Link to='/panel/editInfo'>Edit Info</Link>
                    <Link to='/logout'>LogOut</Link>
                  </section>
                </section>
              ) : (
                <section className="auth-box">
                  <UserOutlined
                    className="ua-icon ua-auth"
                    onClick={() => authBox()}
                  />
                  <section className="auth-list" ref={authBoxRef}>
                    <Link to="/auth/register">SignUp</Link>
                    <Link to="/auth/login">LogIn</Link>
                  </section>
                </section>
              ) : <section className="auth-box">
              <UserOutlined
                className="ua-icon ua-auth"
                onClick={() => authBox()}
              />
              <section className="auth-list" ref={authBoxRef}>
                <Link to="/auth/register">SignUp</Link>
                <Link to="/auth/login">LogIn</Link>
              </section>
            </section>}

              {/* <Link to='/auth/register' className="ua-btn">
                <UserAddOutlined className="ua-icon" />
              </Link>
              <Link to='/panel' className="ua-btn">
                <GroupOutlined className="ua-icon" />
              </Link> */}
              <a
                className="ua-btn ua-btn-bar"
                onClick={() => {
                  toggleMenu();
                  toggleOverley();
                }}
              >
                <MenuOutlined className="ua-bar" />
              </a>
            </section>
          </section>
        </section>
      </header>
    </>
  );
};

export default Header;
