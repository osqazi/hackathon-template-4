"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLinks = [
    { name: "Home", href: "../", specialSelect: true },
    { name: "Pages", href: "../pages" },
    { name: "Products", href: "../products" },
    { name: "Blog", href: "../blog" },
    { name: "Shop", href: "../Shop" },
    { name: "Contact", href: "../contact" },
  ];

  return (
    <nav>
      {/* Top Purple Section - Unchanged */}
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
              <select className="w-auto bg-transparent focus:text-black hover:cursor-pointer">
                <option value="English" className="bg-white text-black">
                  English
                </option>
                <option value="Urdu">Urdu</option>
              </select>
            </span>
            <span>
              <select className="w-auto bg-transparent focus:text-black hover:cursor-pointer">
                <option value="USD">USD</option>
                <option value="PKR">PKR</option>
              </select>
            </span>
            <span>
              <a href="../login" className="hover:cursor-pointer flex justify-center items-center gap-1">
                Login <i className="fa-regular fa-user"></i>
              </a>
            </span>
            <span className="hover:cursor-pointer flex justify-center items-center gap-1">
              Wishlist <i className="fa-regular fa-heart"></i>
            </span>
            <span className="flex justify-center">
              <i className="fa-solid fa-cart-shopping text-2xl ml-4"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Lower White Section with Sidebar */}
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
              <i className="fa-solid fa-times text-2xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl"></i>
            )}
          </button>

          {/* Sidebar Navigation for Mobile */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMenuOpen(false)}
            >
              <div
                className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-purple-600">Pages</h1>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-purple-600"
                  >
                    <i className="fa-solid fa-times text-2xl"></i>
                  </button>
                </div>
                <ul className="p-4 space-y-4">
                  {NavLinks.map((link, index) => (
                    <li key={index} className="hover:text-pink-500">
                      {link.specialSelect ? (
                        <div>
                          <Select
                            defaultValue="Home"
                            onValueChange={(e) => {
                              if (e === "Home") window.location.href = "../";
                              if (e === "Faq") window.location.href = "../faq";
                              if (e === "HKDemo")
                                window.location.href = "../hDemo";
                              if (e === "OrdComp")
                                window.location.href = "../orderComp";
                            }}
                          >
                            <SelectTrigger className="border-none focus:ring-0">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="mt-2 bg-gray-100 p-2 border rounded-md">
                              <SelectGroup>
                                <SelectItem value="Home">Home</SelectItem>
                                <SelectItem value="Faq">FAQ</SelectItem>
                                <SelectItem value="HKDemo">HK Demo</SelectItem>
                                <SelectItem value="OrdComp">Order Completed</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      ) : (
                        <a href={link.href}>{link.name}</a>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Mobile Search Bar in Sidebar */}
                <div className="p-4 border-t">
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
            </div>
          )}

          {/* Existing Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 text-sm text-purple-600 items-center">
            {NavLinks.map((link, index) => (
              <li key={index} className="hover:text-pink-500">
                {link.specialSelect ? (
                  <Select
                    defaultValue="Home"
                    onValueChange={(e) => {
                      if (e === "Home") window.location.href = "../";
                      if (e === "Faq") window.location.href = "../faq";
                    }}
                  >
                    <SelectTrigger className="border-none focus:ring-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="mt-2 bg-gray-100 p-2 border rounded-md">
                      <SelectGroup>
                        <SelectItem value="Home">Home</SelectItem>
                        <SelectItem value="Faq">FAQ</SelectItem>
                        <SelectItem value="HKDemo">HK Demo</SelectItem>
                        <SelectItem value="OrdComp">Order Completed</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                ) : (
                  <a href={link.href}>{link.name}</a>
                )}
              </li>
            ))}
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
      </div>
    </nav>
  );
};

export default Navbar;
