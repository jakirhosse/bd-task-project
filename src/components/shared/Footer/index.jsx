import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {/* Logo and Newsletter */}
        <div className="col-span-2">
          <Image
            src="/logoimg.png"
            alt="Discount Me Logo"
            width={150}
            height={50}
          />
          <p className="text-sm mt-4">
            Ecommerce is a free UI kit from Preprallur that you can use for your
            personal or commercial project.
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Type your email address"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-2 rounded-r-md">
              Submit
            </button>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-semibold text-lg">Account</h3>
          <ul className="space-y-2 text-sm mt-4">
            <li>My Account</li>
            <Link href="/register">
              {" "}
              <li>Login / Register</li>
            </Link>
            <Link href="/cart">
              {" "}
              <li>Cart</li>
            </Link>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <Link href="/privacy-police">
              {" "}
              <li>Privacy Policy</li>
            </Link>
            <Link href="/terms-of-use">
              {" "}
              <li>Terms Of Use</li>
            </Link>
            <li>FAQ</li>
            <li>Contact</li>
            <Link href="/About">
              {" "}
              <li>About</li>
            </Link>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Download App</h3>
          <div className="flex flex-col space-y-4">
            <Image
              src="/google1.png"
              alt="Google Play"
              width={120}
              height={40}
            />
            {/* <Image
              src="/download2.png"
              alt="App Store"
              width={120}
              height={40}
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
