import React from "react";

interface Product {
  id: number;
  name: string;
  img: string;
}

const products: Product[] = [
  { id: 1, name: "LW Chair A", img: "/images/chair1.png" },
  { id: 2, name: "LW Chair B", img: "/images/chair2.png" },
  { id: 3, name: "LW Chair C", img: "/images/chair3.png" },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <h3 className="text-center text-2xl font-bold mb-6">Featured Products</h3>
      <div className="flex justify-center gap-8 h-96 w-max-80">
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
      </div>
    </div>
  );
};

export default FeaturedProducts;
