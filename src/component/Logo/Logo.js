import React from "react";
import logoIcon from "../../resource/logo-icon.png";
import logoText from "../../resource/logo-text.png";
import { useNavigate } from "react-router-dom";

import "./Logo.scss";
import { useSelector } from "react-redux";

export default function Logo() {
  const navigate = useNavigate();

  const { isLogged } = useSelector((state) => state.authentication);

  return (
    <div
      className="logo"
      style={{ cursor: "pointer" }}
      onClick={() => (isLogged ? navigate("/browse") : navigate("/"))}
      alt="fleam"
    >
      <img src={logoIcon} className="logoIcon" />

      <img src={logoText} className="logoText" />
    </div>
  );
}
