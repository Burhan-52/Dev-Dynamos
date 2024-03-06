import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/companycard.css";

const CompanyList = () => {
  return (
    <div className="company-card">
      <Card className="card">
        <Card.Body>
          <Card.Title>Accentrure</Card.Title>
          <Card.Text>
            <b>Job Roles:</b> Java Developer<br />
            <b>Registration Start:</b> 28/01/2024<br />
            <b>Registration End:</b> 06-02-2024<br />
          </Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>Accentrure</Card.Title>
          <Card.Text>
            <b>Job Roles:</b> Java Developer<br />
            <b>Registration Start:</b> 28/01/2024<br />
            <b>Registration End:</b> 06-02-2024<br />
          </Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>Accentrure</Card.Title>
          <Card.Text>
            <b>Job Roles:</b> Java Developer<br />
            <b>Registration Start:</b> 28/01/2024<br />
            <b>Registration End:</b> 06-02-2024<br />
          </Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CompanyList;
