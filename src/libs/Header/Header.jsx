import React from "react";
import { BsGithub } from "react-icons/bs";
const Header = ({ title }) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <h3>{title}</h3>
      <div className="d-flex align-items-center gap-2">
        <BsGithub size={25}/>
      </div>
    </div>
  );
};

export default Header;
