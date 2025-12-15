import { useState } from "react";
import { addProduct } from "../api/productsData";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ title, price, img });
    navigate("/products");
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <input
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-3 py-1 rounded mt-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
