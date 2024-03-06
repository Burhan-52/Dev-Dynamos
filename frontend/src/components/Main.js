import React from "react";
import SideBar from "./SideBar";
import CompanyList from "./CompanyList";

const Main = () => {
  return (
    <div className="main-container-dashboard">
      <div>
        <SideBar />
      </div>
      <div>
        <CompanyList />
      </div>
    </div>
  );
};

export default Main;
