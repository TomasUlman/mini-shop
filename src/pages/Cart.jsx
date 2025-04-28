import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cart, totalPrice, RemoveFromCart, ChangeQuantity } = useCart();

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">🛒 Váš košík</h1>

        {cart.length === 0 ? (
          <div className="text-gray-600">
            <p>Košík je prázdný.</p>
            <Link
              to="/"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              ← Zpět do e-shopu
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded shadow"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    Cena: {item.price} Kč × {item.quantity}
                  </p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      ChangeQuantity(item.id, Number(e.target.value))
                    }
                    className="w-24 border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="text-right">
                  <p className="font-bold">{item.price * item.quantity} Kč</p>
                  <button
                    className="text-red-500 text-sm hover:underline"
                    onClick={() => RemoveFromCart(item)}
                  >
                    Odebrat
                  </button>
                </div>
              </div>
            ))}

            {/* Celková cena */}
            <div className="text-right mt-6">
              <p className="text-lg font-bold">Celkem: {totalPrice} Kč</p>
            </div>

            {/* Tlačítka */}
            <div className="flex justify-between items-center mt-4">
              <Link to="/" className="text-blue-600 hover:underline text-sm">
                ← Zpět do e-shopu
              </Link>

              <Link
                to="/checkout"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Pokračovat k objednávce
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
