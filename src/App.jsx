import { Routes, Route, Link } from "react-router-dom";
import Info from "./pages/Info";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

export default function App() {
  return (
    <div>
      <nav className="flex gap-7 w-[90%] m-auto py-5 text-blue-600">
        <Link to="/">Info</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}
