const LS_KEY = "products_db";

export const loadProducts = () => {
  const data = localStorage.getItem(LS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProducts = (arr) => {
  localStorage.setItem(LS_KEY, JSON.stringify(arr));
};

export const getProducts = () => {
  return loadProducts();
};

export const addProduct = (product) => {
  const list = loadProducts();
  list.push({ id: Date.now(), ...product });
  saveProducts(list);
};

export const updateProduct = (id, newData) => {
  const list = loadProducts();
  const updated = list.map((p) =>
    p.id === Number(id) ? { ...p, ...newData } : p
  );
  saveProducts(updated);
};

export const deleteProduct = (id) => {
  const list = loadProducts();
  const filtered = list.filter((p) => p.id !== Number(id));
  saveProducts(filtered);
};

export const getOneProduct = (id) => {
  return loadProducts().find((p) => p.id === Number(id));
};
