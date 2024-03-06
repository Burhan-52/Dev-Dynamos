import React from "react";
import SideBar from "./SideBar";
import CompanyList from "./CompanyList";

const Main = () => {
  return (
    <div>
      <SideBar />
      <div>
        <CompanyList />
      </div>
    </div>
  );
};

export default Main;
