
"use client"
import Hero2 from "../components/Hero2";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";


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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const {user, isSignedIn} = useUser();

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
            console.log(cart)
        }
    }, []);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total +  Number(item.price) * item.quantity + 15, 0).toFixed(2);
    };
    

    const [loading, setLoading] = useState(false); // Loading state

const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSignedIn) {
        return alert("Please sign in to place an order");
    }

    setLoading(true); // Start loading
    document.body.style.cursor = "wait"; // Change cursor to waiting

    const orderData = {
        username: user.emailAddresses[0].emailAddress,
        firstName,
        lastName,
        phone,
        address,
        city,
        postalCode,
        country,
        orderId: `ORD-${Date.now()}`,
        orderDate: new Date().toISOString(),
        orderStatus: "Pending",
        paymentStatus: "Pending",
        totalAmount: Number(calculateTotal()),
        products: cart.map((item) => ({
            _key: item.id,
            productId: item.id,
            productName: item.name,
            productImage: item.pic,
            productPrice: Number(item.price),
            productQuantity: item.quantity,
        })),
    };

    try {
        const response = await fetch("/api/createOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            localStorage.removeItem("cart");
            setCart([]);
            window.location.href = "/orderComp"; // Redirect to Thank You page
        } else {
            console.error("Failed to create order");
        }
    } catch (error) {
        console.error("Error creating order:", error);
    } finally {
        setLoading(false); // Stop loading
        document.body.style.cursor = "default"; // Restore cursor
    }
};

        

        

    return (
        <div>
            <Hero2 name="Checkout" add1="Home . Pages" add2=". Checkout" />
            <div className="lg:mx-48 md:mx-40 my-32">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-72">
                    <div className="col-span-1 lg:w-[600px] md:w-[400px]">
                        <h2 className="text-2xl font-bold mb-8">Billing Details</h2>
                        <form onSubmit={handleOrderSubmit} className="text-sm font-normal py-12 bg-gray-100 rounded-sm px-8">
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="first_name"
                                    placeholder="First Name"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="last_name"
                                    placeholder="Last Name"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="phone"
                                    placeholder="Phone / Mobile Number"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="address"
                                    placeholder="Address"
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="city"
                                    placeholder="City"
                                    required
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="postal_code"
                                    placeholder="Postal Code"
                                    required
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control py-4 px-2 bg-transparent border-b-4 rounded-md w-full"
                                    id="country"
                                    placeholder="Country"
                                    required
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
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
                                <p>${Number(calculateTotal()) - Number(cart.length * 15)}</p>
                            </div>
                            <div className="my-4">
                                <hr className="border-gray-300 border-2" />
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                                <p>Delivery/Shipping and Taxes:</p>
                                <p>${cart.length * 15}</p>
                            </div>
                            <div className="my-4">
                                <hr className="border-gray-300 border-2" />
                            </div>
                            
                            <div className="flex justify-between font-bold text-lg pt-10">
                                <p>Totals:</p>
                                <p>${Number(calculateTotal()) + Number(cart.length * 15)}</p>
                            </div>
                            <div className="my-4">
                                <hr className="border-gray-300 border-2" />
                            </div>
                            <label className="flex items-center space-x-2 pt-10 pb-8">
                            </label>
                            {/* <div className="form-group">
                                <Link href={`/makepayment`}>
                                    <input
                                        type="text"
                                        className="form-control py-3 px-3 border border-gray-200 rounded-md text-white bg-green-500 w-full hover:bg-green-400 hover:cursor-pointer"
                                        value="Proceed to Payment"
                                    />
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
