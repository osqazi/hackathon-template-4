"use client"
import React from "react";
import { useState } from "react";



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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      {/* Top Purple Section */}
      <div className="w-full bg-purple-600 text-white py-3">
  <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm gap-2">
    {/* Email and Phone Section */}
    <div className="w-full lg:w-auto flex justify-between lg:justify-start gap-4">
      <span>
        <i className="fa-regular fa-envelope"></i> osqazi@gmail.com
      </span>
      <span>
        <i className="fa-solid fa-phone-volume"></i> (+92 335) 3221003
      </span>
    </div>

    {/* Action Items Section */}
    <div className="w-full lg:w-auto flex justify-between lg:justify-end items-center gap-4 mt-2 lg:mt-0">
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
      <span>
        <Select defaultValue="USD">
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
      <span>
        <a href="../login" className="hover:cursor-pointer">Login <i className="fa-regular fa-user"></i></a>
      </span>
      <span>
        Wishlist <i className="fa-regular fa-heart"></i>
      </span>
      <span>
        <i className="fa-solid fa-cart-shopping text-2xl ml-4"></i>
      </span>
    </div>
  </div>
</div>


      {/* Lower White Section */}
      <div className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-black-600">Hekto</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-purple-600 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="fa-solid fa-times text-2xl"></i> // Close icon
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i> // Menu icon
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-14 left-0 w-full bg-white lg:bg-transparent lg:static lg:flex gap-8 text-sm text-purple-600 lg:items-center lg:w-auto lg:p-0 transition-all ease-in-out duration-300 shadow-lg lg:shadow-none z-40`}
        >
          <li className="hover:text-pink-500">
            <a href="../">
              <Select defaultValue="Home" onValueChange={(e)=>{

                if (e === 'Home'){
                  window.location.href = '../'

                }; 
                
                if (e === 'Faq'){
                  window.location.href = '../faq'

                }
                
              }}>
                <SelectTrigger className="border-none focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="shadow-none border-none p-0">
                  <SelectGroup className="p-0 m-0">
                    <SelectItem value="Home" className="p-0 m-0">
                      Home
                    </SelectItem>
                    <SelectItem value="Faq" className="p-0 m-0">
                    FAQ
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
            <a href="../Shop">Shop</a>
          </li>
          <li className="hover:text-pink-500">
            <a href="../contact">Contact</a>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center border-2 border-gray-400 rounded-md overflow-hidden">
          <input
            type="text"
            className="px-2 py-1 outline-none"
            placeholder="Search..."
          />
          <button className="bg-pink-500 px-4 py-1 text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="lg:hidden px-4 mt-2 mb-4">
        <div className="flex items-center border-2 border-gray-400 rounded-md overflow-hidden">
          <input
            type="text"
            className="px-2 py-1 w-full outline-none"
            placeholder="Search..."
          />
          <button className="bg-pink-500 px-4 py-1 text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
