import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Káva",
    price: 89,
    image: "/coffee.jpg",
  },
  {
    id: 2,
    name: "Čokoláda",
    price: 49,
    image: "/chocolate.jpg",
  },
  {
    id: 3,
    name: "Čaj",
    price: 69,
    image: "/tea.jpg",
  },
];

export default function Products() {
  return (
    <div>
      <Navbar />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
