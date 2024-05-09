import React, { useState } from "react";
import "../style.css";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
    };
    dispatch(resetPassword(userData));
  };

  return (
    <div>
      <form className="sign-box">
        <h2>Quên mật khẩu</h2>
        <div>
          <input
            label="email"
            type="text"
            name="email"
            placeholder="Nhập email"
            onChange={handleChange}
            value={email}
            required
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
