import React from "react";
import logo from "../img/saya4.jpg";

const Card = () => {
  return (
    <div className="Header">
      <header className="Header-section ">
        <img src={logo} className="Header-logo w-48 h-48 rounded-full  mt-24 mx-auto" />
        <p className="info text-center mt-8">
          <b>
            {" "}
            Randika Saptianda
            <br />
            Electrical Engeneering || Web Programmer
          </b>
        </p>
        <a className="Header-link" href="https://www.instagram.com/_saptianda/" target="_blank" rel="noopener noreferrer"></a>
      </header>
    </div>
  );
};

export default Card;
