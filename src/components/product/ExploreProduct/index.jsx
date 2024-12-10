import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import products from "../../../data/product.json";

const ExploreProduct = () => {
  return (
    <div>
      <Link href="/Product">
        <button className="w-full text-base font-bold bg-green-700 text-gray py-[12px] rounded-[8px]">
          Visit
        </button>
      </Link>
    </div>
  );
};

export default ExploreProduct;
