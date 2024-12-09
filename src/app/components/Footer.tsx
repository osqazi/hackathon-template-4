import React from 'react';

interface FooterProps {
  // Add any custom props if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-200 text-black pt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <h1 className="text-4xl font-bold mb-4">Hekto</h1>
            <p className="text-gray-750">
              Enter Email Address
              <input className="border border-gray-400 rounded px-2 py-1" type="email" placeholder="Enter your email" />
              <button className="bg-pink-500 hover:bg-pink-800 text-white px-4 py-2 rounded ml-2">Sign Up</button>
            </p>
            <p className="text-gray-750 mt-2">
              Contact Info:
              <br />
              201, Khatri Palace, Bhimpura, Karachi - Sindh - Pakisan
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="text-gray-600">
              <li><a href="#">Laptops & Computers</a></li>
              <li><a href="#">Cameras & Photography</a></li>
              <li><a href="#">Smart Phones & Tablets</a></li>
              <li><a href="#">Video Games & Consoles</a></li>
              <li><a href="#">Waterproof Headphones</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Customer Care</h3>
            <ul className="text-gray-600">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Orders History</a></li>
              <li><a href="#">Order Tracking</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Pages</h3>
            <ul className="text-gray-600">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Browse the Shop</a></li>
              <li><a href="#">Category</a></li>
              <li><a href="#">Pre-Built Pages</a></li>
              <li><a href="#">Visual Composer Elements</a></li>
              <li><a href="#">WooCommerce Pages</a></li>
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