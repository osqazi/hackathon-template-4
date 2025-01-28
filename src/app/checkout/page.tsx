"use client"
import Hero2 from "../components/Hero2";
import { useState, useEffect } from "react";

export default function Checkout() {
    
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

    const calculateTotal = () => {
        return cart.reduce((total, item) => total +  Number(item.price) * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <Hero2 name="Checkout" add1="Home . Pages" add2=". Checkout" />
            <div className="lg:mx-48 md:mx-40 my-32">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-72">
                    <div className="col-span-1 lg:w-[600px] md:w-[400px]">
                        <h2 className="text-2xl font-bold mb-8">Billing Details</h2>
                        <form className="text-sm font-normal py-12 bg-gray-100 rounded-sm px-8">
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="first_name"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="last_name"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="email"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="address"
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="city"
                                    placeholder="City"
                                    required
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="postal_code"
                                    placeholder="Postal Code"
                                    required
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="country"
                                    placeholder="Country"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="button"
                                    className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-pink-600 w-full lg:w-44 md:w-36 hover:bg-pink-400 hover:cursor-pointer"
                                    value="Place Order"
                                />
                            </div>
                        </form>
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
                                
                            </label>
                            <div className="form-group">
                                <input
                                    type="button"
                                    className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-green-500 w-full hover:bg-green-400 hover:cursor-pointer"
                                    value="Proceed to Payment"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
