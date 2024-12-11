import Link from "next/link";
import React from "react";

const Order = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Billing Information */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your first name"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Your last name"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full border rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <select className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select Country / Region</option>
                  <option>Select Country / Region</option>
                </select>
                <select className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select State</option>
                  <option>Select State</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex items-center mb-4">
              <img
                src="/cartimg2.png"
                alt="Freezer"
                className="w-16 h-16 rounded-md mr-4"
              />
              <div>
                <p>Freezer XL</p>
                <p className="text-gray-600">$14.00</p>
              </div>
            </div>
            <div className="flex justify-between border-t pt-4">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-semibold mt-2">
              <p>Total:</p>
              <p>$84.00</p>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Payment Method</h3>
              <div className="space-y-2">
                <div>
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    className="mr-2"
                  />
                  <label htmlFor="cod">Cash on Delivery</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    className="mr-2"
                  />
                  <label htmlFor="paypal">Paypal</label>
                </div>
              </div>
            </div>
            <Link href="/payment">
              <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
