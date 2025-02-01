"use client"

import React, { useState } from "react";
import Hero2 from "../components/Hero2";
import ShopGrid from "../components/ShopGrid";
import ShopList from "../components/ShopList";

export default function Shop() {
  const [gridView, setGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Hero2
        name="Shop"
        add1="Home . Pages"
        add2=". Shop"
      />
      <div>
        <div className="mt-28 lg:mx-44 md:mx-20 mx-1">
          <div className="md:flex lg:flex text-center gap-2">
            <div>
              <h1 className="font-bold text-xlg text-nowrap text-purple-900">
                Ecommerce Accessories & Fashion item
              </h1>
              <h4 className="text-purple-900 lg:text-start md:text-start">
                About 9,620 results (0.62 seconds)
              </h4>
            </div>
            
            <div className="lg:flex md:flex gap-2">
              <div className="text-lg mb-2">
                <label htmlFor="pages" className="p-2">Per Page:</label>
                <input
                  id="pages"
                  type="number"
                  name="pages"
                  defaultValue={1}
                  required
                  className="border border-gray-300 lg:w-10 w-20 md:w-10 text-center p-1"
                />
              </div>
              <div>
                <label htmlFor="sortby" className="p-2">Sort By:</label>
                <select
                  id="sortby"
                  name="sortBy"
                  required
                  className="border border-gray-300 text-lg p-2"
                >
                  <option value="bm">Best Match</option>
                  <option value="pl">Price Low</option>
                  <option value="ph">Price High</option>
                  <option value="fd">Free Delivery</option>
                </select>
              </div>
              <div className="flex gap-2 p-2 justify-center">
                <p>View: </p>
                <button 
                  onClick={() => setGridView(true)}
                  className={`hover:cursor-pointer ${gridView ? 'text-purple-900' : 'text-gray-500'}`}
                >
                  <i className="fa-solid fa-grip text-2xl"></i>
                </button>
                <button 
                  onClick={() => setGridView(false)}
                  className={`hover:cursor-pointer ${!gridView ? 'text-purple-900' : 'text-gray-500'}`}
                >
                  <i className="fa-solid fa-list text-2xl"></i>
                </button>
              </div>
              <div>
                <input
                  type="text"
                  name="blank"
                  required
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 lg:w-48  p-1 px-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Conditionally render either ShopGrid or ShopList */}
        {gridView ? <ShopGrid searchQuery={searchQuery} /> : <ShopList searchQuery={searchQuery} />}

        {/* Brand Image */}
        <div className="flex justify-center p-8 sm:p-16">
          <img
            src="/images/brand.png"
            alt="Brand"
            className="w-full max-w-[70rem] h-auto"
          />
        </div>
      </div>
    </div>
  );
}