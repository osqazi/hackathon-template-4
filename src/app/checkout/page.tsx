"use client";
import Hero2 from "../components/Hero2";
import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/router";

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
    const { isSignedIn } = useAuth(); // Already destructured here
    const router = useRouter(); // Fixed to use 'router' instead of 'route'

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2);
    };

    const handlePaymentProceed = () => {
        if (!isSignedIn) {
            // Redirect to login page if not signed in
            router.push("https://feasible-shad-50.accounts.dev/sign-in");
        } else {
            // Redirect to the payment page if signed in
            router.push("/makepayment");
        }
    };

    return (
        <div>
            <Hero2 name="Checkout" add1="Home . Pages" add2=". Checkout" />
            <div className="lg:mx-48 md:mx-40 my-32">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-72">
                    <div className="col-span-1 lg:w-[600px] md:w-[400px]">
                        <h2 className="text-2xl font-bold mb-8">Billing Details</h2>
                        <form className="text-sm font-normal py-12 bg-gray-100 rounded-sm px-8">
                            {/* Form fields */}
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="first_name"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            {/* Other form fields */}
                            <div className="form-group">
                                <input
                                    type="text"
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
                            <div className="form-group">
                                <input
                                    type="button"
                                    className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-green-500 w-full hover:bg-green-400 hover:cursor-pointer"
                                    value="Proceed to Payment"
                                    onClick={handlePaymentProceed}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
