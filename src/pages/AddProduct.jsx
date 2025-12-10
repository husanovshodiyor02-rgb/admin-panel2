import { useState } from "react";
import { addProduct } from "../api/productsData";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    title: "",
    img: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(form);
    nav("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Image URL"
        value={form.img}
        onChange={(e) => setForm({ ...form, img: e.target.value })}
      />

      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button type="submit">Add</button>
    </form>
  );
}
