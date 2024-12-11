import React from "react";

interface FooterProps {
  // Add any custom props if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-200 text-black pt-24">
      <div className="container mx-auto text-center md:text-left lg:text-left">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 w-[20rem] mx-auto sm:text-center md:text-left content-center">
            <h1 className="text-4xl font-bold mb-4">Hekto</h1>
            <div>
              <p className="text-gray-750">
                Enter Email Address
                <input
                  className="border border-gray-400 rounded px-1 py-1 w-auto mx-0"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-pink-500 hover:bg-pink-800 text-white px-4 py-2 mx-0 rounded ml-0 text-[.75rem]">
                  Sign Up
                </button>
              </p>
            </div>
            <p className="text-gray-750 mt-2">
              Contact Info:
              <br />
              201, Khatri Palace, Bhimpura, Karachi - Sindh - Pakistan
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="text-gray-600">
              <li>
                <a href="/PnF">Laptops & Computers</a>
              </li>
              <li>
                <a href="/PnF">Cameras & Photography</a>
              </li>
              <li>
                <a href="/PnF">Smart Phones & Tablets</a>
              </li>
              <li>
                <a href="/PnF">Video Games & Consoles</a>
              </li>
              <li>
                <a href="/PnF">Waterproof Headphones</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Customer Care</h3>
            <ul className="text-gray-600">
              <li>
                <a href="/login">My Account</a>
              </li>
              <li>
                <a href="/Pnf">Returns</a>
              </li>
              <li>
                <a href="/Pnf">Orders History</a>
              </li>
              <li>
                <a href="/Pnf">Order Tracking</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Pages</h3>
            <ul className="text-gray-600">
              <li>
                <a href="/Pnf">Blog</a>
              </li>
              <li>
                <a href="/Pnf">Browse the Shop</a>
              </li>
              <li>
                <a href="/Pnf">Category</a>
              </li>
              <li>
                <a href="/Pnf">Pre-Built Pages</a>
              </li>
              <li>
                <a href="/Pnf">Visual Composer Elements</a>
              </li>
              <li>
                <a href="/Pnf">WooCommerce Pages</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-300 h-12 mb-0 mt-24 mx-0 px-0">
          <div className="flex h-full items-center justify-evenly ">
            <div className="flex h-full items-center gap-1">
              <i className="fa-regular fa-copyright"></i>
              <p>Owais Qazi - All Rights Reserved</p>
            </div>
            <div className="flex gap-4 text-2xl">
              <div>
                <i className="fa-brands fa-facebook text-lg"></i>
              </div>
              <div>
                <i className="fa-brands fa-square-instagram"></i>
              </div>
              <div>
                <i className="fa-brands fa-square-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
