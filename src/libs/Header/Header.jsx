import React from "react";
import { BsGithub } from "react-icons/bs";
const Header = ({ title }) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <h3 className="font-link">{title}</h3>
      <a href="https://github.com/HayatEmraan/SRA" target="_blank">
        <BsGithub size={27} />
      </a>
    </div>
  );
};

export default Header;
