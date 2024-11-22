import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import RegisterPage from "./components/registerPage/registerPage";
import SuccessPage from "./components/successPage/successPage";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
