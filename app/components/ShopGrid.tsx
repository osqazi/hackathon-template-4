import { client } from "@/sanity/lib/client";
import { useEffect, useState } from 'react';
import Link from "next/link";
import ShopSidebar from "./ShopSidebar";

// Define interfaces
interface ProductColor {
  hex: string;
}

interface Item {
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
  brand: string;
  category: string;
}

export default function ShopGrid({ searchQuery, sorting }: { searchQuery: string, sorting: string }) {
  const [products, setProducts] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

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
      if (sorting === "bm") {
        result.sort((a, b) => calculateAverageRating(b) - calculateAverageRating(a));
      } else if (sorting === "pl") {
        result.sort((a, b) => a.price - b.price);
      } else if (sorting === "ph") {
        result.sort((a, b) => b.price - a.price);
      }
  
      setProducts(result);
      setTotalPages(Math.ceil(result.length / 12)); // Adjust pages based on the total number of products
    };
  
    fetchProducts();
  }, [sorting]); // Re-run when `sorting` changes

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
    const matchesCategory =
      filters.categories.length === 0 || filters.categories.includes(product.category);
    const matchesDiscount =
      filters.discountOffers.length === 0 ||
      filters.discountOffers.some((discount) => product.discountPercentage >= parseInt(discount));
    const matchesRating =
      filters.ratings.length === 0 ||
      filters.ratings.some((rating) => calculateAverageRating(product) >= rating);

    return matchesSearch && matchesBrand && matchesCategory && matchesDiscount && matchesRating;
  });


    // Get products for the current page
  const getPaginatedProducts = (page: number) => {
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 12;
    return filteredProducts.slice(startIndex, endIndex);
  };

  // Handle pagination click
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:mx-44 md:mx-20 mx-2 mt-10">
        {/* Sidebar */}
        <div className="lg:w-1/4 w-full">
        <ShopSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Shop Grid */}
        <div className="lg:w-3/4 w-full grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {getPaginatedProducts(currentPage).map((item) => (
            <Link href={`/products/${item._id}`} key={item._id}>
              <div className="col-span-1">
                <div className="flex flex-col h-full shadow-md p-2 rounded-md">
                  {/* Image Section */}
                  <div className="bg-stone-100 p-6 lg:p-4 md:p-6 rounded-md flex items-center justify-center">
                    <img
                      src={item.image?.asset?.url}
                      alt={item.name}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>

                  {/* Product Info Section */}
                  <div className="flex flex-col items-center justify-between flex-grow">
                    {/* Product Name */}
                    <p className="text-center font-bold p-2 text-[14px] break-words whitespace-normal min-h-[3rem]">
                      {item.name}
                    </p>

                    {/* Product Colors */}
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

                    {/* Price Section */}
                    <div className="flex justify-center gap-6 pt-1 text-[14px]">
                      <p>{`$${item.price - (item.price * item.discountPercentage / 100)}`}</p>
                      <p className="text-red-600 line-through">{`$${item.price}`}</p>
                    </div>

                    {/* Rating Stars */}
                    <div className="mt-2">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-white rounded-md disabled:bg-gray-400"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === i + 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-white rounded-md disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
