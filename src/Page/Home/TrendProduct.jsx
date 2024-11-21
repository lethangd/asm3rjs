import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TrendProducts.css";
import { useDispatch } from "react-redux";
import { showPopup } from "../../Redux/features/popupSlice";
import ProductPopup from "../../components/ProductPopup";

const TrendProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu sản phẩm
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => {
        // Giới hạn danh sách sản phẩm chỉ lấy 8 phần tử đầu tiên
        const limitedProducts = data.slice(0, 8);
        setProducts(limitedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Hàm định dạng giá tiền
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const handleImageClick = (product) => {
    dispatch(showPopup(product));
  };
  return (
    <Container className="trend-products-container">
      <h6 className="text-center text-muted">MADE THE HARD WAY</h6>
      <h2 className="text-center mb-5">TOP TRENDING PRODUCTS</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card h-100">
              <Card.Img
                variant="top"
                src={product.img1}
                alt={product.name}
                className="product-image"
                onClick={() => handleImageClick(product)}
              />
              <Card.Body>
                <Card.Title className="product-name">{product.name}</Card.Title>
                <Card.Text className="product-price">
                  {formatPrice(product.price)} VND
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ProductPopup />
    </Container>
  );
};

export default TrendProducts;
