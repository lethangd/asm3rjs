"use client";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCart, removeFromCart } from "../../Redux/features/cartSlice";

export default function Component() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateCart({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <div class="bg-body-tertiary row py-5 mb-3 justify-content-between align-items-center">
        <h1 class="text-center col-md-3 mx-3 py-3">CART</h1>
        <h6 class="text-body-tertiary col-md-3 mx-3 py-3">CART</h6>
      </div>

      <h2 className="h4 fw-semibold mb-5 text-start">SHOPPING CART</h2>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="bg-light p-3 mb-4 text-muted">
            <div className="row g-3 text-muted">
              <div className="col-1 fw-bold">IMAGE</div>
              <div className="col-3 fw-bold">PRODUCT</div>
              <div className="col-2 fw-bold">PRICE</div>
              <div className="col-2 fw-bold">QUANTITY</div>
              <div className="col-2 fw-bold">TOTAL</div>
              <div className="col-2 fw-bold">REMOVE</div>
            </div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="row g-3 align-items-center border-bottom py-3"
            >
              <div className="col-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
              </div>
              <div className="col-3 d-flex align-items-center">
                <span className="fw-medium">{item.name}</span>
              </div>
              <div className="col-2">{item.price.toLocaleString()} VND</div>
              <div className="col-2 d-flex align-items-center gap-2">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  className="btn bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-left-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </button>
                <span className="text-center" style={{ width: "30px" }}>
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  className="btn bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </button>
              </div>
              <div className="col-2">
                {(item.price * item.quantity).toLocaleString()} VND
              </div>
              <div className="col-2">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="btn bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="bg-light p-4 rounded-3">
            <h3 className="text-start fw-semibold mb-4">CART TOTAL</h3>
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span className="text-muted fw-semibold">SUBTOTAL</span>
                <span className="text-body-tertiary">
                  {subtotal.toLocaleString()} VND
                </span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-semibold">
                <span className="fw-semibold">TOTAL</span>
                <span>{subtotal.toLocaleString()} VND</span>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your coupon"
                className="form-control mb-3"
              />
              <button className="btn btn-dark w-100">Apply coupon</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-8 p-3 bg-body-tertiary mb-5 d-flex justify-content-between mt-2">
        <button
          onClick={() => navigate("/shop")}
          className="btn bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left me-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          Continue shopping
        </button>
        <button
          onClick={() => navigate("/checkout")}
          className="btn btn-outline-dark rounded-0"
        >
          Proceed to checkout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right ms-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
