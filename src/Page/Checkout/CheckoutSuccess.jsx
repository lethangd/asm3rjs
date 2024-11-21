import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CheckoutSuccess() {
  const navigate = useNavigate();
  return (
    <div className="container my-4 ">
      <div className="row py-5 align-items-center bg-body-tertiary">
        <div className="col">
          <h1 className="display-6 mb-0">CHECKOUT</h1>
        </div>
        <div className="col text-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-end mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-dark text-decoration-none">
                  HOME
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/cart" className="text-dark text-decoration-none">
                  CART
                </Link>
              </li>
              <li
                className="breadcrumb-item active text-muted"
                aria-current="page"
              >
                CHECKOUT
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="green"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Checkout Successful!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>
          <div className="p-3 mb-5 d-flex justify-content-between mt-2">
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
              onClick={() => navigate("/")}
              className="btn btn-outline-dark rounded-0"
            >
              Go to home
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
      </div>
    </div>
  );
}
