"use client"; // Ensures this is treated as a client component
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PopulerProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example API fetching or mock data
    const fetchProducts = async () => {
      const mockProducts = [
        {
          id: 1,
          imageUrl: "https://i.ibb.co/XsmYKDN/image-7.png",
          name: "Skateboard Shoe",
          price: 125,
        },
        {
          id: 2,
          imageUrl: "https://i.ibb.co/XsmYKDN/image-7.png",
          name: "Skateboard Shoe",
          price: 125,
        },
        {
          id: 3,
          imageUrl: "https://i.ibb.co/XsmYKDN/image-7.png",
          name: "Skateboard Shoe",
          price: 125,
        },
        {
          id: 4,
          imageUrl: "https://i.ibb.co/XsmYKDN/image-7.png",
          name: "Skateboard Shoe",
          price: 125,
        },
        {
          id: 5,
          imageUrl: "https://i.ibb.co/XsmYKDN/image-7.png",
          name: "Skateboard Shoe",
          price: 125,
        },
      ];
      setProducts(mockProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Popular Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center transform transition hover:scale-105"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={300}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-lg font-semibold text-gray-700 mt-4">
              {product.name}
            </h2>
            <p className="text-gray-500 text-sm">
              {product.description || "No description available"}
            </p>
            <p className="text-green-500 font-bold text-lg mt-2">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerProduct;
