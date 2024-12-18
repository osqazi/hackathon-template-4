import React from "react";
import Link from "next/link";

const TrendingProducts: React.FC = () => {
  const products = [
    { id: 1, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/images/c1.png", href: "../products" },
    { id: 2, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/images/c2.png", href: "../products" },
    { id: 3, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/images/c3.png", href: "../products" },
    { id: 4, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/images/c4.png", href: "../products" },
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <Link href={`${product.href}/${product.name}`} key={product.id}><div className="border rounded-lg p-2 shadow-lg text-center h-96">
              <img src={product.image} alt={product.name} className="w-full h-72 object-cover mb-4" />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-500">
                <span className="text-pink-500">{product.price}</span> <span className="line-through">{product.oldPrice}</span>
              </p>
            </div></Link>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <p className="font-bold text-xl">23% off in all products</p>
            <button className="text-pink-500 underline mt-2">Shop Now</button>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <p className="font-bold text-xl">23% off in all products</p>
            <button className="text-pink-500 underline mt-2">View Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
