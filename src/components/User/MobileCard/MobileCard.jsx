import { find } from "lodash";
import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LikeMobile } from "../../../redux/actions/MobileActions/MobileActions";
import { FetchUser } from "../../../redux/actions/UserActions/UserActions";
import { getStorage } from "../../../services/localStorage";
import { handleLikeProduct } from "../../../utils/functions/likeProduct/likeProduct";
import { checkUser } from "../../../utils/helpers";
import "./../../../styles/mobileCard.css";

const MobileCard = ({ mobile }) => {
  let { id, image01, title, price } = mobile;
  let { user } = useSelector((state) => state);
  let nav = useNavigate();
  let dispatch = useDispatch();
  let userId = getStorage("userInfo");

  return (
    <section className="mobileCard">
      <img src={image01} alt="" className="mobileCard-img" />
      <Link to={`/mobiles/${id}`} className="mobileCard-name">
        {title}
      </Link>
      <section className="mobileCard-footer">
        <p className="mobileCard-price">{price}$</p>
        <Link to={`/mobiles/${mobile.id}`} className="mobileCard-addtocart">
          more ...
        </Link>
      </section>
    </section>
  );
};

export default MobileCard;
