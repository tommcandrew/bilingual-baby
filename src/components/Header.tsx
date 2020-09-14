import React from "react";

type HeaderProps = {
  setCurrentComponent: (component: string) => void;
};

const Header = ({ setCurrentComponent }: HeaderProps) => {
  return (
    <div className="header__wrapper">
      <h1 className="header__title" onClick={() => setCurrentComponent("Home")}>
        Bilingual Baby Name Finder
      </h1>
    </div>
  );
};

export default Header;
