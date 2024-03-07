import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
  return (
    <div>
      <div>
        <Link to={"/admin/login"}><button>Admin Login</button></Link>
      </div>
      <div>
        <Link to={"/signup"}><button>Student Login</button></Link>
      </div>
    </div>
  );
};

export default Auth;
