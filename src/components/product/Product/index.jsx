import Image from "next/image";
import Link from "next/link";
import React from "react";
import products from "../../../data/product.json";

const Product = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold "> Products</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Product Image */}

            {/* Product Details */}
            <img src={product.image} alt="img" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.title}</p>
            <p className="text-lg font-bold text-green-600">${product.price}</p>

            {/* Visit Button */}
            <Link href="/Product"></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
