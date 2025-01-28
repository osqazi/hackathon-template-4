"use client"
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ShopSidebar from './ShopSidebar';
import { Item } from "@radix-ui/react-select";

// Define interfaces
interface ProductColor {
  hex: string;
}

interface Item {
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

interface CartItem extends Item {
  quantity: number;
  total: number;
}

export default function ShopList() {
  const [products, setProducts] = useState<Item[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"] {
        _id,
        name,
        image{ asset->{ url } },
        href,
        price,
        discountPercentage,
        description,
        colors,
        rating_5,
        rating_4,
        rating_3,
        rating_2,
        rating_1,
        createdOn
      }`;
      const result = await client.fetch<Item[]>(query);
      // Sort by highest average rating first
      result.sort((a, b) => calculateAverageRating(b) - calculateAverageRating(a));
      setProducts(result);
    };
    fetchProducts();
  }, []);

  // Calculate average rating
  const calculateAverageRating = (product: Item) => {
    const { rating_5, rating_4, rating_3, rating_2, rating_1 } = product;
    const totalRatings = rating_5 + rating_4 + rating_3 + rating_2 + rating_1;
    const totalStars = rating_5 * 5 + rating_4 * 4 + rating_3 * 3 + rating_2 * 2 + rating_1;
    return totalRatings > 0 ? totalStars / totalRatings : 0;
  };

  const addToCart = (product: Item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
  
      if (existingItem) {
        alert("Item already added to cart!"); // Show alert if item exists
        return prevCart; // Return previous cart without changes
      }
  
      // Add new item with correctly extracted image URL
      const updatedCart = [
        ...prevCart,
        {
          _id: product._id,
          name: product.name,
          pic: product.image.asset.url, // ✅ Store the image URL instead of the whole object
          price: product.price,
          discountPercentage: product.discountPercentage,
          quantity: 1,
          total: product.price, // Initial total is the price
        },
      ];
  
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Save updated cart in LocalStorage
      return updatedCart;
    });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:mx-44 md:mx-20 mx-2 my-28">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full">
        <ShopSidebar />
      </div>

      {/* Shop List */}
      <div className="lg:w-3/4 w-full">
        {products.map((item, i) => (
          // <Link href={`/products/${item._id}`} key={item._id}>
            <div key={item._id} className="flex justify-center">
              <div className="lg:flex md:flex gap-8 items-center mb-16 shadow-md">
                <div>
                  {/* Ensure images fit within their container */}
                  <img
                    src={item.image?.asset?.url}
                    alt={item.name}
                    className="h-52 w-80 object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between w-80">
                    <h1 className="font-bold text-lg text-purple-900">
                      {item.name}
                    </h1>
                    <div>
                      <ul className="flex justify-center gap-2">
                        {/* Display product colors dynamically */}
                        {item.colors?.map((color, index) => (
                          <li
                            key={index}
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: color.hex }}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-80 mt-4">
                    {/* Display product price */}
                    <p>${item.price - (item.price * item.discountPercentage / 100)}</p>
                    <p className="line-through text-red-600">{item.price}</p>
                    <div>
                      {/* Render rating stars dynamically */}
                      {Array.from({ length: 5 }, (_, i) => (
                        <i
                          key={i}
                          className={`fa-solid fa-star ${
                            i < calculateAverageRating(item)
                              ? 'text-yellow-400'
                              : 'text-gray-400'
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-[600px] mt-4 w-80 md:w-[450px]">
                    {/* Display product description */}
                    <h1 className="text-purple-400">{item.description}</h1>
                  </div>
                  <div className="flex gap-10 mx-3 mt-8 mb-4 text-lg">
                    <button onClick={()=>{addToCart(item); console.log(item)}}>
                      <i className="fa-solid fa-cart-shopping hover:cursor-pointer"></i>
                    </button>
                    <a>
                      <i className="fa-regular fa-heart hover:cursor-pointer"></i>
                    </a>
                    <a>
                      <i className="fa-solid fa-magnifying-glass hover:cursor-pointer"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}
