import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Title from "../../components/UserPanel/Title";
import { useDispatch, useSelector } from "react-redux";
import { RedBtnOutline } from "../../styles/Style";
import {
  FetchUser,
  UserEdit,
} from "../../redux/actions/UserActions/UserActions";
import { msgbox } from "../../utils/helpers";
import axios from "axios";
import { getStorage } from "../../services/localStorage";
import { useNavigate } from "react-router-dom";

const EditInfo = () => {
  let data = useSelector((state) => state);
  let user = data?.user?.user;
  let dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImg] = useState("");
  let nav = useNavigate();

  let handleEditInfo = async () => {
    let info = {
      name,
      lastName,
      email,
      age,
      address,
      gender,
      phone,
      img: "",
    };
    if (image) {
      alert('server error!');
    }
    for (let dt in info) {
      if (!info[dt]) {
        delete info[dt];
      }
    }
    dispatch(UserEdit(getStorage("userInfo"), info));
    msgbox("your information edit successfully !", "success");
    nav('/panel/info');
  };

  if (data.user.loading) return "loading ...";
  return (
    <>
      <Title>Edit Information</Title>
      <section className="editInfo">
        <Row>
          <Col xs="12" sm="12" md="6" lg="6">
            <section className="L-formControl">
              <label htmlFor="fname" className="L-label">
                FirstName :
              </label>
              <input
                type="text"
                id="fname"
                name="name"
                className="L-input"
                value={name}
                placeholder="example : emad"
                onChange={(e) => setName(e.target.value)}
              />
            </section>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <section className="L-formControl">
              <label htmlFor="lname" className="L-label">
                LastName :
              </label>
              <input
                type="text"
                id="lname"
                className="L-input"
                value={lastName}
                placeholder="example : maleki"
                onChange={(e) => setLastName(e.target.value)}
              />
            </section>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6">
            <section className="L-formControl">
              <label htmlFor="email" className="L-label">
                Email :
              </label>
              <input
                type="text"
                id="email"
                className="L-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example : emadmaleki84@gmail.com"
              />
            </section>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <section className="L-formControl">
              <label htmlFor="age" className="L-label">
                age :
              </label>
              <input
                type="number"
                id="age"
                className="L-input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="example : 16"
              />
            </section>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6">
            <section className="L-formControl">
              <label htmlFor="gender" className="L-label">
                Gender :
              </label>
              <span>
                <label htmlFor="gender-male" className="L-label">
                  Male :
                </label>
                <input
                  type="radio"
                  id="gender-male"
                  defaultChecked={gender == "male" ? true : false}
                  name="gender"
                  className="L-inp-radio"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="gender-female" className="L-label">
                  Female :
                </label>
                <input
                  type="radio"
                  id="gender-female"
                  defaultChecked={gender == "female" ? true : false}
                  name="gender"
                  className="L-inp-radio"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
              </span>
            </section>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <section className="L-formControl">
              <label htmlFor="image" className="L-label">
                Image :
              </label>
              <input
                type="file"
                id="image"
                name="file"
                onChange={(e) => setImg(e.target.files[0])}
                className=""
                placeholder="example : maleki"
              />
            </section>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6">
            <section className="L-formControl mt2">
              <label htmlFor="phone" className="L-label">
                Phone :
              </label>
              <input
                type="number"
                id="phone"
                className="L-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="example : 09149988816"
              />
            </section>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <section className="L-formControl">
              <label htmlFor="age" className="L-label">
                address :
              </label>
              <textarea
                type="number"
                id="age"
                className="L-textarea"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="example : 16"
              ></textarea>
            </section>
          </Col>
        </Row>
        <section className="ei-footer">
          <RedBtnOutline onClick={handleEditInfo}>edit</RedBtnOutline>
        </section>
      </section>
    </>
  );
};

export default EditInfo;
