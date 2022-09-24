import React, { useState } from "react";
import "./Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt, FaRegHeart, FaCartPlus, FaSearch } from "react-icons/fa";
import { Container, Form, Nav, Navbar, Card, Button } from "react-bootstrap";
import { logoutReq } from "../store/auth/auth.actions";
const NavbarTop = () => {
  const auth = useSelector((state) => state.auth);
  const state = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
  const Navigate = useNavigate();
  const dispatch=useDispatch()
  const goHandleLogin = () => {

      Navigate("/login");

  };
  

  const goHandleLogout=()=>{
    dispatch(logoutReq());

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" as={Link} to="/">
          <img
            src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
            alt="brand-icon"
            width="220px"
            height="50px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex searchClass">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 main-search"
              aria-label="Search"
            />
            <div className="searchIcon">
              <FaSearch />
            </div>
          </Form>
          <div className="d-flex">
            <Nav.Link className="login_container" onMouseOver={handleShow}>
              <span style={{ padding: "5px", alignContent: "center" }}>
                <FaUserAlt />
              </span>
              {auth.isAuth ? "My Account" : "Sign In"}
            </Nav.Link>

            {show && (
              <div
                className="login_div"
                onMouseOver={handleShow}
                onMouseOut={handleClose}
              >
                <Card style={{ textAlign: "left" }}>
                  {auth.isAuth ? (
                    <Card>
                      <Card.Body>
                        <p>{auth.profile}</p>
                        <Button variant="warning" className="btn-cutomize" onClick={goHandleLogout}>
                          Logout
                        </Button>
                      </Card.Body>
                    </Card>
                  ) : (
                    <Card.Body>
                      <Card.Text>
                        <p className="text-left">Welcome to Gearbest</p>
                        <Button
                          variant="warning"
                          className="btn-cutomize"
                          onClick={goHandleLogin}
                        >
                          Sign In
                        </Button>
                      </Card.Text>
                      <p>Register on Gearbest: Earn 10 points</p>
                      <Button
                        variant="primary"
                        className="btn-cutomize"
                        onClick={goHandleLogin}
                      >
                        Register
                      </Button>
                    </Card.Body>
                  )}
                </Card>
              </div>
            )}

            <Nav.Link href="#action1">
              <span style={{ padding: "5px", alignContent: "center" }}>
                <FaRegHeart />
              </span>
              Favourites
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <span style={{ padding: "5px", alignContent: "center" }}>
                <FaCartPlus />
              </span>
              Cart
              <span className="total">{state.data.length>0 ? state.data.length:"0"}</span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
