import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BrowseCategory.css";

const categories = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/img/product_1.png`,
    alt: "iPhone",
    name: "iPhone",
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/img/product_2.png`,
    alt: "Mac",
    name: "Macbook",
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/img/product_3.png`,
    alt: "iPad",
    name: "iPad",
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/img/product_4.png`,
    alt: "Watch",
    name: "Watch",
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/img/product_5.png`,
    alt: "AirPods",
    name: "AirPod",
  },
];

const BrowseCategory = () => {
  const navigate = useNavigate();

  // Điều hướng đến trang Shop với category tương ứng
  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category.toLowerCase()}`); // Truyền category qua URL query
  };

  return (
    <Container className="browse-category-container">
      <h6 className="text-center text-muted">CAREFULLY CREATED COLLECTIONS</h6>
      <h2 className="text-center mb-5">BROWSE OUR CATEGORIES</h2>

      <Row className="mb-4">
        {categories.slice(0, 2).map((category) => (
          <Col key={category.id} sm={6} md={6} className="mb-4">
            <Card
              className="category-card"
              onClick={() => handleCategoryClick(category.name)}
            >
              <Card.Img
                variant="top"
                src={category.image}
                alt={category.alt}
                className="category-image"
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        {categories.slice(2).map((category) => (
          <Col key={category.id} sm={6} md={4} className="mb-4">
            <Card
              className="category-card"
              onClick={() => handleCategoryClick(category.name)}
            >
              <Card.Img
                variant="top"
                src={category.image}
                alt={category.alt}
                className="category-image"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrowseCategory;
