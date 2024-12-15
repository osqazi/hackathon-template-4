import React from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  img: string;
  href: string;
}

const products: Product[] = [
  { id: 1, name: "LW Chair A", img: "/images/chair1.png", href: "../products/"},
  { id: 2, name: "LW Chair B", img: "/images/chair2.png", href: "../products/" },
  { id: 3, name: "LW Chair C", img: "/images/chair3.png", href: "../products/" },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <h3 className="text-center text-2xl font-bold mb-6">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:mx-60">
          {products.map((product) => (
            <Link href={`${product.href}/${product.name}`} key={product.id}><div className="border rounded-lg p-2 shadow-lg text-center h-96">
              <img src={product.img} alt={product.name} className="w-full h-72 object-cover mb-4" />
              <h3 className="font-medium text-lg">{product.name}</h3>
            </div></Link>
          ))}
        </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow-1">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-md">
            <img
              src={product.img}
              alt={product.name}
              className="h-72 w-72 object-cover"
            />
            <h4 className="mt-4">{product.name}</h4>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FeaturedProducts;
