import React from "react";
import { NavLink } from "react-router-dom";
import "animate.css";

export default function Logo() {
  return (
    <NavLink
      to="/"
      className="navbar-brand logo-text animate__animated animate__fadeInLeft"
    >
      <i className="fa-solid fa-code me-2"></i>{" "}
    </NavLink>
  );
}
