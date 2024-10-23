import React, { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Movies from "./Movies";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  const [isSignup, setIsSignup] = useState(true);

  const isAuthenticated = document.cookie.split("=")[1];

  return (
    <>
      <Navbar />
      {isAuthenticated ? (
        <Movies />
      ) : (
        <div className="auth-container">
          <div className="auth-toggle">
            <button
              onClick={() => setIsSignup(true)}
              className={isSignup ? "active" : ""}
            >
              Signup
            </button>
            <button
              onClick={() => setIsSignup(false)}
              className={!isSignup ? "active" : ""}
            >
              Login
            </button>
          </div>
          {isSignup ? <Signup /> : <Login />}
        </div>
      )}
    </>
  );
};

export default Home;
