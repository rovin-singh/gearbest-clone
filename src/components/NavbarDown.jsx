import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
const NavbarDown = () => {
  return (
    <div>
      <Container className="navbardown">
        <Row xs={2} lg={4}>
          <Col
            style={{
              backgroundColor: "black",
              color: "white",
              margin:"-7px",
              position:"relative",
              padding:"7px"

            }}
          >
           <span>Category</span>
          </Col>
          <Col><Link to="/superdeal"> SUPER DEALS</Link> </Col>
          <Col><Link to="/apponly">APP ONLY</Link></Col>
          <Col><Link to="/newarrivals">NEW ARRIVALS</Link></Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarDown;
