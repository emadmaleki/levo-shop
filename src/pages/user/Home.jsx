import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { FetchMobiles } from "./../../redux/actions/MobileActions/MobileActions";
import Categories from "../../components/User/Categories/Categories";
import Helmet from "../../components/User/Helmet/Helmet";
import MobilesSlide from "../../components/User/ProductsSlide/ProductsSlide";
import "./../../styles/home.css";
import why from "./../../assets/images/location.png";
import Reactions from "../../components/User/Slider/RactionsSlider";
import IntroSlider from "../../components/User/Slider/IntroSlider";
import ProductSlider from "../../components/User/ProductsSlider/ProductsSlider";
import banner1 from './../../assets/images/banner1.jpg';
import banner2 from './../../assets/images/banner2.jpg';
import SocialSec from "../../components/User/SocialSec/SocialSec";
import ava1  from './../../assets/images/ava-1.jpg';
import ava2  from './../../assets/images/ava-2.jpg';
import ava3  from './../../assets/images/ava-3.jpg';
import ava4  from './../../assets/images/ava-4.jpg';
const Home = () => {

  let {mobiles} = useSelector(state => state);

  let reactions = [
    {
      id:1,
      text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nulla consectetur illum obcaecati, magni deserunt numquam possimus error harum. Quas earum odio veritatis numquam minima aperiam facere nostrum blanditiis quasi reiciendis consequatur consectetur repudiandae corporis doloribus cum magnam perferendis est sit, a ut vitae! Iusto sint officia recusandae incidunt et.',
      author:'emad maleki',
      img:ava1,
      job:'Front-End Developer'
    },
    {
      id:2,
      text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nulla consectetur illum obcaecati, magni deserunt numquam possimus error harum. Quas earum odio veritatis numquam minima aperiam facere nostrum blanditiis quasi reiciendis consequatur consectetur repudiandae corporis doloribus cum magnam perferendis est sit, a ut vitae!',
      author:'farhad maleki',
      img:ava2,
      job:'Softwere-End Developer'
    },
    {
      id:3,
      text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nulla consectetur illum obcaecati, magni deserunt numquam possimus error harum. Quas earum odio veritatis numquam minima aperiam facere nostrum blanditiis quasi reiciendis consequatur consectetur repudiandae corporis doloribus cum magnam perferendis est sit.',
      author:'mehrad maleki',
      img:ava3,
      job:'Mobile Developer'
    },
    {
      id:4,
      text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nulla consectetur illum obcaecati, magni deserunt numquam possimus error harum. Quas earum odio veritatis numquam minima aperiam facere nostrum blanditiis quasi reiciendis consequatur consectetur repudiandae corporis.',
      author:'mmd maleki',
      img:ava4,
      job:'CTO at BMW'
    }
  ]

  return (
    <Fragment>
      <Helmet title="home" />
      <section className="intro">
        <IntroSlider></IntroSlider>
        <section className="levo-banners">
          <section className="Fcontainer">
          <Row>
            <Col xs='12' sm='12' md='6'>
              <section className="l-banner">
                <img src={banner1} alt="" />
              </section>
            </Col>
            <Col xs='12' sm='12' md='6'>
              <section className="l-banner">
              <img src={banner2} alt="" />
              </section>
            </Col> 
          </Row>
          </section>
        </section>
        <ProductSlider></ProductSlider>
      </section>
      <section className="mobilesSlide st2">
        <section className="Fcontainer">
          <MobilesSlide />
        </section>
      </section>
      <Categories />
      <section className="why-levo st3">
        <section className="Fcontainer">
          <Row>
            <Col sm="12" md="6" lg="5">
              <section className="why-img">
                <img src={why} alt="" />
              </section>
            </Col> 
            <Col sm="12" md="6" lg="7">
              <section className="why-content">
                <h2 className="why-title">Why Levo</h2>
                <section className="why-box">
                  <section className="why-box-item">
                    <h4>
                      Fast Delivery (12-24)
                    </h4> 
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto, exercitationem. Et reiciendis natus molestiae
                      explicabo.
                    </p>
                  </section>
                  <section className="why-box-item">
                    <h4>
                      Fast Delivery (12-24)
                    </h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto, exercitationem. Et reiciendis natus molestiae
                      explicabo.
                    </p>
                  </section>
                  <section className="why-box-item">
                    <h4>
                      Fast Delivery (12-24)
                    </h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto, exercitationem. Et reiciendis natus molestiae
                      explicabo.
                    </p>
                  </section>
                </section>
              </section>
            </Col>
          </Row>
        </section>
      </section>
      <SocialSec />
      <section className="sayCustomers st3">
        <h2 className="why-title">What Our Customers Talk About Us</h2>
        <section className="Fcontainer">
          <Reactions items={reactions}></Reactions>
        </section>
      </section>
    </Fragment>
  );
};

export default Home;

