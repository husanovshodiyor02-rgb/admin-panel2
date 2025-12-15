import { getProducts } from "../api/productsData";

const Info = () => {
  const products = getProducts();
  const totalCount = products.length;
  const totalSum = products.reduce((sum, p) => sum + Number(p.price), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h3>Total Products</h3>
        <p className="text-2xl font-bold">{totalCount}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3>Total Sum</h3>
        <p className="text-2xl font-bold">${totalSum.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Info;
