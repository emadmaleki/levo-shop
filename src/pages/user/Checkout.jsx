import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkCurrentUser, checkUser, msgbox } from "../../utils/helpers";
import { checkOutformValidation } from "../../services/formValidation";
import { get } from "../../services/evoUrl";
import { deleteStorage, getStorage, setStorage } from "../../services/localStorage";
import { AddOrder } from "../../redux/actions/OrderActions/OrderActions";
import { SetCart } from "../../redux/actions/CartActions/CartActions";

const Checkout = () => {
  let nav = useNavigate();
  let dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [resPrice, setResPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const [err, setErr] = useState("");
  let userId = getStorage("userInfo");
  let { cart } = useSelector((state) => state);
  let totalPrice = cart.length > 0 ? cart.map((cr) => cr.price).reduce((a, b) => a + b) : 0;

  let handleCheckOut = () => {
    let validate = checkOutformValidation(fullName, phone, address);
    if (validate == true) {
      if (payment) {
        dispatch(
          AddOrder(
            fullName,
            phone,
            address,
            payment,
            resPrice,
            discountValue,
            totalPrice
          )
        );
        dispatch(SetCart([]));
        deleteStorage('cart');
        nav('/');

      } else {
        msgbox("place select payment method !", "warning");
        return false;
      }
    } else {
      setErr(validate);
    }
  };
  let handleDiscount = async () => {
    if (discount.trim() != "") {
      await get(`/discounts?code=${discount}`).then((res) => {
        if (res.data.length > 0) {
          setDiscountValue(res.data[0].value);
          setResPrice(totalPrice - (totalPrice % discountValue));
        } else {
          setResPrice(0);
          setDiscountValue(0);
          msgbox("Discount code not found!", "warning");
          return false;
        }
      });
    } else {
      msgbox("Enter your discount code!", "warning");
      return false;
    }
  };

  useEffect(() => {
    if (cart.length >= 1) {
      if (!checkUser()) {
        nav("/auth/login");
      }
    } else {
      msgbox("You have no products to buy.", "error");
      nav("/");
    }
  }, [totalPrice]);

  return (
    <section className="checkout">
      <section className="checkout-header">
        <h1 className="checkout-title">CheckOut</h1>
      </section>
      <section className="checkout-inner">
        <section className="Fcontainer">
          <Row>
            <Col xs="12" sm="12" md="9" lg="8">
              {err ? <section className="err">{err}</section> : ""}
              <form onSubmit={(e) => handleCheckOut(e)}>
                <Row>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <section className="L-formcontroll">
                      <label htmlFor="fullname" className="L-label">
                        FullName
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        className="L-input"
                        placeholder="place enter your name ..."
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </section>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <section className="L-formcontroll">
                      <label htmlFor="phone" className="L-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="L-input"
                        placeholder="place enter your phone ..."
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </section>
                  </Col>
                  <section className="L-formcontroll">
                    <label htmlFor="address" className="L-label">
                      Address
                    </label>
                    <textarea
                      id="address"
                      className="L-textarea"
                      placeholder="place enter your address ..."
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </section>
                </Row>
              </form>
            </Col>
            <Col xs="12" sm="12" md="3" lg="4">
              <section className="checkout-panel">
                <section className="cp-header">
                  <p className={`cp-price ${resPrice > 0 ? "discount" : ""}`}>
                    {cart.length != 0 ? totalPrice : "0"}$
                  </p>
                  {resPrice > 0 ? (
                    <p className="cp-discount-price">{resPrice}$</p>
                  ) : (
                    ""
                  )}
                  <button className="checkout-back">back to cart</button>
                </section>
                <section className="discount">
                  <p className="discount-title">Do you have a discount code?</p>
                  <section className="discount-box">
                    <input
                      type="text"
                      placeholder="discount"
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                    <button onClick={() => handleDiscount()}>applay</button>
                  </section>
                </section>
                <section className="paymentMethods">
                  <p className="payment-title">Payment Methods</p>
                  <section className="payment-inner">
                    <section className="paymentMethod">
                      <label htmlFor="payment">Banking portal</label>
                      <input
                        type="radio"
                        name="payment"
                        id="payment"
                        className="form-control"
                        value="bankingPortal"
                        onChange={(e) => setPayment(e.target.value)}
                      />
                    </section>
                    <section className="paymentMethod">
                      <label htmlFor="homepayment">Pay at home</label>
                      <input
                        type="radio"
                        name="payment"
                        id="homepayment"
                        className="form-control"
                        value="payAtHome"
                        onChange={(e) => setPayment(e.target.value)}
                      />
                    </section>
                  </section>
                </section>
                <button
                  className="checkout-submit"
                  onClick={() => handleCheckOut()}
                >
                  let's go shopping :)
                </button>
              </section>
            </Col>
          </Row>
        </section>
      </section>
    </section>
  );
};

export default Checkout;
