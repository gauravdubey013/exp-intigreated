import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home.jsx";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgortpassword";
import ResetPassword from "./components/reset_password";
import TestFile from "./components/TestFile.jsx";

const App = () => {
  const [user, setLoginUser] = useState({});

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar
        setLoginUser={setLoginUser}
        handleOrderPopup={handleOrderPopup}
        logOut={
          user && user._id ? (
            <a
              href={"/login"}
              onClick={() => setLoginUser({})}
              className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              Logout
            </a>
          ) : (
            ""
          )
        }
      />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home handleOrderPopup={handleOrderPopup} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgortpassword" element={<ForgotPassword />} />
          <Route
            path="/reset_password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/test" element={<TestFile />} />
        </Routes>
      </Router>

      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
