import { useState, useEffect } from "react";
import { getOneProduct, updateProduct } from "../api/productsData";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getOneProduct(id) || {};

  const [title, setTitle] = useState(product.title || "");
  const [img, setImg] = useState(product.img || "");

  useEffect(() => {
    if (product.title) setTitle(product.title);
    if (product.img) setImg(product.img);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, { title, img });
    navigate("/products");
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          className="bg-yellow-500 text-white px-3 py-1 rounded mt-2"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
