import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./../../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DecreaceCartMobile,
  IncreaceCartMobile,
  RemoveMobile,
} from "../../redux/actions/CartActions/CartActions";
import { checkCurrentUser, checkUser } from "../../utils/helpers";
import empty from "./../../assets/images/comment.png";

const Cart = () => {
  let dispatch = useDispatch();
  let { cart } = useSelector((state) => state);

  return (
    <section className="cart-list">
      <section className="cart-page-header">
        <h1 className="cph-title">Cart</h1>
      </section>
      <section className="Fcontainer">
        <section className="cp-inner">
          {cart.length > 0 ? (
            <table className="cp-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>image</th>
                  <th>name</th>
                  <th>price</th>
                  <th>color</th>
                  <th>ram</th>
                  <th>quantity</th>
                  <th>setting</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((c) => (
                <tr className="cp-item" key={c.id}>
                  <td>{c.id}</td>
                  <td>
                    <img src={c.image01} alt="" className="cpi-img" />
                  </td>
                  <td>{c.title}</td>
                  <td>{c.price}</td>
                  <td>{c.colors.name}</td>
                  <td>{c.ram.value}</td>
                  <td>
                    <section className="cpi-conuter">
                      <span
                        className="cpic-btn"
                        onClick={() => dispatch(IncreaceCartMobile(c.id))}
                      >
                        <PlusOutlined />
                      </span>
                      <span className="cpic-count">{c.quantity}</span>
                      <span
                        className="cpic-btn"
                        onClick={() => dispatch(DecreaceCartMobile(c.id))}
                      >
                        <MinusOutlined />
                      </span>
                    </section>
                  </td>
                  <td>
                    <span
                      className="cpi-remove"
                      onClick={() => dispatch(RemoveMobile(c.id))}
                    >
                      <FiTrash />
                    </span>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <section className="cart-empty-err">
              <p className="cee-title">the shopping cart is empty!</p>
              <img src={empty} alt="" className="cee-img" />
            </section>
          )}
          <section className="cp-footer">
            <p className="cp-totalPrice">
              {cart.length != 0
                ? cart.map((cr) => cr.price).reduce((a, b) => a + b)
                : "0"}
              $
            </p>
            {checkCurrentUser() ? (
              <Link to="/checkout" className="cart-checkout">
                CheckOut
              </Link>
            ) : (
              <Link to="/auth/login" className="cart-checkout">
                Login
              </Link>
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Cart;
