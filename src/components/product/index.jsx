import React from "react";
import ProductCarosel from "./Productcarosel";
import ItemPage from "./Item";
import Product from "./Product";

const AllProduct = () => {
  return (
    <div>
      <ProductCarosel></ProductCarosel>
      <ItemPage></ItemPage>
      <Product></Product>
    </div>
  );
};

export default AllProduct;
