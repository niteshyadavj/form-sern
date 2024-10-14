import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DynamicForm = () => {
  const { formType } = useParams();

  
  const [formValues, setFormValues] = useState({
    name: localStorage.getItem("name") || "",
    countryCode: localStorage.getItem("countryCode") || "",
    phoneNumber: localStorage.getItem("phoneNumber") || "",
  });


  const [errors, setErrors] = useState({});

 
  const [submitted, setSubmitted] = useState(false);

  
  const countryCodes = ["+91", "+92"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {};

    if (!formValues.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z]+$/.test(formValues.name)) {
      errors.name = "Only alphabetic characters are allowed";
    }

    if (!formValues.countryCode) {
      errors.countryCode = "Country Code is required";
    } else if (!countryCodes.includes(formValues.countryCode)) {
      errors.countryCode = "Invalid country code";
    }

    if (!formValues.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d+$/.test(formValues.phoneNumber)) {
      errors.phoneNumber = "Phone number must be numeric";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("name", formValues.name);
      localStorage.setItem("countryCode", formValues.countryCode);
      localStorage.setItem("phoneNumber", formValues.phoneNumber);

      axios
        .post("http://localhost:3001/api/forms", { ...formValues, formType })
        .then(() => {
          setSubmitted(true);
          alert("Form submitted successfully");
        })
        .catch((err) => console.error("Error:", err));
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <h2 className="text-center mb-4">{`Form ${formType}`}</h2>
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-3">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      value={formValues.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <span style={{ color: "red" }}>{errors.name}</span>
                    )}
                  </div>
                </div>

                {/* Country Code Dropdown */}
                <div className="mb-3">
                  <label htmlFor="countryCode" className="form-label">
                    Country Code
                  </label>
                  <select
                    className="form-select"
                    name="countryCode"
                    value={formValues.countryCode}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a country code</option>
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  {errors.countryCode && (
                    <span style={{ color: "red" }}>{errors.countryCode}</span>
                  )}
                </div>

                {/* Phone Number Input */}
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formValues.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNumber && (
                    <span style={{ color: "red" }}>{errors.phoneNumber}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
              {submitted && (
                <p className="text-center">Form submitted successfully!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
