import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || { email: "" };

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);

  return (
    <div className="successPage">
      <img src="icon-success.svg" alt="iconSuccess" />
      <p className="thanks">
        <strong>
          Thanks for
          <br /> subscribing!
        </strong>
      </p>
      <p>
        A confirmation email has been sent to <br /> <strong>{email}</strong>.{" "}
        Please open it and click <br /> the button inside to confirm your
        subscription.
      </p>
      <button className="dismissMessage" onClick={() => navigate("/")}>
        Dismiss Message
      </button>
    </div>
  );
}
