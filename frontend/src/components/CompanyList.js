import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/companycard.css";
import { server } from "../config";

const CompanyList = () => {
  const [companyDataList, setCompanyDataList] = useState([]);
  const getcompanyList = async () => {
    const response = await fetch(`${server}/jobs`);
    const json = await response.json();
    setCompanyDataList(json);
    console.log(json);
  };

  useEffect(() => {
    getcompanyList();
  }, []);

  return (
    <div className="company-card">
      {companyDataList.map((data) => {
        return (
          <Card className="card">
            <Card.Body>
              <Card.Title>{data.companyname}</Card.Title>
              <Card.Text>
                <b>Job Roles:</b> {data.title}
                <br />
                <b>Registration Start:</b>
                {data.startDate}
                <br />
                <b>Registration End:</b> {data.endDate}
                <br />
              </Card.Text>
              <Button variant="primary" >Apply</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CompanyList;
