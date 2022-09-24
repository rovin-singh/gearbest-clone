import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button, Tabs, Tab } from "react-bootstrap";
import "../App.css";
import { signup } from "../store/auth/auth.actions";
import {useNavigate} from "react-router-dom"
import { loginReq } from "../store/auth/auth.actions"
const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });
  const Navigate=useNavigate()
  const [users, setUsers] = useState({
      email:"",
      password:""
  });
  const dispatch = useDispatch();
  const Register = (e) => {
    e.preventDefault();
    dispatch(signup(formData));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleChange=(e)=>{
      const {name,value}=e.target;
      setUsers({
          ...users,[name]:value
      })
  }
  const handledSubmit = (e) => {
      e.preventDefault();
        dispatch(loginReq(users));
        Navigate("/")
   }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md={5} style={{ border: "2px solid whitesmoke", margin: "20px" }}>
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
            style={{ fontSize: "15px", fontWeight: "bold", border: "none" }}
          >
            <Tab eventKey="home" title="Sign In">
              <Form onSubmit={handledSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Keep me signed in " />
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Sign In
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="profile" title="Register">
              <Form onSubmit={Register}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={handleOnChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Create Password"
                    onChange={handleOnChange}
                  />
                  <br />
                  <Form.Control
                    type="password"
                    placeholder="Re-Type Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to Gearbest Terms and Conditions and Privacy Policies."
                  />
                </Form.Group>
                <small style={{ color: "red" }}>
                  Tip: To maximize online security, please do not reuse
                  passwords or choose easy to guess ones on Gearbest.
                </small>
                <Button
                  variant="warning"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Register
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
