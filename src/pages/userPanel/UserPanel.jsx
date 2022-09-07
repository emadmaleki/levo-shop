import { SettingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import MobileSlider from "../../components/User/Slider/MobilesSlider";
import Title from "../../components/UserPanel/Title";
import {useDispatch, useSelector} from 'react-redux';
import { FetchUserTickets } from "../../redux/actions/TicketsActions/TicketsActions";
import { getStorage } from "../../services/localStorage";
import { FetchUserOrders } from "../../redux/actions/OrderActions/OrderActions";
import { FetchUser } from "../../redux/actions/UserActions/UserActions";
import { fetchComments } from "../../redux/actions/MobileActions/MobileActions";
const UserPanel = () => {
    let data = useSelector(state => state);
    let dispatch = useDispatch();
    let userId = getStorage('userInfo');

    useEffect(() => {
      dispatch(FetchUserTickets(userId));
      dispatch(FetchUserOrders());
      dispatch(FetchUser(userId));
      dispatch(fetchComments(null,userId));
    }, []);

  return (
    <>
        <Title>User Panel</Title>
        <Row>
          <Col xs="12" sm="6" md="3" lg="3">
            <section className="ump-info-box">
                <SettingOutlined className="umpi-icon" />
              <section className="umpi-body">
                <p>Tickets</p>
              <h5 className="umpi-count">{data.tickets.tickets.length}</h5>
              </section>
            </section>
          </Col>
          <Col xs="12" sm="6" md="3" lg="3">
          <section className="ump-info-box">
                <SettingOutlined className="umpi-icon" />
              <section className="umpi-body">
                <p>Comments</p>
              <h5 className="umpi-count">{data.mobileComments.comments.length}</h5>
              </section>
            </section>
          </Col>
          <Col xs="12" sm="6" md="3" lg="3">
          <section className="ump-info-box">
                <SettingOutlined className="umpi-icon" />
              <section className="umpi-body">
                <p>Likes</p>
              <h5 className="umpi-count">{data.user.user?.likes?.length}</h5>
              </section>
            </section>
          </Col>
          <Col xs="12" sm="6" md="3" lg="3">
          <section className="ump-info-box">
                <SettingOutlined className="umpi-icon" />
              <section className="umpi-body">
                <p>Orders</p>
              <h5 className="umpi-count">{data.userOrders.orders.length}</h5>
              </section>
            </section>
          </Col>
        </Row>
    </>
  );
};

export default UserPanel;
