'use client'
import React from "react";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/Feautreprod";
import LatestProducts from "./components/Latestproducts";
import ShopexOffer from "./components/Shopexoffer";
import UniqueFeatures from "./components/UniqueFeautures";
import TrendingProducts from "./components/TrendingProducts";
import Discount from "./components/Discount";
import TopCateg from "./components/TopCateg";
import Offers from "./components/Offers";
import Blog from "./components/Blogs";




const Home: React.FC = () => {
  return (
    <div>
      <main>
        <Hero />
        <FeaturedProducts />
        <LatestProducts />
        <ShopexOffer />
        <UniqueFeatures />
        <TrendingProducts />
        <Discount/>
        <TopCateg/>
        <Offers/>
        <Blog/>
      </main>
    </div>
  );
};

export default Home;
