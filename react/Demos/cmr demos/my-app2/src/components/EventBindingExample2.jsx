import React, { useState } from "react";
import "../css/EventBindinExample2.css";

const EventBindinExample2 = () => {
  const productsList = [
    { id: 1, name: "Laptop", price: "$1000", category: "Electronics" },
    { id: 2, name: "Smartphone", price: "$800", category: "Electronics" },
    { id: 3, name: "Headphones", price: "$150", category: "Accessories" },
    { id: 4, name: "Keyboard", price: "$50", category: "Accessories" },
    { id: 5, name: "Mouse", price: "$30", category: "Accessories" },
    { id: 6, name: "Monitor", price: "$300", category: "Electronics" },
    { id: 7, name: "Tablet", price: "$500", category: "Electronics" },
    { id: 8, name: "Smartwatch", price: "$200", category: "Wearables" },
    { id: 9, name: "Speakers", price: "$120", category: "Accessories" },
    { id: 10, name: "Gaming Console", price: "$400", category: "Gaming" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsList);

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      searchProducts();
    }
  };
  const searchProducts = () => {
    const results = productsList.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <>
      <div className="product-container">
        <h2> Product Search</h2>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          className="search-input"
        />
        <span className="search-icon" onClick={searchProducts}>
          🔍
        </span>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-results">
                No Products Found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default EventBindinExample2;
