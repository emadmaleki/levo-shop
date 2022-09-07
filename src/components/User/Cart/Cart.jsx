import React, { useEffect } from "react";
import "./../../../styles/cart.css";
import { CloseOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { ChangeMenuStatus } from "../../../redux/actions/SettingsAction/SettingsAction";
import {
  DecreaceCartMobile,
  IncreaceCartMobile,
  RemoveMobile,
} from "../../../redux/actions/CartActions/CartActions";
import { checkCurrentUser } from "../../../utils/helpers";
import {Link} from 'react-router-dom';

const Cart = () => {
  let dispatch = useDispatch();
  let { cart } = useSelector((state) => state);

  return (
    <section className="menuCart">
      <section className="mc-header">
        <span
          className="menu-close"
          onClick={() => dispatch(ChangeMenuStatus())}
        >
          <CloseOutlined />
        </span>
        <p className="mc-title">Cart</p>
      </section>
      <section className="cart-items">
        {cart.map((mobile, index) => (
          <section className="cart-item" key={index}>
            <section className="cart-f-detiail">
              <img src={mobile.image01} alt="" />
              <span>
                <h5 className="cfd-name">{mobile.title}</h5>
                <p className="cfd-price">{mobile.price}$</p>
                <section className="cfd-info">
                  <span className="cfd-color" style={{backgroundColor:mobile.colors.name}}> </span>
                  <p className="cfd-ram">{mobile.ram.value}</p>
                </section>
                <p className="cfd-count">*{mobile.quantity}</p>
              </span>
            </section>
            <section className="cart-f-setting">
              <section className="cart-f-counter">
                <span
                  className="cfc-btn"
                  onClick={() => dispatch(IncreaceCartMobile(mobile.id))}
                >
                  <PlusOutlined />
                </span>
                <p className="cfc-count">{mobile.quantity}</p>
                {mobile.quantity <= 1 ? (
                  <span
                    className="cfc-btn"
                    onClick={() => dispatch(RemoveMobile(mobile.id))}
                  >
                    <CloseOutlined />
                  </span>
                ) : (
                  <span
                    className="cfc-btn"
                    onClick={() => dispatch(DecreaceCartMobile(mobile.id))}
                  >
                    <MinusOutlined />
                  </span>
                )}
              </section>
            </section>
          </section>
        ))}
      </section>
      <section className="mc-footer">
        <p className="mcf-total">
          Total : {cart.map((i) => i.price).reduce((a, b) => a + b, 0)}$
        </p>
        {checkCurrentUser() ? <Link to="/checkout" className="mcf-btn">
          CheckOut
        </Link> : <Link to="/auth/login" className="mcf-btn">
          Login
        </Link>}
      </section>
    </section>
  );
};

export default Cart;
