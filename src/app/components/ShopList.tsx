import { Item } from "@radix-ui/react-select";
import shopItems2 from "../shopItems2";

export default function ShopList() {
  return (
    <div className="lg:mx-52 md:mx-44 my-28">
      {shopItems2.map((Item, i) => {
        return (
          <div key={i} className="flex justify-center">
            <div className="lg:flex md: md:flex gap-8 items-center mb-16 shadow-md ">
              <div className="">
                <img
                  src={Item.pic}
                  alt="image"
                  className="h-52 w-80 object-cover"
                ></img>
              </div>
              <div>
                <div className="flex items-center justify-between w-80">
                  <h1 className="font-bold text-lg text-purple-900">
                  {Item.name}
                  </h1>
                  <div>
                    <ul className="flex justify-center gap-2">
                      <li className="h-3 w-3 bg-yellow-600 rounded-full"></li>
                      <li className="h-3 w-3 bg-pink-500 rounded-full"></li>
                      <li className="h-3 w-3 bg-purple-700 rounded-full"></li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between w-80 mt-4">
                  <p>  {Item.newprice}</p>
                  <p className="line-through text-red-600 ">  {Item.oldprice}</p>
                  <div>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-gray-400"></i>
                  </div>
                </div>
                <div className="lg:w-[600px] mt-4 w-80 md:w-[450px]">
                  <h1 className="text-purple-400">
                   {Item.detail}
                  </h1>
                </div>
                <div className=" flex gap-10 mx-3 mt-8 mb-4 text-lg">
                  <a><i className="fa-solid fa-cart-shopping hover:cursor-pointer"></i></a>
                  <a><i className="fa-regular fa-heart hover:cursor-pointer"></i></a>
                  <a><i className="fa-solid fa-magnifying-glass hover:cursor-pointer"></i></a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
