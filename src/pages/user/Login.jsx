import { HomeOutlined, UserAddOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  UserEdit,
  UserRegister,
} from "../../redux/actions/UserActions/UserActions";
import { LoginformValidation } from "../../services/formValidation";
import { setStorage } from "../../services/localStorage";
import { existUser, msgbox } from "../../utils/helpers";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  let nav = useNavigate();
  let dispatch = useDispatch();

  let handleCheckLogin = (e) => {
    e.preventDefault();
    let validate = LoginformValidation(email, password);

    if (validate == true) {
      existUser(email).then((res) => {
        if (res) {
          if (res.password == password) {
            setStorage("userInfo", res.id);
            dispatch(UserEdit(res.id, { status: true }));
            nav("/");
            msgbox("You are logined !", "success");
          } else {
            setErr("ْThe password is not correct !");
            return false;
          }
        } else {
          setErr("ْThere is no user with this email!");
          return false;
        }
      });
    } else {
      setErr(validate);
      return false;
    }
  };

  return (
    <section className="register" onSubmit={(e) => handleCheckLogin(e)}>
      <Link to="/" className="backHome">
        <HomeOutlined />
      </Link>

      <section className="Fcontainer">
        <form className="register-form">
          <h2>SignIn</h2>
          {err ? (
            <section className="err">
              <p>{err}</p>
            </section>
          ) : (
            ""
          )}
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
          <Link to="/auth/register" className="go_sign">
            <UserAddOutlined />
          </Link>
        </form>
      </section>
    </section>
  );
};

export default Login;
