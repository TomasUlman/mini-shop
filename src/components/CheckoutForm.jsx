import { useState } from "react";
import { useCart } from "../contexts/CartContext";

export default function CheckoutForm() {
  const { cart, totalPrice, CompleteOrder } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [delivery, setDelivery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !adress) return;

    const customer = {
      name,
      email,
      adress,
      delivery,
    };

    CompleteOrder(customer);
  }

  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          📝 Údaje pro doručení
        </h1>

        {/* FORMULÁŘ */}
        <form
          className="bg-white shadow rounded p-6 mb-8 space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-1 font-medium">Jméno a příjmení</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Např. Jan Novák"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="jan.novak@email.cz"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Adresa</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ulice, město, PSČ"
              required
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Způsob doručení</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
            >
              <option>Česká pošta</option>
              <option>Zásilkovna</option>
              <option>Osobní odběr</option>
            </select>
          </div>
          {/* REKAPITULACE */}
          <div className="bg-white shadow rounded p-6 space-y-3">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              🛒 Rekapitulace objednávky
            </h2>
            <ul className="text-sm text-gray-700">
              {cart.map((product) => (
                <li key={product.id}>
                  {product.name} x {product.quantity} ={" "}
                  {product.price * product.quantity} Kč
                </li>
              ))}
            </ul>

            <p className="font-bold text-right mt-4">Celkem: {totalPrice} Kč</p>

            <div className="text-right mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Objednat
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
