import { useState } from "react";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { AddToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleAdd() {
    AddToCart(product, Number(quantity));
  }

  return (
    <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.price} Kč</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full mb-3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleAdd}
      >
        Přidat do košíku
      </button>
    </div>
  );
}
