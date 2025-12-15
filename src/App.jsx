import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Info from "./pages/Info";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <div className="p-6 bg-gray-100 flex-1">
            <Routes>
              <Route path="/" element={<Info />} />
              <Route path="/products" element={<Products />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
  
  );
}

export default App;
