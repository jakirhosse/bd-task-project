import Image from "next/image";
import React from "react";

const NavbarBannar = () => {
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-10">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-800 leading-snug">
                Good <span className="text-orange-500">food</span>, great
                memories
              </h1>
              <p className="mt-4 text-gray-600">
                Enable diners to customize their booking by requesting a
                specific table location or view.
              </p>
              {/* Search Input */}
              <div className="mt-6">
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12 shadow-sm focus:ring-green-500 focus:outline-none"
                  />
                  <button
                    className="absolute inset-y-0 right-0 bg-green-500 text-white rounded-r-lg px-4 hover:bg-green-600"
                    type="button"
                  >
                    🔍
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/2">
              <Image
                src="/copyshop.png"
                alt="Restaurant View"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/discount.png"
                alt="Discount"
                width={60} // Adjusted width
                height={24} // Adjusted height
                className="rounded-lg shadow-lg"
              />
              <div>
                <p className="text-gray-800 font-semibold">Discount</p>
                <p className="text-gray-600 text-sm">Every week new sales</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <Image
                src="/discount.png"
                alt="Discount"
                width={60} // Adjusted width
                height={24} // Adjusted height
                className="rounded-lg shadow-lg"
              />
              <div>
                <p className="text-gray-800 font-semibold">Discount</p>
                <p className="text-gray-600 text-sm">Every week new sales</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <Image
                src="/discount.png"
                alt="Discount"
                width={60} // Adjusted width
                height={24} // Adjusted height
                className="rounded-lg shadow-lg"
              />
              <div>
                <p className="text-gray-800 font-semibold">Discount</p>
                <p className="text-gray-600 text-sm">Every week new sales</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <Image
                src="/discount.png"
                alt="Discount"
                width={60} // Adjusted width
                height={24} // Adjusted height
                className="rounded-lg shadow-lg"
              />
              <div>
                <p className="text-gray-800 font-semibold">Discount</p>
                <p className="text-gray-600 text-sm">Every week new sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavbarBannar;
