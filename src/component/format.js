import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedForms, setSubmittedForms] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && value.trim().length < 3) {
      error = "Name must be at least 3 characters long.";
    }

    if (
      name === "email" &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ) {
      error = "Enter a valid email address.";
    }

    if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters long.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        isValid = false;
      }
    });

    if (isValid) {
      setSubmittedForms((prevForms) => [...prevForms, formData]);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} noValidate className="p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>

      <hr />

      <h3 className="mt-4">Submitted Forms</h3>
      {submittedForms.length === 0 ? (
        <p>No forms submitted yet.</p>
      ) : (
        <ul className="list-group">
          {submittedForms.map((data, index) => (
            <li key={index} className="list-group-item">
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
              <p>
                <strong>Password:</strong> {data.password}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ControlledForm;
