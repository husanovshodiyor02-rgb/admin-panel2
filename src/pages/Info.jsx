import { useEffect, useState } from "react";
import { getProducts } from "../api/productsData";

export default function Info() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const total = products.length;
  const totalPrice = products.reduce((sum, p) => sum + Number(p.price), 0);

  return (
    <div className="w-[90%] m-auto">
      <h1>Info</h1>
      <p>Jami tovarlar: {total}</p>
      <p>Tovarlar summasi: ${totalPrice}</p>
    </div>
  );
}
