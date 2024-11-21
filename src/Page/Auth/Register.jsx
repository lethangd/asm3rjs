import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Redux/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const userArr = useSelector((state) => state.user.userArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, phone } = formData;

    if (!name || !email || !password || !phone) {
      setError("Please fill in all fields.");
      return;
    }
    if (userArr.some((user) => user.email === email)) {
      setError("Email is already registered.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // Thêm người dùng mới
    dispatch(addUser({ name, email, password, phone }));
    navigate("/login");
  };

  return (
    <div className="banner-bg row justify-content-center align-items-center height-max-content py-5">
      <div className="col-md-5 card shadow p-5">
        <h2 className="text-center text-body-secondary mb-5 fw-normal">
          Sign Up
        </h2>
        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control p-4 rounded-0"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            className="form-control p-4 rounded-0"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            className="form-control p-4 rounded-0"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control p-4 rounded-0"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {error && <p className="text-danger mt-3">{error}</p>}
          <button
            type="submit"
            className="btn btn-dark rounded-0 mt-5 w-100 py-4"
          >
            SIGN UP
          </button>
        </form>
        <p className="text-center mt-4">
          Login?{" "}
          <Link to="/login" className="text-decoration-none">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
