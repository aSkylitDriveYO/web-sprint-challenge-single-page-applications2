import React from "react";
import { Link } from "react-router-dom";
import pizzaImg from "./Assets/Pizza.jpg";
// import Form from "./Form";

export default function Banner() {
  return (
    <div className="homePageContainer">
      <img src={pizzaImg} alt="magarita pizza" />
      <div id="linkText">
        <Link to="/form">Pizza?</Link>
      </div>
    </div>
  );
}