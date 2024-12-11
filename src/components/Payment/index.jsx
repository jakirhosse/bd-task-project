import React from "react";

const Payment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Success Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Order Success Message */}
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">
        Order Successfully
      </h1>
      <p className="mt-2 text-sm text-gray-500 text-center">
        Your order #123456 has been placed successfully. You will be notified
        when out for delivery.
      </p>

      {/* Download App Section */}
      <div className="mt-6 text-center">
        <h2 className="text-lg font-medium text-gray-700">Download App</h2>
        <div className="mt-4 flex items-center justify-center space-x-4">
          {/* QR Code */}
          <div>
            <img src="/Qrcode 1.png" alt="QR Code" className="w-24 h-24" />
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="flex items-center justify-center w-40 h-10 bg-black text-white rounded-md"
            >
              <img
                src="/GooglePlay.png"
                alt="Google Play"
                className="h-6 mr-2"
              />
              Google Play
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-40 h-10 bg-black text-white rounded-md"
            >
              <img
                src="/download-appstore.png"
                alt="App Store"
                className="h-6 mr-2"
              />
              App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
