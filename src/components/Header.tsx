import React from "react";
import feetBlue from "../assets/images/feet-blue.png";
import feetPink from "../assets/images/feet-pink.png";

type HeaderProps = {
  setCurrentComponent: (component: string) => void;
  gender: string;
};

const Header = ({ setCurrentComponent, gender }: HeaderProps) => {
  return (
    <div className="header__wrapper">
      <h1 className="header__title" onClick={() => setCurrentComponent("Home")}>
        Bilingual Baby Name Finder
      </h1>
      <div className="header__feet">
        <img src={gender === "male" ? feetPink : feetBlue} alt="baby feet" />
      </div>
    </div>
  );
};

export default Header;
