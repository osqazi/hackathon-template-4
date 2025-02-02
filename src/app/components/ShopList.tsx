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

interface CartItem extends Item {
  id: string;
  pic: string;
  quantity: number;
  total: number;
}

export default function ShopList({ searchQuery, sorting }: { searchQuery: string, sorting: string }) {
  const [products, setProducts] = useState<Item[]>([]);
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    brands: [] as string[],
    discountOffers: [] as string[],
    ratings: [] as number[],
    categories: [] as string[],
  });
  
  // Calculate average rating
  const calculateAverageRating = (product: Item) => {
    const { rating_5, rating_4, rating_3, rating_2, rating_1 } = product;
    const totalRatings = rating_5 + rating_4 + rating_3 + rating_2 + rating_1;
    const totalStars = rating_5 * 5 + rating_4 * 4 + rating_3 * 3 + rating_2 * 2 + rating_1;
    return totalRatings > 0 ? totalStars / totalRatings : 0;
  };

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
      if(sorting === "bm"){
        result.sort((a, b) => calculateAverageRating(b) - calculateAverageRating(a));  
      }
      if(sorting === "pl"){
        result.sort((a, b) => a.price - b.price);
      } 
      if(sorting === "ph"){
        result.sort((a, b) => b.price - a.price);
      } 
      
      
      let filteredProducts = result;
      if (searchQuery) {
        filteredProducts = result.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Brand filter
      if (filters.brands.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.brands.includes(product.name)
        );
      }

      // Discount filter
      if (filters.discountOffers.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.discountOffers.some((offer) => {
            if (offer === "20% Cashback") return product.discountPercentage >= 20;
            if (offer === "5% Cashback Offer") return product.discountPercentage >= 5;
            if (offer === "25% Discount Offer") return product.discountPercentage >= 25;
            return false;
          })
        );
      }

      // Ratings filter
      if (filters.ratings.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.ratings.some((rating) => calculateAverageRating(product) >= rating)
        );
      }

      const itemsPerPage = 8;
      const totalItems = filteredProducts.length;
      const pageCount = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(pageCount);
      
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
      
      setProducts(paginatedProducts);
    };
    fetchProducts();
  }, [currentPage, searchQuery, filters, sorting]);

  const addToCart = (product: Item) => {
    setCart((prevCart) => {
      const exist = prevCart.some((item) => item.id === product._id);
      if (exist) {
        alert("Item already added to cart!");
        return prevCart;
      }

      const newCartItem: CartItem = {
        ...product,
        id: product._id,
        pic: product?.image.asset.url,
        quantity: 1,
        total: product.price - (product.price * product.discountPercentage) / 100,
      };

      const updatedCart = [...prevCart, newCartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("storage"));
      return updatedCart;
    });
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:mx-44 md:mx-20 mx-2 my-28">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full">
      <ShopSidebar filters={filters} setFilters={setFilters} />
      </div>

      {/* Shop List */}
      <div className="lg:w-3/4 w-full">
        {products.map((item) => (
          <div key={item._id} className="flex justify-center">
            <div className="lg:flex md:flex gap-8 items-center mb-16 shadow-md">
              <div>
                <img
                  src={item.image?.asset?.url}
                  alt={item.name}
                  className="h-52 w-80 object-contain"
                />
              </div>
              <div>
                <div className="flex items-center justify-between w-80">
                  <h1 className="font-bold text-lg text-purple-900">{item.name}</h1>
                  <div>
                    <ul className="flex justify-center gap-2">
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
                  <p>${item.price - (item.price * item.discountPercentage) / 100}</p>
                  <p className="line-through text-red-600">{item.price}</p>
                  <div>
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${i < calculateAverageRating(item) ? 'text-yellow-400' : 'text-gray-400'}` }
                      ></i>
                    ))}
                  </div>
                </div>
                <div className="lg:w-[600px] mt-4 w-80 md:w-[450px]">
                  <h1 className="text-purple-400">{item.description}</h1>
                </div>
                <div className="flex gap-10 mx-3 mt-8 mb-4 text-lg">
                  <button onClick={() => { addToCart(item); console.log(item); }} >
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
        ))}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg mx-2"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? 'bg-purple-900 text-white' : 'bg-gray-100'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-lg mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
