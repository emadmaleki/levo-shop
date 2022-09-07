import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { FetchUser } from "../../redux/actions/UserActions/UserActions";
import Title from "../../components/UserPanel/Title";
import { getStorage } from "../../services/localStorage";
import CmLoading from "../../components/User/Loading/CmLoading";

const Info = () => {
  let data = useSelector((state) => state);
  let user = data.user.user;
  let dispatch = useDispatch();
  let id = getStorage("userInfo");
  
  useEffect(() => {
    dispatch(FetchUser(id));
  }, []);

  if (data.user.loading){
    return <CmLoading />;
  };
  return (
    <>
      <Title>Information</Title>
      <section className="user-info">
      <img src={user?.img} alt="" className="user-info-img"/>
      <Row>
        <Col xs="12" sm="12" md="6" lg="6">
          <p className="ump-fname upm-text">
            FirstName : <span>{user?.name}</span>
          </p>
          <p className="ump-lname upm-text">
            LastName : <span>{user?.lastName}</span>
          </p>
          <p className="ump-age upm-text">
            Age : <span>{user?.age}</span>
          </p>
          <p className="ump-jd upm-text">
            Join Date : <span>{user?.joinDate}</span>
          </p>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
          <p className="ump-email upm-text">
            Email : <span>{user?.email}</span>
          </p>
          <p className="ump-address upm-text">
            address : <span>{user?.address}</span>
          </p>
          <p className="ump-gender upm-text">
            Gender : <span>{user?.gender}</span>
          </p>
          <p className="ump-phone upm-text">
            Phone : <span>{user?.phone}</span>
          </p>
        </Col>
      </Row>
      </section>
    </>
  );
};

export default Info;
