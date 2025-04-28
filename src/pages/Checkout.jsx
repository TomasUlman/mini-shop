import Navbar from "../components/Navbar";
import CheckoutForm from "../components/CheckoutForm";
import OrderConfirm from "../components/OrderConfirm";
import { useCart } from "../contexts/CartContext";

export default function Checkout() {
  const { orderCompleted } = useCart();
  return (
    <div>
      <Navbar />
      {orderCompleted ? <OrderConfirm /> : <CheckoutForm />}
    </div>
  );
}
