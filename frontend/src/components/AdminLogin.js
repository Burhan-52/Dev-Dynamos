import React, { useState } from "react";
import "../style/login.css";
import { server } from "../config";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const [studentLogin, setStudentLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: studentLogin.email,
          password: studentLogin.password,
        }),
      };

      const response = await fetch(`${server}/loginadmin`, requestOptions);
      const data = await response.json();
      console.log(data)
      if(data){
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div class="container">
          <h1>Admin Login</h1>
          <div>
            <label for="email">Email:</label>
            <input
              type="text"
              id="email"
              value={studentLogin.email}
              onChange={(e) =>
                setStudentLogin({ ...studentLogin, email: e.target.value })
              }
              required
            />
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              value={studentLogin.password}
              onChange={(e) =>
                setStudentLogin({ ...studentLogin, password: e.target.value })
              }
              required
            />
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminLogin;
