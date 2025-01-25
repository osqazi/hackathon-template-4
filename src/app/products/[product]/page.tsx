"use client"
import Hero2 from "@/app/components/Hero2";
import RelatedProducts from "@/app/components/RelatedProducts";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";



interface ProductColor {
  hex: string;
}

interface ProductDet {
  _id: string,
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  href: string;
  price: number;
  discountPercentage:number;
  description: string;
  colors: ProductColor[];
  rating_5: number;
  rating_4: number;
  rating_3: number;
  rating_2: number;
  rating_1: number;
  createdOn: string;
}

export default function ProductDetail({params}:{params:{product:string}}) {
  const prodID = params.product;
  const [products, setProducts] = useState<ProductDet[]>([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const query = `*[_type == "products" && _id == $id][0] {
          _id,
          name,
          description,
          image{ asset->{ url } },
          price,
          discountPercentage,
          onSale
        }`;
        
        try {
          const data: ProductDet[] = await client.fetch(query, {id: prodID});
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);

    
  

  
  return (
    <div>
      <Hero2
        name="Product Details"
        add1="Home . Pages"
        add2=". Product Details"
      />
      <div className="flex justify-center mt-32 lg:mx-44 md:mx-32 mx-2 mb-32 shadow-4-sides">
        <div className="grid lg:grid-col-[1fr,2fr,3fr] md:grid-cols-[1fr,2fr,3fr] grid-cols-1 p-6 md:gap-4 lg:gap-0 ">
          <div className="col-span-1">
            <div className="mb-4">
              <img
                src={products.image?.asset?.url}
                alt={products.name}
                className="lg:w-36 lg:h-40  w-full h-72 md:w-36 md:h-40  object-contain mb-4 "
              ></img>
            </div>
            <div>
              <img
                src={products.image?.asset?.url}
                alt={products.name}
                className="lg:w-36 lg:h-40 w-full h-80  md:w-36 md:h-40 object-cover mb-4"
              ></img>
            </div>
            <div>
              <img
                src={products.image?.asset?.url}
                alt={products.name}
                className="lg:w-36 lg:h-40 w-full h-80  md:w-36 md:h-40 object-cover mb-4"
              ></img>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex">
              <img
                src={products.image?.asset?.url}
                alt={products.name}
                className="object-cover h-[510px]"
              ></img>
            </div>
          </div>
          <div className="col-span-1 text-center lg:text-left md:text-left lg:px-12 md:px-8 px-2">
            <div className="mt-16">
              <h1 className="text-2xl font-bold">{products.name}</h1>
            </div>
            <div className="flex items-center mt-2 lg:justify-start md:justify-start justify-center">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <p>(22)</p>
            </div>
            <div className="flex items-center gap-6 lg:justify-start md:justify-start justify-center">
              <p className="my-4 font-bold">${products.price - (products.price * products.discountPercentage / 100)}</p>
              <p className="line-through text-red-600 font-bold">${products.price}</p>
            </div>
            <p className="font-bold">Color</p>
            <p className="my-4 text-purple-400">
              {products.description}
            </p>
            <div className="flex gap-8 lg:pl-12 md:pl-8 justify-center lg:justify-start md:lg:justify-start my-3 font-bold">
              <a>
                <p>Add to Cart <span className="fa-solid fa-cart-shopping hover:cursor-pointer"></span></p>
              </a>
              <a>
                <i className="fa-regular fa-heart hover:cursor-pointer"></i>
              </a>
            </div>
            <p className="font-bold">Catagories:</p>
            <p className="my-3 font-bold">Tags</p>
            <div className="flex gap-10 items-center  mb-16 lg:justify-start md:justify-start justify-center">
              <p className="font-bold">Share</p>
              <div className=" flex gap-2">
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
          <a>
            <li className="font-bold text-lg text-purple-900 hover:cursor-pointer mb-1">
              Description
            </li>
          </a>
          <a>
            <li className="font-bold text-lg text-purple-900 hover:cursor-pointer mb-1">
              Additional info
            </li>
          </a>
          <a>
            <li className="font-bold text-lg text-purple-900 hover:cursor-pointer mb-1">
              Reviews
            </li>
          </a>
          <a>
            <li className="font-bold text-lg text-purple-900 hover:cursor-pointer mb-1">
              Video
            </li>
          </a>
        </ul>
        <p className="text-purple-900 text-lg font-bold mt-10 mb-3">Various tempor:</p>
          <p className="text-purple-800">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
          <p className="text-purple-900 text-lg font-bold mt-6 mb-3">More details:</p>
          <ul>
            <li className="pb-2">
              <div className="flex text-purple-900 gap-1 lg:text-nowrap">
              <i className="fa-solid fa-arrow-right font-bold text-2xl"></i>
                <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </div>
            </li>
            <li className="pb-2">
              <div className="flex text-purple-900 gap-1 lg:text-nowrap">
              <i className="fa-solid fa-arrow-right font-bold text-2xl"></i>
                <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </div>
            </li>
            <li className="pb-2">
              <div className="flex text-purple-900 gap-1 lg:text-nowrap">
              <i className="fa-solid fa-arrow-right font-bold text-2xl"></i>
                <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </div>
            </li>
            <li className="pb-2">
              <div className="flex text-purple-900 gap-1 lg:text-nowrap">
              <i className="fa-solid fa-arrow-right font-bold text-2xl"></i>
                <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </div>
            </li>
          </ul>
          
      </div>
      <RelatedProducts/>
      {/* Brand Image */}
      <div className="flex justify-center p-8 sm:p-16 mb-10">
          <img
            src="/images/brand.png"
            alt="Brand"
            className="w-full max-w-[70rem] h-auto"
          />
        </div>
    </div>
  );
}
