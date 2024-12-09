import React from "react";
import NavbarBannar from "./Bannar";
import PopulerProduct from "./PopulerProduct";
import Restruants from "./Restruants";

const AllHomepage = () => {
  return (
    <div>
      <NavbarBannar></NavbarBannar>
      <Restruants></Restruants>
      <PopulerProduct></PopulerProduct>
    </div>
  );
};

export default AllHomepage;
