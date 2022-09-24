import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaRegThumbsUp, FaShoppingBag } from "react-icons/fa";
import styles from "./Pages.module.css";
import { collectionProducts, newProducts, superdeals } from "./HomeAPI";
import Recomended from "./Recommed";
const Home = () => {
  return (
    <Container className={styles.home_main}>
      <h4>
        <FaShoppingBag /> COLLECTION
      </h4>
      <div className={styles.itemsgrid}>
        {collectionProducts.map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.images[0]} height="200px" />
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
      <h4>
        {" "}
        <FaRegThumbsUp /> SUPER DEALS
      </h4>
      <div className={styles.itemsgrid}>
        {superdeals.map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.images[0]} height="200px" />
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
      <h4>
        {" "}
        <FaShoppingBag /> NEW
      </h4>
      <div className={styles.itemsgrid}>
        {newProducts.map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.images[0]} height="200px" />
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
      <Recomended />
    </Container>
  );
};

export default Home;
