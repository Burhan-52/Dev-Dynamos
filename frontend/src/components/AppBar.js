import React from "react";
import "../style/AppBar.css";
import Auth from "./Auth";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="appbar-container">
      <div className="">CampusPro Planner</div>
      <div>
        <span>
        <Link to={"/"}> <button>Login</button></Link>
        </span>
      </div>
    </div>
  );
};

export default AppBar;
