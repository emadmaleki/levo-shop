import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserRegister } from "./../../redux/actions/UserActions/UserActions";
import { existUser, msgbox } from "../../utils/helpers";
import "./../../styles/auth.css";
import { userAccess } from "../../services/userAccess";
import { RegisterformValidation } from "../../services/formValidation";

const Register = () => {
  let dispatch = useDispatch();
  let nav = useNavigate();
  let { user, users } = useSelector((state) => state);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  let userData = {
    name,
    lastName,
    email,
    password,
    admin: false,
    img: "/images/users/ava-1.jpg",
    phone: "",
    joinDate: new Date(),
    address: "",
    likes: [],
    status: false,
    age: "",
    gender: "",
  };

  let handleCheckRegister = (e) => {
    e.preventDefault();
    let validate = RegisterformValidation(name, lastName, email, password);
    if (validate == true) {
      existUser(email).then((res) => {
        if (res) {
          setErr("this email exised in users !");
          return false;
        } else {
          dispatch(UserRegister(userData));
          msgbox("Your Register Successful !", "success");
          nav("/auth/login");
        }
      });
    } else {
      setErr(validate);
    }
  };

  return (
    <section className="register">
      <Link to="/" className="backHome">
        <HomeOutlined />
      </Link>
      <section className="Fcontainer">
        <form
          action="/"
          onSubmit={(e) => handleCheckRegister(e)}
          className="register-form"
        >
          <h2>SignUp</h2>
          {err ? (
            <section className="err">
              <p>{err}</p>
            </section>
          ) : (
            ""
          )}
          <section className="row mb-15">
            <section className="col-sm-12 col-md-6 ol-lg-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                name="firstName"
                placeholder="first name ..."
              />
            </section>
            <section className="col-sm-12 col-md-6 ol-lg-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
                placeholder="last name ..."
              />
            </section>
          </section>
          <section className="row mb-15">
            <section className="col-sm-12 col-md-12 ol-lg-12">
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email ..."
              />
            </section>
          </section>
          <section className="row mb-15">
            <section className="col-sm-12 col-md-12 ol-lg-12">
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password ..."
              />
            </section>
          </section>
          <button type="submit" className="register-form-submit">
            submit
          </button>
          <Link to="/auth/login" className="go_sign">
            <LoginOutlined />
          </Link>
        </form>
      </section>
    </section>
  );
};

export default Register;
