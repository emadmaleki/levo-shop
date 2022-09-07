import React from "react";
import { Row, Col } from "reactstrap";
const Traits = () => {
  return (
    <section className="trait-items">
      <Row>
        <Col>
          <section className="trait-item">
            <img src={img1} alt="" />
            <h4>Quick Delivery</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
              commodi?
            </p>
          </section>
        </Col>
        <Col>
          <section className="trait-item">
            <img src={img2} alt="" />
            <h4>Support</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
              commodi?
            </p>
          </section>
        </Col>
        <Col>
          <section className="trait-item">
            <img src={img3} alt="" />
            <h4>Great Box</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
              commodi?
            </p>
          </section>
        </Col>
      </Row>
    </section>
  );
};

export default Traits;
