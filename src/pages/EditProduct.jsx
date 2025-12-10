import { useEffect, useState } from "react";
import { getOneProduct, updateProduct } from "../api/productsData";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const nav = useNavigate();

  const [form, setForm] = useState({
    title: "",
    img: "",
    price: "",
  });

  useEffect(() => {
    const item = getOneProduct(id);
    setForm(item);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, form);
    nav("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Product</h1>

      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        value={form.img}
        onChange={(e) => setForm({ ...form, img: e.target.value })}
      />

      <input
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button type="submit">Save</button>
    </form>
  );
}
