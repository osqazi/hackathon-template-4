import React from "react";

const Hero = () => {
  return (
    <section className="bg-purple-100 py-8">
      <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
          {/* Lamp Image */}
          <div className="w-40 lg:w-64">
            <img
              src="/images/lamp.png"
              alt="Lamp"
              className="object-contain mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left max-w-lg">
            <p className="text-pink-500 font-semibold mb-4">
              Best Furniture For Your Castle...
            </p>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">
              New Furniture Collection <br />
              Trends in 2020
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="bg-pink-500 text-white px-6 py-3 font-semibold rounded-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 relative flex justify-end mt-8 lg:mt-0">
          <img
            src="/images/cover.png"
            alt="Furniture"
            className="w-full max-w-xs lg:max-w-md rounded-md"
          />
          <div className="absolute top-4 lg:top-8 right-4 lg:right-8 bg-blue-500 text-white text-sm lg:text-lg font-bold rounded-full h-16 lg:h-20 p-2 lg:p-4 w-16 lg:w-20 flex items-center justify-center text-center">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
