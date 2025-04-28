import { Link } from "react-router-dom";

function OrderConfirm() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-600">
        ✅ Objednávka dokončena
      </h1>

      <div className="bg-white shadow rounded p-6 space-y-4 text-center">
        <p className="text-lg text-gray-700">Děkujeme za vaši objednávku! 🎉</p>
        <p className="text-gray-500">
          Brzy vám ji doručíme a pošleme potvrzení na e-mail.
        </p>

        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-gray-400">
            Číslo objednávky: <strong>#123456</strong>
          </p>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
}

export default OrderConfirm;
