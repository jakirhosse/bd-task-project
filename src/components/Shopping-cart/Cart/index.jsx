import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShoppingCart = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-5">My Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left Section: Product Table */}
          <div className="flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* Product Row 1 */}
                <tr className="border-b">
                  <td className="py-3 flex items-center">
                    <Image
                      src="/cartimg2.png"
                      alt="Freezer"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <span className="ml-3">Freezer</span>
                  </td>
                  <td>$14.00</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <button className="px-2 py-1 border rounded bg-gray-200">
                        -
                      </button>
                      <span>5</span>
                      <button className="px-2 py-1 border rounded bg-gray-200">
                        +
                      </button>
                    </div>
                  </td>
                  <td>$70.00</td>
                  <td>
                    <button className="text-red-500 hover:text-red-700">
                      ×
                    </button>
                  </td>
                </tr>
                {/* Product Row 2 */}
                <tr className="border-b">
                  <td className="py-3 flex items-center">
                    <Image
                      src="/cartimg.png"
                      alt="Tv"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <span className="ml-3">Tv</span>
                  </td>
                  <td>$14.00</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <button className="px-2 py-1 border rounded bg-gray-200">
                        -
                      </button>
                      <span>5</span>
                      <button className="px-2 py-1 border rounded bg-gray-200">
                        +
                      </button>
                    </div>
                  </td>
                  <td>$14.00</td>
                  <td>
                    <button className="text-red-500 hover:text-red-700">
                      ×
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between mt-3">
              <button className="text-blue-500 hover:underline">
                Return to shop
              </button>
              <button className="text-blue-500 hover:underline">
                Return to shop
              </button>
            </div>
          </div>

          {/* Right Section: Cart Summary */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-5 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Cart Total</h2>
              <p className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>$84.00</span>
              </p>
              <p className="flex justify-between mb-4">
                <span>Shipping:</span>
                <span>Free</span>
              </p>
              <p className="flex justify-between font-bold text-xl">
                <span>Total:</span>
                <span>$84.00</span>
              </p>
              <Link href="/order">
                <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
