import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Pages.module.css";
import { useParams } from "react-router-dom";
import { getproduct } from "../API/Api";
import { Container, Row, Col, Button } from "react-bootstrap";
import Recomended from "./Recommed";
import { useDispatch } from "react-redux";
import {addingInCart} from "../store/cart/action"
const Products = () => {
  const [product, setProduct] = useState({});
  const dispatch=useDispatch()
  const param = useParams();
  const getData = () => {
    getproduct(param.product_id)
      .then((res) => setProduct(res.data))
      .catch((err) => {});
  };

  useEffect(() => {
    getData();
  }, []);
  const addTocart=(item)=>{
    dispatch(addingInCart(item))
 }
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <img
            src={product.image}
            width="100%"
            height="300px"
            alt="product_img"
            className={styles.img}
          />
        </Col>
        <Col md={8} className="">
          <h4>{product.title}</h4>
          <small>{product.description}</small>
          <div className={styles.flash}>
            <h2>FLASH SALE</h2>
          </div>
          <div>
            <p>Price :</p>
          </div>
          <div>
            <h2 style={{color:"#f30240"}}>$ {product.price}</h2>
            <p>
              RRP :<del>${product.price * 3}</del>{" "}
            </p>
          </div>
          <div></div>
          <Button variant="danger" onClick={()=>addTocart(product)}>Add To Cart</Button> 
          <Button>BUY NOW</Button>{" "}
          <Button variant="warning">PAY PAL</Button>
        </Col>
      </Row>  
      <Recomended />
    </Container>
  );
};

export default Products;
