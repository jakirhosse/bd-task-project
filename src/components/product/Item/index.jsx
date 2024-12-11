import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <Link href={`/explore-product`}>
          <button className="flex items-center gap-1 text-base font-normal text-green-400">
            See All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M7.875 4.375L14 10.5L7.875 16.625"
                stroke="#232323"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="flex">
            <Image
              src={`/item${index + 1}.png`}
              alt={`Item ${index + 1}`}
              width={40}
              height={50}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
