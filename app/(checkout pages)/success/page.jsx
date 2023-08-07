"use client";

import { redirect, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import { CheckCircle2 } from "lucide-react";
import CartContext from "@/app/context/cart-context";

const sendMail = (url, sessionId) => {
  const res = fetch(`${url}/api/orders/sendmail`, {
    method: "POST",
    body: JSON.stringify({ sessionId: sessionId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);
};

const SuccessPage = () => {
  const [orderData, setOrderData] = useState({
    total: 0,
    quantity: 0,
  });
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const cart = useContext(CartContext);

  if (!sessionId) redirect("/");

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const orderDetails = async () => {
      try {
        const response = await fetch(
          `${url}/api/orders?filters[stripeId][$eq][0]=${sessionId}`
        );

        const responseJSON = await response.json();

        orderTotal(responseJSON.data[0].attributes.products);
      } catch (err) {
        console.log(err);
      }
    };
    cart.onClearCart(cart.initialState);
    orderDetails();
    sendMail(url, sessionId);
  }, [sessionId]);

  const orderTotal = (products) => {
    let total = 0;
    let quantity = 0;

    products.map((product) => {
      const productTotal = product.price * product.quantity;
      total += productTotal;
      quantity += product.quantity;
    });

    setOrderData({
      total: total,
      quantity: quantity,
    });
  };

  return (
    <div className="min-h-[90vh]">
      <div className="mx-auto mt-10 w-11/12 rounded-lg bg-green-300 p-6 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:max-w-screen-md md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="md:mx-auto md:w-4/5">
          <div className="relative">
            <CheckCircle2
              className="absolute -top-14 mx-auto block w-full"
              size="48"
              color="#86efac"
              stroke="#fff"
              fill="#86efac"
            />
            <h1 className="mt-2 text-xl font-bold text-teal-950 md:text-4xl">
              Thank you for your order!
            </h1>
            <p className="mt-2">
              The order confirmation has been sent to your email address.
            </p>
          </div>
          <div className="my-4 flex items-center justify-between md:px-4">
            <OrderSummaryItem
              title="Total amount"
              data={`£${orderData.total}`}
            />
            <OrderSummaryItem
              title="Items ordered"
              data={`x${orderData.quantity}`}
            />
            <OrderSummaryItem title="Est. Delivery" data="7 Days" />
          </div>
          <div className="mt-4 flex flex-col items-center justify-center md:flex-row md:gap-6 ">
            <Link
              href="/"
              className="w-full rounded-md border-2 border-green-500 bg-green-500 p-2 text-sm text-white md:my-4 md:text-lg"
            >
              Track order status
            </Link>
            <Link
              href="/"
              className="my-4 w-full rounded-md border-2 border-white bg-transparent p-2 text-sm text-white md:text-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
