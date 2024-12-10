import Image from "next/image";
import Link from "next/link";
import React from "react";
import products from "../../../data/product.json";
import ItemPage from "../Item";
import { CiShoppingCart } from "react-icons/ci";

const ExploreProduct = () => {
  return (
    <div className="container mx-auto p-6">
      <ItemPage></ItemPage>
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Product Image */}

            {/* Product Details */}
            <div className="relative w-full h-56 mb-4">
              {/* Product Image */}
              <img
                src={product.image}
                alt="Product Image"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Shopping Cart Icon */}
              <Link href="/checkout">
                <CiShoppingCart className="absolute top-2 right-2 bg-pink-800 text-white text-2xl" />
              </Link>
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.title}</p>
            <p className="text-lg font-bold text-green-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProduct;
