import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom"; // Import để lấy URL query
import "./Shop.css";
import ProductList from "../../components/ProductList";

const categories = [
  {
    name: "APPLE",
    subcategories: ["All"],
  },
  {
    name: "IPHONE & MAC",
    subcategories: ["iPhone", "iPad", "Macbook"],
  },
  {
    name: "WIRELESS",
    subcategories: ["Airpod", "Watch"],
  },
  {
    name: "OTHER",
    subcategories: ["Mouse", "Keyboard", "Other"],
  },
];

const Shop = () => {
  const location = useLocation(); // Lấy thông tin URL
  const queryParams = new URLSearchParams(location.search);
  const defaultCategory = queryParams.get("category") || "all"; // Lấy category từ URL hoặc mặc định là "all"

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(defaultCategory);

  useEffect(() => {
    setCategory(defaultCategory); // Cập nhật category khi URL query thay đổi
  }, [defaultCategory]);

  const handleCategoryClick = (subcat) => {
    setCategory(subcat.toLowerCase());
  };

  return (
    <Container className="shop-container">
      <div className="bg-body-tertiary row py-5 mb-3 justify-content-between align-items-center">
        <h1 className="text-center col-md-3 mx-3 py-3">SHOP</h1>
        <h6 className="text-body-tertiary col-md-3 mx-3 py-3">SHOP</h6>
      </div>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar text-start">
          <h4 className="sidebar-title">Categories</h4>
          <div className="category-list">
            {categories.map((cat) => (
              <div key={cat.name} className="category-group">
                <h5
                  className={`category-group-title py-2 ps-4 ${
                    cat.name === "APPLE" ? "bg-dark text-white" : ""
                  }`}
                >
                  {cat.name}
                </h5>
                <ul>
                  {cat.subcategories.map((subcat) => (
                    <li
                      key={subcat}
                      className={`category-item ps-4 ${
                        category === subcat.toLowerCase() ? "text-warning" : ""
                      }`}
                      onClick={() => handleCategoryClick(subcat)}
                    >
                      {subcat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <Row className="mb-4 justify-content-between">
            <Form className="search-form col-md-3">
              <Form.Control
                type="text"
                placeholder="Enter Search Here!"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>
            <select className="col-md-3 border-secondary-subtle rounded-1">
              <option selected>Default sorting</option>
              <option value="0">Sort by price: Low to High</option>
              <option value="1">Sort by price: High to Low</option>
            </select>
          </Row>

          {/* Product List */}
          <ProductList searchTerm={searchTerm} category={category} />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
