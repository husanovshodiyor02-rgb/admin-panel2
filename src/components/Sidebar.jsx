import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r h-screen p-4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <Link to="/" className="hover:text-green-600">
        Info
      </Link>
      <Link to="/products" className="hover:text-green-600">
        Products
      </Link>
      <Link to="/add-product" className="hover:text-green-600">
        Add Product
      </Link>
    </div>
  );
};

export default Sidebar;
