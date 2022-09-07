import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./../../../styles/socialsec.css";

import {
  InstagramOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";
const SocialSec = () => {
  return (
    <section className="Fcontainer">
      <section className="socialSec st3">
        <Row>
          <Col sm="12" md="6" lg="6">
            <p className="socialsec-title">Follow Our Socials :)</p>
          </Col>
          <Col sm="12" md="6" lg="6">
            <section className="socials">
              <Link to="/" className="social">
                <InstagramOutlined />
              </Link>
              <Link to="/" className="social">
                <TwitterOutlined />
              </Link>
              <Link to="/" className="social">
                <GithubOutlined />
              </Link>
            </section>
          </Col>
        </Row>
      </section>
    </section>
  );
};

export default SocialSec;
