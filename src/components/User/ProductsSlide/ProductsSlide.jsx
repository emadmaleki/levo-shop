import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import MobileCard from "../MobileCard/MobileCard";
import "./../../../styles/productsSlide.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchMobiles } from "./../../../redux/actions/MobileActions/MobileActions";
import ProductsList from "../ProductsList/ProductsList";
const ProductsSlide = () => {
  let dispatch = useDispatch();
  let [catName,setCatName] = useState(null);
  let { mobiles, loading } = useSelector((state) => state.mobiles);
  

  useEffect(() => {
    dispatch(FetchMobiles(catName ? catName.toLowerCase() : catName));
  }, [catName]);

  return (
    <>
      <section className="fs-filter">
        <span className={`fs-cat ${catName == null ? 'active' : ''}`} onClick={() => setCatName(null)}>All</span>
        <span className={`fs-cat ${catName == 'Apple' ? 'active' : ''}`} onClick={() => setCatName('Apple')}>Apple</span>
        <span className={`fs-cat ${catName == 'Samsung' ? 'active' : ''}`} onClick={() => setCatName('Samsung')}>Samsung</span>
        <span className={`fs-cat ${catName == 'Xiaomi' ? 'active' : ''}`} onClick={() => setCatName('Xiaomi')}>Xiaomi</span>
        <span className={`fs-cat ${catName == 'Huawei' ? 'active' : ''}`} onClick={() => setCatName('Huawei')}>Huawei</span>
      </section>
      <section className="fs-items">
          <ProductsList mobiles={mobiles}/>
      </section>
    </>
  );
};

export default ProductsSlide;
