import shopItems from "../shopItems";
import Link from "next/link";
import ShopSidebar from "./ShopSidebar";

export default function ShopGrid() {
  return (
    <div className="flex flex-col lg:flex-row lg:mx-44 md:mx-44 mx-2 my-28">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full">
        <ShopSidebar />
      </div>

      {/* Shop Grid */}
      <div className="lg:w-3/4 w-full grid grid-cols-1 gap-14 md:grid-cols-3 lg:grid-cols-4">
        {shopItems.map((items) => (
          <Link href={`${items.href}/${items.name}`} key={items.id}>
            <div className="col-span-1">
              <div className="flex flex-col h-full">
                <div className="bg-stone-100 p-6 lg:p-4 md:p-6 rounded-md flex justify-center items-center h-64">
                  <img
                    src={items.pic}
                    alt="pic"
                    className="object-contain max-h-full max-w-full"
                  />
                </div>

                <div className="flex flex-col items-center justify-between flex-grow">
                  <p className="text-center font-bold p-2 text-[14px] text-nowrap">
                    {items.name}
                  </p>
                  <div>
                    <ul className="flex justify-center gap-2">
                      <li className="h-3 w-3 bg-yellow-600 rounded-full"></li>
                      <li className="h-3 w-3 bg-pink-500 rounded-full"></li>
                      <li className="h-3 w-3 bg-purple-700 rounded-full"></li>
                    </ul>
                  </div>
                  <div className="flex justify-center gap-6 pt-1 text-[14px]">
                    <p>{`$${items.newprice}`}</p>
                    <p className="text-red-600 line-through">{`$${items.oldprice}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
