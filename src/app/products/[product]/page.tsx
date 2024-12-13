import Hero2 from "@/app/components/Hero2"

export default function ProductDetail() {
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
            <img src="/images/products/Item1.png" alt="image" className="lg:w-36 lg:h-40  w-full h-72 md:w-36 md:h-40  object-cover mb-4 "></img>
          </div>
          <div>
            <img src="/images/products/Item2.png" alt="image" className="lg:w-36 lg:h-40 w-full h-80  md:w-36 md:h-40 object-cover mb-4"></img>
          </div>
          <div>
            <img src="/images/products/Item3.png" alt="image" className="lg:w-36 lg:h-40 w-full h-80  md:w-36 md:h-40 object-cover mb-4"></img>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex">
            <img src="/images/products/Item4.png" alt="image" className="object-cover h-[510px]" ></img>
          </div>
        </div>
        <div className="col-span-1 text-center lg:text-left md:text-left lg:px-12 md:px-8 px-2">
          <div  className="mt-16">
            <h1 className="text-2xl font-bold">Playwood arm chair</h1>
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
            <p className="my-4 font-bold">$32.00</p>
            <p className="line-through text-red-600 font-bold">$39.00</p>
          </div>
          <p className="font-bold">Color</p>
          <p className="my-4 text-purple-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <div className="flex gap-8 lg:pl-12 md:pl-8 justify-center lg:justify-start md:lg:justify-start my-3 font-bold">
            <a>
              <p>Add to Cart</p>
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
                <a><i className="fa-brands fa-facebook text-blue-600 hover:cursor-pointer"></i></a>
                <a><i className="fa-brands fa-square-instagram text-pink-500 hover:cursor-pointer"></i></a>
                <a><i className="fa-brands fa-square-twitter hover:cursor-pointer"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
