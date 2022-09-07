import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { FetchUser } from "../../redux/actions/UserActions/UserActions";
import { getStorage } from "../../services/localStorage";
import { userAccess } from "../../services/userAccess";
import Footer from "../User/Footer/Footer";
import Header from "../User/Header/Header";
import Sidebar from "../UserPanel/Sidebar";
import './../../styles/userPanel/userPanel.css';

const UserPanelLayout = () => {
  let nav = useNavigate();

  let userid = getStorage('userInfo'); 
  useEffect(() => {
    userAccess().then(res => {
      if (res) {
        FetchUser(userid);
      }else{
        nav('/');
      }
    })
  }, [userid]);
  return (
    <>
      <Header />
      <section className="userPanel st1">
        <section className="Fcontainer">
          <Row>
            <Col sm="12" md="4" lg="3" className="">
              <Sidebar />
            </Col>
            <Col sm="12" md="8" lg="9">
              <section className="up-main">
                <Outlet />
              </section>
            </Col>
          </Row>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default UserPanelLayout;
