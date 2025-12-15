import { getProducts, deleteProduct } from "../api/productsData";
import { Link } from "react-router-dom";

const Products = () => {
  const products = getProducts();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteProduct(id);
      window.location.reload();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow relative">
            <img
              src={p.img}
              alt={p.title}
              className="h-40 w-full object-contain mb-2"
            />
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-green-600 font-bold">${p.price}</p>

            <Link
              to={`/edit-product/${p.id}`}
              className="absolute top-2 right-18 bg-yellow-400 px-2 py-1 rounded text-sm"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(p.id)}
              className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-sm text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
