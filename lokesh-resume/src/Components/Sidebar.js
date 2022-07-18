import React from "react";
import { Link } from "react-router-dom";
import { OffcanvasBody, Offcanvas, Button, Col, Row } from "reactstrap";
import "./Css/Sidebar.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Navs } from "./Data/NavData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Sidebar() {
  return (
    <>
      <Offcanvas
        isOpen={true}
        backdrop={false}
        className="sidebar"
        style={{ width: "350px" }}
      >
        <div>
          <p className="userName">
            <span className="nameFirstLetter">L</span>okesh Sharma
          </p>
        </div>
        <hr className="sidebarHr" />
        <OffcanvasBody>
          {Navs.map((item) => {
            return (
              <>
                <div>
                  <Link to={`${item.title}`}>
                    <Button className="navButton">
                      {item.title}
                      <span className="navIcon">
                        <FontAwesomeIcon icon={item.icon} />
                      </span>
                    </Button>
                  </Link>
                </div>
              </>
            );
          })}
          <Row className="my-3">
            <Col>
              <a href="https://github.com/lokeshsixberries" className="navButton" style={{ color: "white" }}>
                <FaGithub style={{ height: "25px", width: "20px" }} />
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/lokesh-sharma-908857193/" className="navButton" style={{ color: "white" }}>
                <FaLinkedin style={{ height: "25px", width: "20px" }} />
              </a>
            </Col>
            <Col>
              <a href="https://www.instagram.com/_beinglokesh_/" className="navButton" style={{ color: "white" }}>
                <FaInstagram style={{ height: "25px", width: "20px" }} />
              </a>
            </Col>
            <Col>
              <a href="https://twitter.com/lokeshs97047988" className="navButton" style={{ color: "white" }}>
                <FaTwitter style={{ height: "25px", width: "20px" }} />
              </a>
            </Col>
          </Row>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}
