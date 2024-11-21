import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidePopup } from "../Redux/features/popupSlice";
import "./ProductPopup.css";
import { useNavigate } from "react-router-dom";

const ProductPopup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail/${product._id.$oid}`);
  };
  const { showPopup, product } = useSelector((state) => state.popup);

  if (!showPopup || !product) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={() => dispatch(hidePopup())}>
          &times;
        </button>
        <div className="popup-body">
          <img
            src={product.img1}
            alt={product.name}
            className="popup-image col-md-6"
          />
          <div className="popup-details col-md-6 text-start">
            <h4>{product.name}</h4>
            <p className="pric text-body-secondary">
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              VND
            </p>
            <p
              className="text-body-secondary fw-normal"
              dangerouslySetInnerHTML={{
                __html: product.long_desc.replace(/\n/g, `<p class="mb-0" />`),
              }}
            />
            <button
              className="btn btn-dark d-flex gap-2 px-4 align-items-center justify-content-center rounded-0"
              onClick={handleDetailClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
              </svg>
              <p className="m-0">View Detail</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
