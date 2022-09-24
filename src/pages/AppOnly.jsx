import React, { useEffect, useState } from "react";
import styles from "./Pages.module.css";
import { getProductsData } from "../API/Api";
import { Container, Row, Col, Card } from "react-bootstrap";
const AppOnly = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    getProductsData().then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <Container className={styles.superdealmain}>
      <Row>
        <Col>
          <p>Sort By : Recommended</p>
        </Col>
      </Row>
      <div className={styles.itemsgrid}>
        {data.map((item) => (
          <Card >
            <Card.Img variant="top" src={item.image} height="200px"/>
            <Card.Body>
              <Card.Text>
                <p style={{fontSize:"15px"}}>{item.title}</p>
                <div style={{lineHeight:"5px"}}>
                <p style={{fontSize:"15px",color:"#f30240",fontWeight:"600"}}>${item.price}</p>
                <p style={{fontSize:"15px",marginTop:"-5px"}}>RRP: <del>{Math.abs(item.price*2)}</del></p>
                </div>

              </Card.Text>
              <p >Add to Store</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default AppOnly;
