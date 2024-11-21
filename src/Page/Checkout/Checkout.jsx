import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeAllCart } from "../../Redux/features/cartSlice";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeAllCart());
    navigate("/checkoutsuccess");
  };

  return (
    <div className="container my-4">
      <div className="row py-5 align-items-center bg-body-tertiary mb-3">
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

      <div className="row g-5">
        <div className="col-lg-7 text-start">
          <h2 className="h5 mb-4 text-uppercase">BILLING DETAILS</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label text-muted small text-uppercase">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0 border border-secondary-subtle fs-6"
                placeholder="Enter Your Full Name Here!"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-muted small text-uppercase">
                Email:
              </label>
              <input
                type="email"
                className="form-control form-control-lg rounded-0 border border-secondary-subtle fs-6"
                placeholder="Enter Your Email Here!"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-muted small text-uppercase">
                Phone Number:
              </label>
              <input
                type="tel"
                className="form-control form-control-lg rounded-0 border border-secondary-subtle fs-6"
                placeholder="Enter Your Phone Number Here!"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-muted small text-uppercase">
                Address:
              </label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0 border border-secondary-subtle fs-6"
                placeholder="Enter Your Address Here!"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark btn-lg px-5 rounded-0 text-white-50 fst-italic"
            >
              Place order
            </button>
          </form>
        </div>

        <div className="col-lg-5">
          <div className="bg-light p-4">
            <h2 className="h5 mb-4 text-uppercase text-start">YOUR ORDER</h2>
            <div className="">
              {cartItems.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="d-flex justify-content-between mb-2 border-bottom pb-3"
                  >
                    <span className="text-body-secondary fw-semibold">
                      {item.name}
                    </span>
                    <span className="text-body-secondary">
                      {item.price.toLocaleString()} VND x {item.quantity}
                    </span>
                  </div>
                </>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span className="h6 mb-0 text-uppercase">TOTAL</span>
              <span className="h6 mb-0">{totalPrice.toLocaleString()} VND</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
