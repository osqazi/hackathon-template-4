import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

interface Product {
  _id: string;
  name: string;
  image: any;
}

const urlFor = (source: any) => builder.image(source).width(300).height(300).url();

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products" && isFeaturedProduct == true] {
        _id, name, image
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white py-10">
      <h3 className="text-center text-2xl font-bold mb-6">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:mx-60">
        {products.map((product) => (
          <Link href={`/products/${product._id}`} key={product._id}>
            <div className="border rounded-lg p-2 shadow-lg text-center h-96 cursor-pointer">
              {product.image && (
                <Image
                  src={urlFor(product.image)}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-72 object-cover mb-4"
                />
              )}
              <h3 className="font-medium text-lg">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
