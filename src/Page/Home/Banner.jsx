import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop"); // Điều hướng sang trang /shop khi click vào nút
  };

  return (
    <div className="container banner-container d-flex align-items-center">
      <div className="banner-content text-start col-md-5">
        <p className="text-black-50">NEW INSPIRATION 2020</p>
        <h1 className="fw-normal">20% OFF ON NEW SEASON</h1>
        <button className="btn btn-dark rounded-0" onClick={handleClick}>
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
