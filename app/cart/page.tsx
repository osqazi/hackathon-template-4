"use client";
import Hero2 from "../components/Hero2";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
const newProduct = {
  name: "Example Product",
  price: 100,
  _key: uuidv4(), // Assign unique key
};


export default function ShoppingCart() {
  interface Cart {
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
    pic: string;
  }

  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const AddQty = (id: string) => {
    const updateCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            total: item.price * (item.quantity + 1),
          }
        : item
    );
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart)); // Update localStorage
    window.dispatchEvent(new Event("storage"));
  };

  const LessQty = (id: string) => {
    const updateCart = cart.map((item) =>
      item.quantity > 1
        ? item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item
        : item
    );

    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart)); // Update localStorage
    window.dispatchEvent(new Event("storage"));
  };

  const RemoveItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    window.dispatchEvent(new Event("storage"));
  };

  // Calculate total for all items
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + Number(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  const ClearCart = () => {
    setCart([]); // Clear the cart state
    localStorage.removeItem("cart"); // Remove cart data from localStorage
    window.dispatchEvent(new Event("storage"));
  };

  // const handleCheckout = async () => {
  //     if (cart.length === 0) {
  //       alert("Your cart is empty!");
  //       return;
  //     }
    
  //     const orderData = {
  //       username: "Guest", // Replace this with actual username if available
  //       orderId: `ORD-${Date.now()}`,
  //       orderDate: new Date().toISOString(),
  //       orderStatus: "Pending",
  //       paymentStatus: "Pending",
  //       totalAmount: Number(calculateTotal()),
  //       products: cart.map((item) => ({
  //         _key: uuidv4(), // Generate a unique key for each product
  //         productId: item.id,
  //         productName: item.name,
  //         productImage: item.pic,
  //         productPrice: Number(item.price),
  //         productQuantity: item.quantity,
  //       })),
  //     };
    
  //     try {
  //       const response = await fetch("/api/createOrder", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(orderData),
  //       });
    
  //       if (response.ok) {
  //         localStorage.removeItem("cart"); // Clear cart after order creation
  //         setCart([]);
  //         window.location.href = "/checkout"; // Redirect to checkout
  //       } else {
  //         console.error("Failed to create order");
  //       }
  //     } catch (error) {
  //       console.error("Error creating order:", error);
  //     }
  //   };
    
  
  return (
    <div>
      <Hero2 name="Shopping Cart" add1="Home . Pages" add2=". Shopping Cart" />
      <div className="lg:mx-48 md:mx-40 my-32">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-72">
          <div className="col-span-1 lg:w-[600px] md:w-[400px]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-xl text-purple-900 pb-2 text-left">
                    Product
                  </th>
                  <th className="text-xl text-purple-900 pb-2 text-left">
                    Price
                  </th>
                  <th className="text-xl text-purple-900 pb-2 text-left">
                    Quantity
                  </th>
                  <th className="text-xl text-purple-900 pb-2 text-left">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-gray-300">
                    <td className="py-4">
                      <div className="lg:flex md:flex gap-4 items-center">
                        <div className="flex-none">
                          <div className="flex justify-end">
                            <button
                              className="bg-black h-5 w-5 rounded-full absolute text-white text-lg items-center justify-center flex font-bold"
                              onClick={() => RemoveItem(item.id)}
                            >
                              x
                            </button>
                          </div>
                          <img
                            src={item.pic}
                            alt={item?.name}
                            className="w-28 h-28 object-cover p-1"
                          />
                        </div>
                        <div className="lg:mx-0 md:mx-0 mx-1">
                          <h3 className="text-lg font-bold">{item.name}</h3>
                          <p className="text-gray-500 text-sm">Color: BROWN</p>
                          <p className="text-gray-500 text-sm">Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">{item.price}</td>
                    <td className="py-4">
                      <button
                        className="bg-gray-400 px-1 mx-1 text-white text-lg mr-2"
                        onClick={() => AddQty(item.id)}
                      >
                        +
                      </button>
                      {item.quantity}
                      <button
                        className="bg-gray-400 px-1 mx-1 text-white text-lg ml-2"
                        onClick={() => LessQty(item.id)}
                      >
                        -
                      </button>
                    </td>
                    <td className="py-4">${item.total}</td>
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
                onClick={ClearCart}
              />
            </div>
          </div>
          <div className="col-span-1 lg:w-[24rem] md:w-[20rem] w-auto">
            <div className="py-12 bg-gray-100 rounded-sm px-8">
              <div className="flex justify-between font-bold text-lg">
                <p>Subtotals:</p>
                <p>${calculateTotal()}</p>
              </div>
              <div className="my-4">
                <hr className="border-gray-300 border-2" />
              </div>
              <div className="flex justify-between font-bold text-lg pt-10">
                <p>Totals:</p>
                <p>${calculateTotal()}</p>
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
                <Link href={'/checkout'}>
                  <input
                    type="button"
                    className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-green-500 w-full hover:bg-green-400 hover:cursor-pointer"
                    value="Proceed to Checkout"
                    
                  />
                  </Link>
                
              </div>
            </div>
            <div>
              <div>
                <h1 className="my-8 font-bold text-purple-900 text-center text-3xl">
                  Calculate Shopping
                </h1>
              </div>

              <form className="text-sm font-normal py-12 bg-gray-100 rounded-sm px-8">
                <div className="form-group mb-6"></div>
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
