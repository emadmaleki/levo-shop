import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { FetchUser } from "../../../redux/actions/UserActions/UserActions";
import { getStorage } from "../../../services/localStorage";
import CmLoading from "../Loading/CmLoading";
import MobileCard from "../MobileCard/MobileCard";

const ProductsList = ({ mobiles,loading }) => { 
  if (loading) {
    return <CmLoading loading={loading}/>
  }
    return (
      <section className="productsList">
        <Row>
        {mobiles.length > 0 ? mobiles.map((mobile) => (
          <Col sm="6" md="4" lg="3" key={mobile.id}>
            <MobileCard mobile={mobile} />
          </Col>
        )) : (
          <section className="notFind-box">
            <h3 className="nf-box">No product found!</h3>
          </section>
        )}  
      </Row>
      </section>
    );
};

export default ProductsList;
