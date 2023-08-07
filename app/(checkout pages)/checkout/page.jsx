import CartItems from "@/app/components/Checkout/Cart/CartItems";
import OrderSummary from "@/app/components/Checkout/Cart/OrderSummary";
import Discount from "@/app/components/Checkout/Cart/Discount";

const CartPage = () => {
  return (
    <div className="min-h-[80vh]">
      <div>
        <h1 className="mt-8 text-2xl font-medium capitalize md:text-4xl">
          Your Cart
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        <CartItems />
        <Discount />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
