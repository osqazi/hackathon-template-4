"use client";
import Hero2 from "@/app/components/Hero2";
import RelatedProducts from "@/app/components/RelatedProducts";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

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

// @ts-nocheck

export default function ProductDetail({ params }: { params: { product: string } }) {
  const prodID = params.product;
  const [product, setProduct] = useState<ProductDet | null>(null);

  // Fetch Product Data
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

  // Add to Cart Handler (localStorage and state update)
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const exist = existingCart.some((item: any) => item.id === prodID);
    if (!exist) {
      const newCart = [
        ...existingCart,
        {
          id: prodID,
          name: product?.name,
          price:
            product?.price && product?.discountPercentage
              ? product.price -
                product.price * (product.discountPercentage / 100)
              : 0, // Set default to 0 or any fallback value you prefer
          quantity: 1,
          total: product?.price && product?.discountPercentage
              ? product.price -
                product.price * (product.discountPercentage / 100)
              : 0, // Set default to 0 or any fallback value you prefer
          pic: product?.image.asset.url,
        },
      ];
      // Save to localStorage and trigger storage event for Navbar
      localStorage.setItem("cart", JSON.stringify(newCart));

      // Trigger the cart update event in the Navbar
      window.dispatchEvent(new Event("storage"));
    } else {
      alert("Item already added to cart!");
    }
  };

  if (!product) {
    return (
      <p className="text-center text-xl font-bold mt-10">Loading Product...</p>
    );
  }

  return (
    <div>
      <Hero2
        name="Product Details"
        add1="Home . Pages"
        add2=". Product Details"
      />
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
                $
                {product.price -
                  (product.price * product.discountPercentage) / 100}
              </p>
              <p className="line-through text-red-600 font-bold">
                ${product.price}
              </p>
            </div>
            <p className="font-bold">Color</p>
            <p className="my-4 text-purple-400">{product.description}</p>
            <div className="flex gap-8 lg:pl-12 md:pl-8 justify-center lg:justify-start md:lg:justify-start my-3 font-bold">
              <p onClick={addToCart} className="hover:cursor-pointer">
                Add to Cart{" "}
                <span className="fa-solid fa-cart-shopping hover:cursor-pointer"></span>
              </p>
              <a>
                <i className="fa-regular fa-heart hover:cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
}
