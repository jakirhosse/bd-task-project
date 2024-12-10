import React from "react";
import Image from "next/image";
import restaurants from "../../../data/thamble.json";
import { MdLocationOn } from "react-icons/md";

const ProductCarosel = () => {
  return (
    <div className="container mx-auto p-6">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="border rounded-lg shadow-lg mb-8 p-4 bg-white"
        >
          {/* Thumbnail Image */}
          <Image
            src={restaurant.thumbnail_image}
            alt={restaurant.name}
            width={1200}
            height={600}
            className="rounded-lg"
          />

          {/* Restaurant Name */}
          <h3 className="text-2xl font-bold text-green-600 mt-4">
            {restaurant.name}
          </h3>

          {/* Location */}
          <div className="flex items-center mt-2 text-gray-500">
            <MdLocationOn className="text-green-500 w-6 h-6" />
            <span className="ml-2">{restaurant.location}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-4">{restaurant.desc}</p>

          {/* Rating */}
          <div className="flex items-center mt-4">
            <span className="flex text-yellow-400">★★★★★</span>
            <span className="ml-2 text-gray-600 font-bold">4.3</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarosel;
