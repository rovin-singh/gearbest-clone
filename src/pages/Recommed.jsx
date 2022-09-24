import React from "react";
import { useState, useEffect } from "react";
import { getProductsData } from "../API/Api";
import { Container, Card } from "react-bootstrap";
import { FaRegThumbsUp } from "react-icons/fa";
import styles from "./Pages.module.css";
const Recomended = () => {
  const [recprod, setRecProd] = useState([]);

  const getProduct = () => {
    getProductsData().then((res) => setRecProd(res.data));
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(recprod)
  return (
    <>
      <Container style={{margin:"20px 0px"}}>
        <h4>
          <FaRegThumbsUp /> RECOMMENDED FOR YOU
        </h4>
        <div className={styles.itemsgrid}>
          {recprod.map((item) => (
            <Card key={item.id}>
              <Card.Img variant="top" src={item.image} height="200px" />
              <Card.Body>
                <Card.Text>
                  <p style={{ fontSize: "15px" }}>{item.title}</p>
                  <div style={{ lineHeight: "5px" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#f30240",
                        fontWeight: "600",
                      }}
                    >
                      ${item.price}
                    </p>
                    <p style={{ fontSize: "15px", marginTop: "-5px" }}>
                      RRP: <del>{Math.abs(item.price * 2)}</del>
                    </p>
                  </div>
                </Card.Text>
                <p>Add to Store</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Recomended;
