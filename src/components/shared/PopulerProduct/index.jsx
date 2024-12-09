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
    <div>
      <h1 className="text-2xl mx-4">product</h1>
      <div className="grid grid-cols-3 mx-20 gap-4 rounded-lg ">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={300}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerProduct;
