import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import "./../../styles/userPanel/orders.css";
import Title from "./../../components/UserPanel/Title";
import { useDispatch, useSelector } from "react-redux";
import { FetchUserOrders } from "../../redux/actions/OrderActions/OrderActions";
import { FetchUser } from "./../../redux/actions/UserActions/UserActions";
import { getStorage } from "../../services/localStorage";
import CmLoading from "../../components/User/Loading/CmLoading";
const Orders = () => {
  let dispatch = useDispatch();
  let { userOrders } = useSelector((state) => state);
  let userid = getStorage("userInfo");
  useEffect(() => {
    dispatch(FetchUserOrders());
  }, []);

  if (userOrders.loading) {
    return <CmLoading />;
  }
  return (
    <>
      <Title>Your Orders</Title>
      <section className="orders">
        {userOrders?.orders?.map((order) => (
          <section className="order-item" key={order.id}>
            <section className="order-products">
              <Row>
                {order?.orders?.map((po) => (
                  <Col xs="12" sm="12" md="6" lg="6">
                    <section className="op-item">
                      <img src={po.img} alt="" />
                      <section className="opi-body">
                        <h3 className="opi-name">{po.title}</h3>
                        <p className="opi-mainPrice">1400$</p>
                        <section className="opi-info">
                          <p
                            className="opi-color"
                            style={{ backgroundColor: `${po.color.name}` }}
                          ></p>
                          <p className="opi-count">*{po.quantity}</p>
                        </section>
                      </section>
                    </section>
                  </Col>
                ))}
              </Row>
            </section>
            <section className="op-body">
              <h5 className="op-title">Order Detail</h5>
              <Row>
                <Col xs="12" sm="12" md="6" lg="6">
                  <section className="opb-user-info">
                    <p className="ui-text">
                      FullName : <span>{order.info.fullname}</span>
                    </p>
                    <p className="ui-text">
                      Phone : <span>{order.info.phone}</span>
                    </p>
                    <p className="ui-text">
                      Address :{" "}
                      <span>
                      {order.info.address}
                      </span>
                    </p>
                  </section>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6">
                  <section className="upb-order-info">
                    <p className="ui-text">
                      Price : <span>{order.mainPrice}$</span>
                    </p>
                    <p className="ui-text">
                      Payment Method : <span>{order.info.paymentMethod}</span>
                    </p>
                    <p className="ui-text">
                      Order Date : <span>{order.created_at}</span>
                    </p>
                    {order.discountValue > 0 ? <section className="oi-discount">
                      <span className="oid-value">{order.discountValue}%</span>
                      <p className="oid-mainPrice">{order.mainPrice}$</p>
                      <p className="oid-resultPrice">{order.resultPrice}$</p>
                    </section> : ''}
                  </section>
                </Col>
              </Row>
            </section>
          </section>
        ))}
      </section>
    </>
  );
};

export default Orders;
