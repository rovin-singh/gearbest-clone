import React from "react";
import styles from "./Pages.module.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
  FaTumblr,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Container fluid style={{ background: "whitesmoke" }}>
        <Container className={styles.footerLinks_col}>
          <div className="d-flex">
            <h6>Newsletter</h6>
            <div>
              <input type="search" placeholder="Enter Email to get 50 points" style={{width:"200px"}} />
             <input type="submit" value="subscribe" style={{background:"black",color:"white"}}/>
            </div>

            <div
              className="d-flex right"
              style={{ position: "absolute", right: "50px" }}
            >
              <div>
                <FaFacebook size={30} />
              </div>
              <div>
                <FaInstagramSquare size={30} />
              </div>
              <div>
                <FaYoutube size={30} />
              </div>
              <div>
                <FaTwitter size={30} />
              </div>
              <div>
                <FaTumblr size={30} />
              </div>
            </div>
          </div>
          <Row style={{ marginTop: "25px" }}>
            <Col>
              <dl>
                <dt className={styles.footer_heading}>Company Information</dt>
                <dd>About Us</dd>
                <dd>Top Searches</dd>
                <dd>Privacy Policy</dd>
                <dd>Terms and Conditions</dd>
                <dd>Intellectual Property Policy</dd>
                <dd>Testimonials</dd>
                <dd>Contact Us</dd>
                <dd>Report Security Issue</dd>
                <dd>Sell on Gearbest</dd>
                <dd>Cookies Policy</dd>
                <dd>Top Brands</dd>
                <dd>Gearbest Official Blog</dd>
              </dl>
            </Col>
            <Col>
              <dl>
                <dt className={styles.footer_heading}>Customer Service</dt>
                <dd>Shipping Information</dd>
                <dd>Top Searches</dd>
                <dd>My Favorites</dd>
                <dd>FAQ For Newsletter Subscription</dd>
                <dd>Intellectual Property Policy</dd>
                <dd>Testimonials</dd>
                <dd>Warranty and Return</dd>
                <dd>Payment Methods</dd>
                <dd>Deposit Expansion</dd>
                <dd>FAQ & Support</dd>
                <dd>Gearbest Wallet Instruction</dd>
                <dd>FAQs about COVID-19</dd>
              </dl>
            </Col>
            <Col>
              <dl>
                <dt className={styles.footer_heading}>Other Business</dt>
                <dd>Partnership Programs</dd>
                <dd>Associate Program</dd>
              </dl>
            </Col>
            <Col>
              <dl>
                <dt className={styles.footer_heading}>Download App!</dt>
                <dd>Save $3 with App & New User Only</dd>
              </dl>
            </Col>
          </Row>
        </Container>
        <Row style={{ background: "black", color: "white" }}>
          <Col>
            <p>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
