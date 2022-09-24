import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../store/cart/action";
const Cart = () => {
  const [cartdata, setCartData] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart.data);

  useEffect(()=>{
    setCartData(cart.data)
  },[cart])
  return (
    <Container
      style={{ textAlign: "left", marginTop: "20px", marginBottom: "20px" }}
    >
      {cartdata.map((item) => (
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <h6 style={{color:"#ff9800"}}>Price: ${item.price}</h6>
            <Card.Text>
            {item.description}
              content.
            </Card.Text>
            <Button variant="warning">Buy Now</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Cart;
