import React from "react";
import { GoSearch } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";

const Exploreserach = () => {
  return (
    <div className="flex-1 justify-between mt-4">
      <div className="mx-8">
        <h5 className="text-4xl font-medium text-dark-50">
          Explore{" "}
          <span className="text-primary text-orange-600"> Restaurants</span>
        </h5>
        <p className="text-sm font-normal text-dark-200 pt-[4px]">
          Check your city
          <span className="font-medium">
            {" "}
            Near by <br /> Restaurant
          </span>
        </p>
      </div>

      <div className="flex justify-end items-center  rounded-full -mt-12 ">
        <button className="flex items-center gap-2 text-base font-normal text-gray-100 bg-secondary py-2 px-4 rounded-l-full">
          <FaMapMarkerAlt className="text-gray-300" /> Location
        </button>

        <input
          type="text"
          placeholder="Search restaurants"
          className="w-48 text-base font-normal px-4 py-2 outline-none"
        />

        <div className="p-3 rounded-full bg-secondary">
          <GoSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Exploreserach;
