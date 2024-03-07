import React, { useState } from "react";
import { server } from "../config";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [studentSign, setStudentSign] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    Registration: "",
  });

  const handleSignup = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: studentSign.firstName,
        lastname: studentSign.lastName,
        prn: studentSign.Registration,
        email: studentSign.email,
        password: studentSign.password,
        confirmpassword: studentSign.confirmPassword,
      }),
    };

    const response = await fetch(`${server}/studentRegister`, requestOptions);
    const data = await response.json();
    console.log(data);
    if (data) {
      navigate("/dashboard")
    }
    else {
      console.log("err is there")
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <div className="container">
          <h1>Sign Up</h1>
          <label htmlFor="firstname">Firstname:</label>
          <input
            type="text"
            id="firstname"
            value={studentSign.firstName}
            onChange={(e) =>
              setStudentSign({ ...studentSign, firstName: e.target.value })
            }
            required
          />

          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            id="lastname"
            value={studentSign.lastName}
            onChange={(e) =>
              setStudentSign({ ...studentSign, lastName: e.target.value })
            }
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={studentSign.email}
            onChange={(e) =>
              setStudentSign({ ...studentSign, email: e.target.value })
            }
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={studentSign.password}
            onChange={(e) =>
              setStudentSign({ ...studentSign, password: e.target.value })
            }
            required
          />

          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmpassword"
            value={studentSign.confirmPassword}
            onChange={(e) =>
              setStudentSign({
                ...studentSign,
                confirmPassword: e.target.value,
              })
            }
            required
          />

          <label htmlFor="registrationno">Registration No:</label>
          <input
            type="text"
            id="registrationno"
            value={studentSign.Registration}
            onChange={(e) =>
              setStudentSign({ ...studentSign, Registration: e.target.value })
            }
            required
          />

          <div>
            Already have a account?{" "}
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          </div>

          <button type="submit">Sign up</button>
        </div>
      </form>
    </>
  );
};

export default Signup;
