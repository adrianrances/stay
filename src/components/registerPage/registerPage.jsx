import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsValid(true);
      navigate("/success", { state: { email } });
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="registerContainer">
      <div className="textContainer">
        <p className="recommendation">
          <strong>Stay updated!</strong>
        </p>
        <p className="numberOfUpdate">
          Join 60,000+ product managers receiving monthly <br />
          updates on:
        </p>
        <div className="listBox">
          <img src="icon-list.svg" alt="iconList" />
          <p className="textList">
            Product Discovery and building what matters
          </p>
        </div>
        <div className="listBox">
          <img src="icon-list.svg" alt="iconList" />
          <p className="textList">Measuring to ensure updates are a success</p>
        </div>
        <div className="listBox">
          <img src="icon-list.svg" alt="iconList" />
          <p className="textList">And much more</p>
        </div>
        <div className="emailInfo">
          <label htmlFor="email">
            <strong>Email address</strong>
          </label>
          <p className={`errorMessage ${isValid ? "hidden" : ""}`}>
            <strong>valid email required</strong>
          </p>
        </div>
        <input
          className={`emailInput ${isValid ? "" : "invalid"}`}
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button className="emailButton" onClick={handleSubmit}>
          Subscribe to monthly newsletter
        </button>
      </div>
      <div>
        <img
          className="ilustration"
          src="/illustration-sign-up-desktop.svg"
          alt="Illustration"
        />
      </div>
    </div>
  );
}
