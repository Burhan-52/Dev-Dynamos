import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Assets/dashboard.png";
import Calendar from "../Assets/calendar.png";
import Planner from "../Assets/planner.png";
import Chat from "../Assets/bubble-chat.png";

const SideBar = () => {
  return (
    <div>
      <>
        <div className="sidebar-container">
          <Link style={{textDecoration: 'none',color:"black"}} to={"/"}>
            <div className="sidebar">
              <div>
                <img className="img" src={Dashboard} />
              </div>
              <div>Dashboard</div>
            </div>
          </Link>

          <Link style={{textDecoration: 'none',color:"black"}} to={"/calendar"}>
            <div className="sidebar">
              <div>
                <img className="img" src={Calendar} />
              </div>
              <div>Calendar</div>
            </div>
          </Link>

          <Link style={{textDecoration: 'none',color:"black"}} to={"/PrepHub"}>
            <div className="sidebar">
              <div>
                <img className="img" src={Planner} />
              </div>
              <div>PrepHub</div>
            </div>
          </Link>

          <Link style={{textDecoration: 'none',color:"black"}} to={"/chat"}>
            <div className="sidebar">
              <div>
                <img className="img" src={Chat} />
              </div>
              <div>Chat</div>
            </div>
          </Link>
        </div>
      </>
    </div>
  );
};

export default SideBar;
