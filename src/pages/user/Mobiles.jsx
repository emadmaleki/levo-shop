import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Helmet from "./../../components/User/Helmet/Helmet";
import "./../../styles/mobiles.css";
import { Row, Col } from "reactstrap";
import ProductsList from "./../../components/User/ProductsList/ProductsList";
import FilterPanel from "../../components/User/FilterPanel/FilterPanel";
import Search from "../../components/User/Search/Search";

const Mobiles = () => {
  let dispatch = useDispatch();
  let { filterResults } = useSelector((state) => state);

  return (
    <>
      <Helmet title="Mobiles"></Helmet>
      <section className="mobiles-header">
        <h1 className="mobiles-title">
          Levo Mobiles
        </h1>
      </section>
      <section className="allmobiles">
        <section className="Fcontainer-lg">
          <section className="allMobiles-inner">
            <section className="allMobiles-filter">
              <Search />
            </section>
            <Row>
              <Col xs="12" sm="12" md="3" lg="3">
                <FilterPanel items={filterResults.results} />
              </Col>
              <Col xs="12" sm="12" md="9" lg="9">
                <ProductsList mobiles={filterResults.results} loading={filterResults.loading} />
              </Col>
            </Row>
          </section>
        </section>
      </section>
    </>
  );
};

export default Mobiles;
