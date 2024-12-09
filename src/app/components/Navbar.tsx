import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Navbar = () => {
  return (
    <nav>
      {/* Top Purple Section */}
      <div className="w-full bg-purple-600 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">

          <span><i className="fa-regular fa-envelope"></i>      osqazi@gmail.com</span>
          <span><i className="fa-solid fa-phone-volume"></i>     (+92 335) 3221003</span>
          <div className="flex items-center gap-4 text-sm">
            <span>
              <Select defaultValue="English">
                <SelectTrigger className="w-auto border-transparent shadow-none border-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Urdu">Urdu</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </span>
            <span><Select defaultValue="USD">
              <SelectTrigger className="w-auto border-transparent shadow-none border-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="PKR">PKR</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </span>
            <span>Login     <i className="fa-regular fa-user"></i></span>
            <span>Wishlist     <i className="fa-regular fa-heart"></i></span>
            <span>
              <i className="fa-solid fa-cart-shopping text-2xl ml-4"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Lower White Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-black-600">Hekto</h1>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-sm text-purple-600">
            <li className="hover:text-pink-500">
              <a href="../">
                <Select defaultValue="Home">
                  <SelectTrigger className="border-none focus:ring-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="shadow-none border-none p-0">
                    <SelectGroup className="p-0 m-0">
                      <SelectItem value="Home" className="p-0 m-0">
                        Home
                      </SelectItem>
                      <SelectItem value="Option-2" className="p-0 m-0">
                        Option-2
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

              </a>
            </li>
            <li className="hover:text-pink-500">
              <a href="../pages">Pages</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="../products">Products</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="../blog">Blog</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="../shop">Shop</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="../contact">Contact</a>
            </li>
          </ul>


          {/* Search Bar */}
          <div className="flex items-center border-2 border-gray-400-500 rounded-md overflow-hidden">
            <input
              type="text"
              className="px-2 py-1 outline-none"
              placeholder="Search..."
            />
            <button className="bg-pink-500 px-4 py-1 text-white"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
