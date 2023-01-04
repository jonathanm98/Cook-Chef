import cookchefLogo from "../assets/images/cookchef.png";

import React from "react";

const Header = () => {
  return (
    <header className="header d-flex flex-row align-items-center">
      <i class="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={cookchefLogo} alt="Logo cookchef" />
      </div>
      <ul>
        <button className="mr-5 btn-secondary">
          <i class="fa-solid fa-basket-shopping mr-5"></i>
          <span>panier</span>
        </button>
        <button className="btn-primary">connexion</button>
      </ul>
    </header>
  );
};

export default Header;
