import React from "react";
import { SiApple, SiHuawei, SiSamsung, SiXiaomi } from "react-icons/si";
import { Col, Row } from "reactstrap";
const Categories = () => {
  let categories = [
    {
      name: "Apple",
      img: <SiApple/>,
    },
    {
      name: "SamSung",
      img: <SiSamsung/>,
    },
    {
      name: "Xiaomi",
      img: <SiXiaomi/>,
    },
    {
      name: "Huawei",
      img: <SiHuawei/>,
    },
  ];
  return (
    <section className="categories st3">
      <section className="Fcontainer">
      <Row>
        {categories.map((cat,index) => (
          <Col xs="6" sm="6" md="3" lg="3" key={index}>
            <section className="cat_card">
              <span className="cat_img">{cat.img}</span>
            </section>
          </Col>
        ))}
      </Row>
      </section>
    </section>
  );
};

export default Categories;
