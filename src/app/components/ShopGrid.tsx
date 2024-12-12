import shopItems from "../shopItems";

export default function ShopGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-14 lg:mx-52 md:mx-44 mx-1 my-28 md:grid-cols-3 lg:grid-cols-4">
          {shopItems.map((items, i) => {
            return (
                <div className="col-span-1" key={items.id}>
              <div>
                <div className="bg-stone-100 p-24 rounded-md lg:h-50 lg:w-40  md:h-50 md:w-40 h-auto w-auto flex justify-center">
                  <img src={items.pic} alt="pic" className="object-fill m-2"></img>
                </div>
                <div>
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
                    <p>`${items.newprice}`</p>
                    <p className="text-red-600 line-through">`${items.oldprice}`</p>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        
      </div>
    </div>
  );
}
