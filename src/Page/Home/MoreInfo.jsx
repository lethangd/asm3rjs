import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./MoreInfo.css";

const MoreInfo = () => {
  return (
    <Container className="more-info-container">
      {/* Phần thông tin dịch vụ */}
      <Row className="text-center py-4">
        <Col md={4} className="service-info">
          <h6>FREE SHIPPING</h6>
          <p>Free shipping worldwide</p>
        </Col>
        <Col md={4} className="service-info">
          <h6>24 X 7 SERVICE</h6>
          <p>Free shipping worldwide</p>
        </Col>
        <Col md={4} className="service-info">
          <h6>FESTIVAL OFFER</h6>
          <p>Free shipping worldwide</p>
        </Col>
      </Row>

      {/* Phần đăng ký email */}
      <Row className="text-start py-4 subscribe-section">
        <Col md={6} className="ms-3">
          <h5>LET'S BE FRIENDS!</h5>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </Col>
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              className="p-3"
            />
            <Button variant="dark" type="submit">
              Subscribe
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MoreInfo;
