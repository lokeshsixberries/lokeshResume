import React from "react";
import { Route, Routes } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Sidebar from "./Components/Sidebar";
import NavRouter from "./Components/NavRouter";
function Main() {
  return (
    <>
      <div className="container">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <NavRouter />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Main;
