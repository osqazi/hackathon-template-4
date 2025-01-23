import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

// Define TypeScript interface for product data
interface Product {
  _id: string;
  name: string;
  img: string;
  price: number;
  discountPercentage: number;
  onSale: boolean;
}

const LatestProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products" && defined(createdOn)] | order(createdOn desc) [0...6] {
        _id,
        name,
        "img": image.asset->url,
        price,
        discountPercentage,
        onSale
      }`;
      
      
      try {
        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-blue mb-6">Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/products/${product._id}`} key={product._id}>
              <div className="border rounded-md shadow-md p-4 bg-white relative group">
                <div className="relative">
                  <img src={product.img} alt={product.name} className="w-full h-auto object-cover rounded-md" />
                  {product.onSale && (
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-sm font-bold rounded-full">
                      Sale
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-medium text-dark-blue">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-pink-500 font-semibold">${product.price - (product.price * product.discountPercentage / 100)}</span>
                  {product.discountPercentage > 0 && (
                    <span className="text-gray-500 ml-3 line-through">${product.price}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
