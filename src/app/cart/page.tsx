import Hero2 from "../components/Hero2";

export default function ShoppingCart() {
    interface Cart {
      product: {
        name: string;
        color: string;
        size: string;
      };
      id: number;
      price: string;
      quantity: number;
      total: string;
      pic: string;
    }
  
    const cartItems: Cart[] = [
      {
        product: {
          name: "Ut diam consequat",
          color: "Brown",
          size: "XL",
        },
        id: 1,
        price: "$32.00",
        quantity: 1,
        total: "$219.00",
        pic: "/images/cart/item1.png",
      },
      {
        product: {
          name: "Vel faucibus posuere",
          color: "Brown",
          size: "XL",
        },
        id: 2,
        price: "$32.00",
        quantity: 1,
        total: "$219.00",
        pic: "/images/cart/item2.png",
      },
      {
        product: {
          name: "Ac vitae vestibulum",
          color: "Brown",
          size: "XL",
        },
        id: 3,
        price: "$32.00",
        quantity: 1,
        total: "$219.00",
        pic: "/images/cart/item3.png",
      },
      {
        product: {
          name: "Elit massa diam",
          color: "Brown",
          size: "XL",
        },
        id: 4,
        price: "$32.00",
        quantity: 1,
        total: "$219.00",
        pic: "/images/cart/item4.png",
      },
      {
        product: {
          name: "Proin pharetra elementum",
          color: "Brown",
          size: "XL",
        },
        id: 5,
        price: "$32.00",
        quantity: 1,
        total: "$219.00",
        pic: "/images/cart/item5.png",
      },
      // More items...
    ];
  
    return (
      <div>
        <Hero2 name="Shopping Cart" add1="Home . Pages" add2=". Shopping Cart" />
      <div className="lg:mx-60 md:mx-48 my-32">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-72">
            <div className="col-span-1 lg:w-[600px] md:w-[400px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-xl text-purple-900 pb-2 text-left">Product</th>
                <th className="text-xl text-purple-900 pb-2 text-left">Price</th>
                <th className="text-xl text-purple-900 pb-2 text-left">Quantity</th>
                <th className="text-xl text-purple-900 pb-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-300">
                  <td className="py-4">
                    <div className="lg:flex md:flex gap-4 items-center">
                        <div className="flex-none">
                            <div className="flex justify-end">
                            <button className="bg-black h-5 w-5 rounded-full absolute text-white text-lg items-center justify-center flex font-bold">x</button>
                            </div>
                      <img
                        src={item.pic}
                        alt={item.product.name}
                        className="w-28 h-28 object-cover p-1"
                      />
                      </div>
                      <div className="lg:mx-0 md:mx-0 mx-1">
                        <h3 className="text-lg font-bold">{item.product.name}</h3>
                        <p className="text-gray-500 text-sm">
                          Color: {item.product.color}
                        </p>
                        <p className="text-gray-500 text-sm">Size: {item.product.size}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">{item.price}</td>
                  <td className="py-4"><button className="bg-gray-400 px-1 mx-1 text-white text-lg mr-2">+</button >{item.quantity}<button className="bg-gray-400 px-1 mx-1 text-white text-lg ml-2">-</button></td>
                  <td className="py-4">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between my-10">
          <input
                  type="button"
                  className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full lg:w-44 md:w-36 hover:bg-pink-400 hover:cursor-pointer"
                  value="Update Cart"
                />
            <input
                  type="button"
                  className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full lg:w-44 md:w-36 hover:bg-pink-400 hover:cursor-pointer"
                  value="Clear Cart"
                />
            

          </div>
          </div>
          <div className="col-span-1 lg:w-[24rem] md:w-[20rem] w-auto">
          <div className="py-12 bg-gray-100 rounded-sm px-8">
            <div className="flex justify-between font-bold text-lg">
                <p>Subtotals:</p>
                <p>$219.00</p>
            </div>
            <div className="my-4">
            <hr className="border-gray-300 border-2" />
                </div>
            <div className="flex justify-between font-bold text-lg pt-10">
                <p>Totals:</p>
                <p>$325.00</p>
            </div>
            <div className="my-4">
            <hr className="border-gray-300 border-2" />
                </div>
            <label className="flex items-center space-x-2 pt-10 pb-8">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded text-green-600 border-gray-300"
                  />
                  <span>Shipping and Taxes calculated at checkout</span>
                </label>
                <div className="form-group">
                <input
                  type="button"
                  className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-green-500 w-full  hover:bg-green-400 hover:cursor-pointer"
                  value="Proceed to Checkout"
                />
              </div>
          </div>
          <div>
            <div>
          <h1 className="my-8 font-bold text-purple-900 text-center text-3xl">Calculate Shopping</h1>
          </div>
          
          <form className="text-sm font-normal py-12 bg-gray-100 rounded-sm px-8">
              <div className="form-group mb-6">
               
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                  id="faq_address"
                  placeholder="Pakistan"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                  id="faq_apartment"
                  placeholder="Karachi - 74200"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                  id="faq_city"
                  placeholder="Postal Code"
                  required
                />
              </div>              
              
              <div className="form-group">
                <input
                  type="button"
                  className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full lg:w-44 md:w-36 hover:bg-pink-400 hover:cursor-pointer"
                  value="Calculate Shipping"
                />
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
  