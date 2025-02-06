import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Products {
  _id: string;
  name: string;
  img: string;
  price: number;
  discountPercentage: number;
  category: string;
  onSale: boolean;
  rating_5: number;
  rating_4: number;
  rating_3: number;
  rating_2: number;
  rating_1: number;
}
interface RelatedProductsProps {
  category: string;
}

function RelatedProducts({ category }: RelatedProductsProps) {
  const categ = category;
  const [products, setProducts] = useState<Products[]>([]);

  const calculateAverageRating = (product: Products) => {
    const { rating_5, rating_4, rating_3, rating_2, rating_1 } = product;
    const totalRatings = rating_5 + rating_4 + rating_3 + rating_2 + rating_1;
    const totalStars =
      rating_5 * 5 + rating_4 * 4 + rating_3 * 3 + rating_2 * 2 + rating_1;
    return totalRatings > 0 ? totalStars / totalRatings : 0;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products" && category == "${categ}"] [0...4] {
        _id,
        name,
        "img": image.asset->url,
        price,
        discountPercentage,
        category,
        onSale,
        rating_5,
        rating_4,
        rating_3,
        rating_2,
        rating_1
      }`;

      try {
        const data: Products[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="lg:mx-44 md:mx-32 mx-3 mb-20">
      <p className="font-bold text-purple-900 text-3xl mb-10">
        Related Products
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {products.map((item) => {
          const averageRating = Math.round(calculateAverageRating(item));
          return (
            <Link href={`/products/${item._id}`} key={item._id}>
              <div className="col-span-1">
                <div className="lg:w-64 md:w-52 shadow-4-sides lg:hover:cursor-pointer mb-4 p-2">
                  <div className="flex justify-center lg:h-72 w-full lg:hover:h-80 lg:ease-in">
                    <img
                      src={item.img || "/fallback-image.jpg"}
                      alt={item.name}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className=" text-purple-900 my-3 items-center">
                    <p className="font-bold mx-1">{item.name}</p>
                    <div>
                      {Array.from({ length: 5 }, (_, i) => (
                        <i
                          key={i}
                          className={`fa-solid fa-star ${
                            i < averageRating ? "text-yellow-400" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-purple-900">${item.price}.00</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
