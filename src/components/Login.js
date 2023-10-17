import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    profilePhoto: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // For file input, store the file directly
    if (type === "file") {
      const file = e.target.files[0];
      setFormData({ ...formData, [name]: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const history = useNavigate(); // Create a history object

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
    history("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary d-block mx-auto mb-3">
          Login
        </button>
      </form>
      <p className="text-center small">
        New user? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
