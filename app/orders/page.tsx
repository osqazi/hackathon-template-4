"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";
import Hero2 from "../components/Hero2";

interface ordersType {
  username: string;
  orderId: string;
  orderDate: string;
  orderStatus: string;
  paymentStatus: string;
  totalAmount: number;
  products: productType[];
}

interface productType {
  _key: string;
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productQuantity: number;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<ordersType[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<ordersType | null>(null);
  const { user, isSignedIn } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSignedIn || !user) return;

    const userId = user?.emailAddresses[0]?.emailAddress;
    if (!userId) return;

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "order"] {
          _id,
          username,
          orderId,
          orderDate,
          orderStatus,
          paymentStatus,
          totalAmount,
          products[] {
            _key,
            productId,
            productName,
            productImage,
            productPrice,
            productQuantity
          }
        }`;

        const orders = await client.fetch(query);
        const filteredOrders = orders.filter(
          (order: ordersType) => order.username === userId
        );
        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, isSignedIn]); // Added dependencies

  const handlePayment = (totalAmount: number, orderId: string) => {
    window.location.href = `/makepayment?amount=${totalAmount}&orderId=${orderId}`;
  }


  
  return (
    <div>
      <Hero2 name="Orders" add1="Home .Pages" add2=". Orders" />

      <div className="container mx-auto my-10 p-6">
        <h2 className="text-2xl font-bold mb-6 w-full text-center">Your Orders</h2>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Orders List */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Order List</h3>
              <ul>
                {orders.map((order) => (
                  <li
                    key={order.orderId}
                    className={`mt-4 p-4 space-y-2 border-b cursor-pointer bg-gray-200 ${
                      selectedOrder?.orderId === order.orderId ? "bg-gray-300" : ""
                    }`}
                    onClick={() => setSelectedOrder(order)}
                  >
                    <div className="flex justify-between">
                    <p>
                      <strong>Order ID:</strong> {order.orderId}
                    </p>
                    <p>
                      <strong>Order Placed on:</strong>{" "}
                      {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                    </div>
                    <div className="flex justify-between">
                    <p>
                      <strong>Total Order Amount:</strong> ${order.totalAmount}
                    </p>
                    <p>
                      <strong>Order Status:</strong> {order.orderStatus}
                    </p>
                    </div>
                    <div className="flex justify-between items-center">
                    <p>
                      <strong>Payment Status:</strong> {order.paymentStatus}
                    </p>
                    <button
                    className={`bg-pink-600 text-white font-bold p-1 rounded-md ${order.paymentStatus == 'Paid' ? "hidden":"block"}`}
                    onClick={()=>handlePayment(order.totalAmount, order.orderId)}
                    > Make Payment</button>
                    </div>


                  </li>
                ))}
              </ul>
            </div>

            {/* Order Details */}
            <div className="bg-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Order Details</h3>
              {selectedOrder ? (
                <>
                  <h4 className="text-md font-semibold">Products</h4>
                  <ul>
                    {selectedOrder.products.map((product) => (
                      <li
                        key={product._key}
                        className="my-4 space-y-4 p-4 border-b flex justify-between items-center bg-gray-100"
                      >
                        <div>
                          <p>
                            <strong>{product.productName}</strong>
                          </p>
                          <p>Price: ${product.productPrice}</p>
                          <p>Quantity: {product.productQuantity}</p>
                        </div>
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>Select an order to view details.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
