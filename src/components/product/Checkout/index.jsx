import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      {/* Main Container */}
      <div className="flex justify-center items-center flex-grow">
        <div className="w-full max-w-6xl bg-white shadow-md rounded-lg flex">
          {/* Left Section: Images */}
          <div className="w-1/2 flex gap-8">
            {/* Thumbnail Images */}
            <div className="flex flex-col space-y-4 ">
              <div className="w-20 h-20 border border-green-500 rounded overflow-hidden">
                <Image
                  src="/checkout-almari1.png"
                  alt="Thumbnail 1"
                  width={80}
                  height={80}
                  layout="responsive"
                />
              </div>
              <div className="w-20 h-20 border border-gray-300 rounded overflow-hidden">
                <Image
                  src="/checkout-image2.png"
                  alt="Thumbnail 2"
                  width={80}
                  height={80}
                  layout="responsive"
                />
              </div>
            </div>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/checkout-almari.png"
                alt="Smart Freezer"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="w-1/2 p-6">
            <h1 className="text-2xl font-bold">Smart Freezer</h1>
            <p className="text-sm text-green-500 font-medium">In Stock</p>
            <p className="text-xl text-gray-800 font-bold mt-2">$17.28</p>
            <p className="text-gray-600 mt-1">
              <strong>Category:</strong> Freezer
            </p>
            <p className="text-gray-600 mt-4">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4 space-x-2">
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                -
              </button>
              <span className="px-4 py-1 bg-gray-100 rounded">5</span>
              <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                +
              </button>
              {/* Checkout Button */}
              <Link href="/cart">
                {" "}
                <button className="mb-4 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
                  Checkout
                </button>
              </Link>
              <CiShoppingCart className="mx-4"></CiShoppingCart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
