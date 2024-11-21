import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ searchTerm, category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Lấy danh sách sản phẩm từ API
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    // Lọc sản phẩm dựa trên `searchTerm` và `category`
    let filtered = products;

    if (category !== "all") {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === category
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);

  return (
    <Row>
      {filteredProducts.map((product) => (
        <Col key={product._id.$oid} sm={6} md={4} lg={4} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
