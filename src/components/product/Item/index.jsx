import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end">
        <Link href={`/explore-product`}>
          <button className="flex items-center gap-1 text-base font-normal text-dark-100">
            See All{" "}
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
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="flex-1 grid grid-cols-8 gap-6">
        <div className="flex justify-center">
          <Image
            src="/item.png" // Fixed path
            alt="Image 1"
            width={50}
            height={50}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/item2.png" // Fixed path
            alt="Image 2"
            width={50}
            height={50}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/item3.png" // Fixed path
            alt="Image 2"
            width={50}
            height={50}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/item4.png" // Fixed path
            alt="Image 2"
            width={50}
            height={50}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/item5.png" // Fixed path
            alt="Image 2"
            width={50}
            height={50}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/item6.png" // Fixed path
            alt="Image 2"
            width={50}
            height={50}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/item7.png" // Fixed path
            alt="Image 2"
            width={50}
            height={50}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
