import React from "react";

const Header = () => {
  return (
    <div className="w-full h-12 bg-blue-300 flex justify-between p-2 leading-8">
      <div className="navbar-name">
        <h4>Randika Saptianda</h4>
      </div>
      <div>
        <ul className="flex ">
          <li className="pr-10">
            <a href="#">Home</a>
          </li>
          <li className="pr-10">
            <a href="#">About</a>
          </li>
          <li className="pr-10">
            <a href="#">Skills</a>
          </li>
          <li className="pr-10">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
