import React from "react";
import styles from "styles/Home.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {FaFacebook, FaGooglePlus, FaInstagram, FaWhatsapp, FaYoutube} from "react-icons/fa";


const Foooter = ({withLink}) => {
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        {
          withLink &&
          <Row>
            <Col md={6}>
              <div className="d-flex">
                <a href="#">
                  <img style={{width: 150}} src="/icons/logo1.svg" alt="Logo1"/>
                </a>
                <a href="#">
                  <img style={{width: 150}} src="/icons/logo2.png" alt="Logo2"/>
                </a>
              </div>
            </Col>
            <Col className=" d-flex justify-content-end" md={6}>
              <Row className={`text-left text-light ${styles.links}`}>
                <Col className={styles.link_col} md={4}>
                  <h5 className="mb-3">Product</h5>
                  <a href="#" className="mb-2">Product 1</a>
                  <a href="#">Product 2</a>
                </Col>
                <Col className={styles.link_col} md={4}>
                  <h5 className="mb-3">Platform</h5>
                  <a href="#" className="mb-2">Web 1</a>
                  <a href="#" className="mb-2">Web 2</a>
                  <a href="#" className="mb-2">Android</a>
                  <a href="#">IOS</a>
                </Col>
                <Col className={styles.link_col} md={4}>
                  <h5 className="mb-3">Company</h5>
                  <a href="#" className="mb-2">About</a>
                  <a href="#" className="mb-2">Blog</a>
                  <a href="#">Maps</a>
                </Col>
              </Row>
            </Col>
          </Row>
        }
        <Row className={withLink ? "mt-5" : ""}>
          <Col md={6}>
            <p className="text-light">@Hotline Center 2021</p>
          </Col>
          <Col className="d-flex justify-content-end" md={6}>
            <div className={styles.social_icons}>
              <a href="#">
                <FaGooglePlus style={{color: 'red'}} className={styles.icon}/>
              </a>
              <a href="#">
                <FaWhatsapp style={{color: '#128c7e'}} className={styles.icon}/>
              </a>
              <a href="#">
                <FaInstagram className={styles.icon}/>
              </a>
              <a href="#">
                <FaYoutube style={{color: '#c4302b'}} className={styles.icon}/>
              </a>
              <a href="#">
                <FaFacebook style={{color: '#3b5998'}} className={styles.icon}/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default React.memo(Foooter)
