"use client"
import { useState } from "react";
import Link from "next/link";

const ShopSidebar = ({ filters, setFilters }: any) => {

  const handleFilterChange = (type: any, value: any) => {
    setFilters((prev: any) => {
      const updatedFilters = { ...prev };
      if (updatedFilters[type].includes(value)) {
        updatedFilters[type] = updatedFilters[type].filter((item: any) => item !== value);
      } else {
        updatedFilters[type] = [...updatedFilters[type], value];
      }
      return updatedFilters;
    });
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Filter Button positioned outside image container, centered in mobile view */}
      {!isOpen && (
        <button
          className="lg:hidden absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-black bg-white p-2 rounded z-50"
          onClick={toggleSidebar}
        >
          <i className={`fa-solid fa-filter text-3xl text-blue-600 `} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={` mt-36 fixed top-0 left-0 h-full bg-white text-black p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:relative lg:block lg:p-6 overflow-y-auto lg:overflow-visible max-h-full lg:max-h-none scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ${
          isOpen ? "scrollbar-auto" : ""
        }`}
      >
        {/* Close Button for mobile */}
        {isOpen && (
          <button
            className="absolute top-4 right-4 text-2xl text-black lg:hidden"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        )}
        <div className="space-y-6">
          {/* Product Brand */}
          <div>
            <h3 className="underline text-purple-900 mb-4 font-bold">
              Product Brand
            </h3>
            <div className="space-y-2">
              {[
                "Coaster Furniture",
                "Fusion Dot High Fashion",
                "Unique Furniture Restor",
                "Dream Furnitture Flipping",
                "Young Repurposed",
                "Green DIY furniture",
              ].map((brand) => (
                <div key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`brand-${brand}`}
                    className="mr-2"
                    onChange={() => handleFilterChange("brands", brand)}
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="text-sm text-purple-400"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Discount Offer */}
          <div>
            <h3 className="underline text-purple-900 mb-4 font-bold">
              Discount Offer
            </h3>
            <div className="space-y-2">
              {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
                (offer) => (
                  <div key={offer} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`discount-${offer}`}
                      className="mr-2"
                      onChange={() => handleFilterChange("discountOffers", offer)}
                    />
                    <label
                      htmlFor={`discount-${offer}`}
                      className="text-sm  text-purple-400 "
                    >
                      {offer}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Rating Items */}
          <div>
            <h3 className="underline text-purple-900 mb-4 font-bold">
              Rating Item
            </h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`rating-${rating}`}
                    className="mr-2"
                    onChange={() => handleFilterChange("ratings", rating)}
                  />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="text-sm  text-purple-400"
                  >
                    {`${rating} ${rating === 1 ? "star" : "stars"}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="underline text-purple-900 mb-4 font-bold">
              Categories
            </h3>
            <div className="space-y-2">
              {[
                "Prestashop",
                "Magento",
                "Bigcommerce ",
                "osCommerce",
                "3dcart",
                "Bags",
                "Accessories",
                "Jewellery",
                "Watches",
              ].map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    className="mr-2"
                    onChange={() => handleFilterChange("catagories", category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="text-sm  text-purple-400"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filters */}
          <div>
            <h3 className="underline text-purple-900 mb-4 font-bold">
              Price Filters
            </h3>
            <div className="space-y-2">
              {[
                "$0.00 - $150.00",
                "$150.00 - $350.00",
                "$350.00 - $504.00",
                "$450.00+",
              ].map((priceRange) => (
                <div key={priceRange} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`price-${priceRange}`}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`price-${priceRange}`}
                    className="text-sm  text-purple-400"
                  >
                    {priceRange}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="lg:flex justify-between border border-gray-300 rounded-sm mt-2 flex items-center w-full max-w-xs">
              <input
                type="text"
                className="px-2 py-1 outline-none placeholder:text-gray-200 text-sm w-full"
                placeholder="$10.00 - 20000$"
              />
              <button className="px-3 py-1 text-gray-200 text-sm">
                <i className="fa-solid fa-magnifying-glass text-sm"></i>
              </button>
            </div>
          </div>

          {/* Filter by Colors */}
          <div>
            <div>
              <div>
                <h3 className="underline text-purple-900 mb-4 font-bold">
                  Filter by Colors
                </h3>
                <div className="grid grid-cols-3 gap-2 text-wrap">
                  {[
                    {
                      icon: (
                        <i className="fa-solid fa-circle text-blue-600"></i>
                      ),
                      name: "Blue",
                    },
                    {
                      icon: (
                        <i className="fa-solid fa-circle text-orange-500"></i>
                      ),
                      name: "Orange",
                    },
                    {
                      icon: (
                        <i className="fa-solid fa-circle text-amber-800"></i>
                      ),
                      name: "Brown",
                    },
                    {
                      icon: (
                        <i className="fa-solid fa-circle text-green-600"></i>
                      ),
                      name: "Green",
                    },
                    {
                      icon: (
                        <i className="fa-solid fa-circle text-purple-700"></i>
                      ),
                      name: "Purple",
                    },
                    {
                      icon: <i className="fa-solid fa-circle text-sky-400"></i>,
                      name: "Sky",
                    },
                  ].map((color, i) => (
                    <Link href={"#"} key={i}>
                      <div
                        className="flex items-center justify-center lg:justify-start space-x-1 hover:cursor-pointer"
                      >
                        <p className="text-2xl">{color.icon}</p>
                        <p className="text-xs">{color.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
