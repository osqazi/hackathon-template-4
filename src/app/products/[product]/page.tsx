"use client";
import Hero2 from "@/app/components/Hero2";
import RelatedProducts from "@/app/components/RelatedProducts";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { useAtom } from "jotai";
import { cartAtom } from "@/app/store/cartAtom";

interface ProductColor {
  hex: string;
}

interface ProductDet {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  href: string;
  price: number;
  discountPercentage: number;
  description: string;
  colors: ProductColor[];
  rating_5: number;
  rating_4: number;
  rating_3: number;
  rating_2: number;
  rating_1: number;
  createdOn: string;
}

export default function ProductDetail({ params }: { params: { product: string } }) {
  const prodID = params.product;
  const [product, setProduct] = useState<ProductDet | null>(null);
  const [cart, addCart] = useAtom(cartAtom)

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "products" && _id == $id][0] {
        _id,
        name,
        description,
        image{ asset->{ url } },
        href,
        price,
        discountPercentage,
        colors,
        rating_5,
        rating_4,
        rating_3,
        rating_2,
        rating_1,
        createdOn
      }`;

      try {
        const data: ProductDet = await client.fetch(query, { id: prodID });
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [prodID]);

  if (!product) {
    return <p className="text-center text-xl font-bold mt-10">Loading Product...</p>;
  }

  const handler = () => {
    addCart([...cart, {
      id: prodID,
    }]);
    console.log(cart)
  }

  return (
    <div>
      <Hero2 name="Product Details" add1="Home . Pages" add2=". Product Details" />
      <div className="flex justify-center mt-32 lg:mx-44 md:mx-32 mx-2 mb-32 shadow-4-sides">
        <div className="grid lg:grid-cols-[1fr,2fr,3fr] md:grid-cols-[1fr,2fr,3fr] grid-cols-1 p-6 md:gap-4 lg:gap-0">
          <div className="col-span-1">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="mb-4">
                <img
                  src={product.image.asset.url}
                  alt={product.name}
                  className="lg:w-36 lg:h-40 w-full h-72 md:w-36 md:h-40 object-contain mb-4"
                />
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <div className="flex">
              <img
                src={product.image.asset.url}
                alt={product.name}
                className="object-cover h-[510px]"
              />
            </div>
          </div>
          <div className="col-span-1 text-center lg:text-left md:text-left lg:px-12 md:px-8 px-2">
            <div className="mt-16">
              <h1 className="text-2xl font-bold">{product.name}</h1>
            </div>
            <div className="flex items-center mt-2 lg:justify-start md:justify-start justify-center">
              {[...Array(5)].map((_, index) => (
                <i key={index} className="fa-solid fa-star text-yellow-400"></i>
              ))}
              <p>(22)</p>
            </div>
            <div className="flex items-center gap-6 lg:justify-start md:justify-start justify-center">
              <p className="my-4 font-bold">
                ${product.price - (product.price * product.discountPercentage) / 100}
              </p>
              <p className="line-through text-red-600 font-bold">${product.price}</p>
            </div>
            <p className="font-bold">Color</p>
            <p className="my-4 text-purple-400">{product.description}</p>
            <div className="flex gap-8 lg:pl-12 md:pl-8 justify-center lg:justify-start md:lg:justify-start my-3 font-bold">
                <p onClick={handler} className="hover:cursor-pointer">
                  Add to Cart <span className="fa-solid fa-cart-shopping hover:cursor-pointer"></span>
                </p>
              <a>
                <i className="fa-regular fa-heart hover:cursor-pointer"></i>
              </a>
            </div>
            <p className="font-bold">Categories:</p>
            <p className="my-3 font-bold">Tags</p>
            <div className="flex gap-10 items-center mb-16 lg:justify-start md:justify-start justify-center">
              <p className="font-bold">Share</p>
              <div className="flex gap-2">
                <a>
                  <i className="fa-brands fa-facebook text-blue-600 hover:cursor-pointer"></i>
                </a>
                <a>
                  <i className="fa-brands fa-square-instagram text-pink-500 hover:cursor-pointer"></i>
                </a>
                <a>
                  <i className="fa-brands fa-square-twitter hover:cursor-pointer"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-40 md:px-28 bg-gray-200 mb-20 pb-20 px-3 text-justify lg:text-start md:text-start">
        <ul className="lg:flex md:flex gap-20 pt-16 text-center">
          {["Description", "Additional info", "Reviews", "Video"].map((item) => (
            <a key={item}>
              <li className="font-bold text-lg text-purple-900 hover:cursor-pointer mb-1">{item}</li>
            </a>
          ))}
        </ul>
        <p className="text-purple-900 text-lg font-bold mt-10 mb-3">Various tempor:</p>
        <p className="text-purple-800">
          Aliquam dis vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend
          habitasse amet...
        </p>
      </div>
      <RelatedProducts />
      <div className="flex justify-center p-8 sm:p-16 mb-10">
        <img src="/images/brand.png" alt="Brand" className="w-full max-w-[70rem] h-auto" />
      </div>
    </div>
  );
}
