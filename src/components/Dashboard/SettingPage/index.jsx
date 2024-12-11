import Image from "next/image";
import React from "react";

const SettingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Account Settings Section */}
        <div className="bg-white rounded-lg shadow-md p-6 relative">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <div className="flex-shrink-0">
              <Image
                src="/assets/homePage/dianneRussell.png"
                alt="Profile Picture"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-full border-2 border-orange-500"
              />
              <div className="flex justify-start space-x-4 my-8">
                <button
                  type="button"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
                >
                  Choose Image
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="accountFirstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="accountFirstName"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Dianne"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="accountLastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="accountLastName"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Russell"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="accountEmail"
              >
                Email
              </label>
              <input
                type="email"
                id="accountEmail"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="dianne.russell@gmail.com"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="accountPhoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="accountPhoneNumber"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="(603) 555-0123"
              />
            </div>

            <button
              type="button"
              className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Billing Address Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="billingFirstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="billingFirstName"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Dianne"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="billingLastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="billingLastName"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Russell"
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="companyName"
              >
                Company Name (optional)
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Zalkissoft"
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="streetAddress"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="4140 Park"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="country"
              >
                Country / Region
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option>United States</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="state">
                State
              </label>
              <select
                id="state"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option>Washington DC</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="zipCode"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="20033"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="billingEmail"
              >
                Email
              </label>
              <input
                type="email"
                id="billingEmail"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="dianne.russell@gmail.com"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="billingPhone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="billingPhone"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="(603) 555-0123"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
          >
            Save Changes
          </button>
        </div>

        {/* Change Password Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="currentPassword"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Current Password"
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="New Password"
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="button"
            className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
