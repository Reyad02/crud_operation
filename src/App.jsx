import { useEffect, useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalMode, setModalMode] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const productsFiltered = (e) => {
    if (e.target.value === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const openUpdateModal = (product) => {
    setModalMode("Update");
    setSelectedProduct(product);
    setProductTitle(product.title);
    setProductDescription(product.description);
    setProductPrice(product.price);
    setProductImage(product.thumbnail);
    setIsModalOpen(true);
  };

  const updateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id
        ? { ...product, title: productTitle, description: productDescription, price: productPrice, thumbnail: productImage }
        : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if (modalMode === "Update") {
      updateProduct();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-full"
        onChange={productsFiltered}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={product.thumbnail} alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.title}
                <div className="badge badge-secondary">${product.price}</div>
              </h2>
              <p>{product.description}</p>
              <div className="card-actions justify-center">
                <Button text="Delete" onClick={() => deleteProduct(product.id)} />
                <Button text="Update" onClick={() => openUpdateModal(product)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          title={modalMode === "Update" ? "Update Product" : "Add New Product"}
          productTitle={productTitle}
          setProductTitle={setProductTitle}
          productDescription={productDescription}
          setProductDescription={setProductDescription}
          productPrice={productPrice}
          setProductPrice={setProductPrice}
          productImage={productImage}
          setProductImage={setProductImage}
          handleSubmit={handleSubmit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductList;
