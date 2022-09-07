import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";
import {
  AddComment,
  FetchLike,
  FetchMobile,
  FetchMobiles,
  LikeMobile,
} from "./../../redux/actions/MobileActions/MobileActions";
import "./../../styles/mobileDetail.css";
import MobileSlider from "../../components/User/Slider/MobilesSlider";
import { AddMobile } from "../../redux/actions/CartActions/CartActions";
import { ChangeMenuStatus } from "../../redux/actions/SettingsAction/SettingsAction";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { getStorage } from "../../services/localStorage";
import { msgbox } from "../../utils/helpers";
import Comments from "../../components/User/Comments/Commetns";
import PageLoading from './../../components/User/Loading/PageLoading';
import Helmet from "../../components/User/Helmet/Helmet";
const MobileDetail = () => {
  const [mainImgSrc, setMainImgSrc] = useState("");
  const [activeColor, setActiveColor] = useState(0);
  const [activeRam, setActiveRam] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [activeLike, setActiveLike] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);


  let userid = getStorage("userInfo");
  let { id } = useParams();
  let dispatch = useDispatch();
  let data = useSelector((state) => state);
  let mobile = data?.mobile?.mobile;
  let mobiles = data?.mobiles?.mobiles;
  let user = data?.user;

  let handleCheck = async () => {
    let dt = await dispatch(FetchLike(id));
    return dt;
  };
  useEffect(() => {
    dispatch(FetchMobile(id));
    dispatch(FetchMobiles());
    setActiveColor("");
    if (window.scrollY > 100) {
      setScrollTop(true)
    }
  }, [id]);
  useEffect(() => {
    handleCheck().then((res) => {
      if (res) {
        setActiveLike(true);
      } else {
        setActiveLike(false);
      }
    });
  }, [dispatch]);
  useEffect(() => {
    setMainImgSrc(mobile.image01);
    setFinalPrice(mobile.price);
    dispatch(FetchLike(mobile.id)).then(res => {
      if (res) {
        setActiveLike(res);
      } else {
        setActiveLike(res);
      }
    })
    if (scrollTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [mobile]);

  let handleLike = async (mid) => {
    let res = await dispatch(LikeMobile(mid));
    if (res) {
      setActiveLike(res);
    } else {
      setActiveLike(res);
    }
  };

  let changeProductColor = (color) => {
    setActiveColor(color);
    if (activeColor) {
      setFinalPrice((prev) => prev - activeColor.price + color.price);
    } else {
      setFinalPrice((prev) => prev + color.price);
    }
  };
  let changeProductRam = (ram) => {
    setActiveRam(ram);  
    if (activeRam) {
      setFinalPrice((prev) => prev - activeRam.price + ram.price);
    } else {
      setFinalPrice((prev) => prev + ram.price);
    }
  };
  let recommendMobile = mobiles?.filter((fd) => fd.category == mobile.category);

  if (data.mobile.loading) {
    return <PageLoading />
  };
  return (
    <section className="mobileDetail"> 
    <Helmet title={mobile.title}></Helmet>
      <section className="Fcontainer"> 
        <section className="fd-intro">
          <Row>
            <Col sm="12" md="6" lg="6">
              <section className="fd-images">
                <img src={mainImgSrc} alt="" className="fd-main-img" />
                <ul className="fd-list-img">
                  <li
                    className="fd-listItem-img"
                    onClick={() => setMainImgSrc(mobile.image01)}
                  >
                    <img src={mobile.image01} alt="" />
                  </li>
                  <li
                    className="fd-listItem-img"
                    onClick={() => setMainImgSrc(mobile.image02)}
                  >
                    <img src={mobile.image02} alt="" />
                  </li>
                  {mobile.image03 ? (
                    <li
                      className="fd-listItem-img"
                      onClick={() => setMainImgSrc(mobile.image03)}
                    >
                      <img src={mobile.image03} alt="" />
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </section>
            </Col>
            <Col sm="12" md="6" lg="6">
              <section className="fd-content">
                <section
                  className="fd-like"
                  onClick={() => handleLike(mobile.id)}
                >
                  {activeLike ? (
                    <HeartFilled className="fd-like-active" />
                  ) : (
                    <HeartOutlined />
                  )}
                </section>
                <h1 className="fd-title">{mobile.title}</h1>
                <p className="fd-category">
                  Category : <span>{mobile.category}</span>
                </p>
                <section className="fd-colors">
                  {mobile.colors?.map((c, index) => (
                    <section
                      key={index}
                      className={`fd-color ${
                        activeColor.name == c.name ? "active" : ""
                      }`}
                      style={{ backgroundColor: `${c.name}` }}
                      onClick={() => changeProductColor(c)}
                    ></section>
                  ))}
                </section>
                <section className="fd-select-ram">
                  {mobile.config?.ram.map((r, index) => (
                    <section
                      key={index}
                      onClick={() => changeProductRam(r)}
                      className={`fd-option-ram ${
                        activeRam.value == r.value ? "active" : ""
                      }`}
                    >
                      {r.value}
                    </section>
                  ))}
                </section>
                <section className="fd-cart">
                  <p className="fd-price">
                    Price : <span>{finalPrice}$</span>
                  </p>
                  <button
                    className="fd-addtocart"
                    onClick={() => {
                      if (activeColor && activeRam) {
                        dispatch(
                          AddMobile({
                            ...mobile,
                            colors: activeColor,
                            ram: activeRam,
                            price: finalPrice,
                          })
                        );
                        dispatch(ChangeMenuStatus());
                      }else{
                        msgbox('Please select product config!','warning');
                        return false;
                      }
                    }}
                  >
                    add to cart
                  </button>
                </section>
              </section>
            </Col>
          </Row>
        </section>
        <section className="fd-info st2">
          <p className="fd-desc">{mobile.desc}</p>
        </section>
        <section className="fd-config st3">
          <h3 className="fdr-title">Mobile Config</h3>
          <section className="fd-config-table-container">
            <table className="fd-config-table">
              <thead>
                <tr>
                  <th>Ram</th>
                  <th>memory</th>
                  <th>material</th>
                  <th>camera</th>
                  <th>battery</th>
                  <th>display</th>
                  <th>internet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mobile.config?.ram.map((r) => r.value).join(" , ")}</td>
                  <td>{mobile.config?.memory}</td>
                  <td>{mobile.config?.material}</td>
                  <td>{mobile.config?.camera}</td>
                  <td>{mobile.config?.battery}</td>
                  <td>{mobile.config?.display}</td>
                  <td>{mobile.config?.internet}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
        <section className="fd-relate st3">
          <h3 className="fdr-title">Related Products</h3>
          <MobileSlider items={recommendMobile} />
        </section>
        <Comments mobileId={mobile.id}/>
      </section>
    </section>
  );
};

export default MobileDetail;
