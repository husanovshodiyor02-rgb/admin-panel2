import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productsData";
import { Link } from "react-router-dom";

export default function Products() {
  const [list, setList] = useState([]);

  const refresh = () => setList(getProducts());

  useEffect(() => {
    refresh();
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
    refresh();
  };

  return (
    <div>
      <h1>Products</h1>

      <Link to="/add" className="btn">
        Add Product
      </Link>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>IMG</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {list.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>
                <img src={p.img} width="60" />
              </td>
              <td>${p.price}</td>
              <td>
                <Link to={`/edit/${p.id}`} className="btn">
                  Edit
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(p.id)} className="btn red">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
