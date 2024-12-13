import Hero2 from "../components/Hero2";
import ShopGrid from "../components/ShopGrid";

export default function Shop() {
  return (
    <div>
      <Hero2
        name="Shop Grid Default"
        add1="Home . Pages"
        add2=". Shop Grid Default"
      />
      <div>
        <div className="mt-28 lg:mx-52 md:mx-44 mx-1">
          <div className="md:flex lg:flex text-center gap-2">
            <div>
            <h1 className="font-bold text-xlg text-nowrap text-purple-900">
              Ecommerce Acceories & Fashion item
            </h1>
            <h4 className="text-purple-900 lg:text-start md:text-start">About 9,620 results (0.62 seconds)</h4>
            </div>
            
            <div className="lg:flex md:flex gap-2">
              <div className="text-lg">
                <label id="pages" className="p-2">Per Page:</label>
                <input
                  type="number"
                  name="pages"
                  defaultValue={1}
                  required
                  className="border border-gray-300 lg:w-10 w-20 md:w-10 text-center p-1"
                ></input>
              </div>
              <div>
              <label id="sortby" className="p-2">Sort By:</label>
              <select
                name="sortBy"
                required
                className="border border-gray-300 text-lg p-2"
              >
                 <option value="" disabled selected>Best Match</option>
                <option value="pl">Price Low</option>
                <option value="ph">Price High</option>
                <option value="fd">Free Delivery</option>
              </select>
              </div>
              <div  className=" flex gap-2 p-2 justify-center">
                <p>View: </p>
                    <a><i className="fa-solid fa-grip text-2xl hover:cursor-pointer "></i></a>
                    <a><i className="fa-solid fa-list text-2xl hover:cursor-pointer"></i></a>
              </div>
              <div>
              <input
                  type="text"
                  name="blank"
                  required
                  className="border border-gray-300 lg:w-48 text-center p-1"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <ShopGrid />
         {/* Brand Image */}
      <div className="flex justify-center p-8 sm:p-16">
        <img
          src="/images/brand.png"
          alt="Brand"
          className="w-full max-w-[70rem] h-auto"
        />
      </div>
      </div>
    </div>
  );
}
