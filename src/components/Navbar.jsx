import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Navbar() {
  const { numProducts } = useCart();
  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl font-bold text-blue-600">MiniShop</h1>
      </Link>
      <Link to="/cart">
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {numProducts}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
