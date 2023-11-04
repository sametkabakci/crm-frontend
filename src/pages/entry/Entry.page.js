import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import "./entry.style.css";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    switch(name) {
        case "email":
            setEmail(value);
            break;
        case "password":
            setPassword(value);
            break;
        default:
            break;
    }
    console.log(name, value);
  };

  const handleOnsubmit = e => {
    e.preventDefault();

    if (!email || !password) {
        return alert("Lütfen tüm alanları doldurunuz.");
    }
    console.log(email, password);
  };

  const handleOnResetsubmit = e => {
    e.preventDefault();

    if (!email) {
        return alert("Lütfen tüm alanları doldurunuz.");
    }
    console.log(email);
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  }

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === 'login' &&
        <LoginForm
          handleOnchange={handleOnchange}
          handleOnsubmit={handleOnsubmit}
          formSwitcher={formSwitcher}
          email={email}
          password={password}
        />}
        {frmLoad === 'reset' &&
        <ResetPassword
          handleOnchange={handleOnchange}
          handleOnResetsubmit={handleOnResetsubmit}
          formSwitcher={formSwitcher}
          email={email}
        />}
      </Jumbotron>
    </div>
  );
};
