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
                <img style={{width: 150}} src="/icons/logo1.svg" alt="Logo1"/>
                <img style={{width: 150}} src="/icons/logo2.png" alt="Logo2"/>
              </div>
            </Col>
            <Col className=" d-flex justify-content-end" md={6}>
              <Row className="text-left text-light">
                <Col md={4}>
                  <h5 className="mb-3">Product</h5>
                  <p className="mb-1">Product 1</p>
                  <p>Product 2</p>
                </Col>
                <Col md={4}>
                  <h5 className="mb-3">Platform</h5>
                  <p className="mb-1">Web 1</p>
                  <p className="mb-1">Web 2</p>
                  <p className="mb-1">Android</p>
                  <p>IOS</p>
                </Col>
                <Col md={4}>
                  <h5 className="mb-3">Company</h5>
                  <p className="mb-1">About</p>
                  <p className="mb-1">Blog</p>
                  <p>Maps</p>
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
              <a href={void (0)}>
                <FaGooglePlus style={{color: 'red'}} className={styles.icon}/>
              </a>
              <a href={void (0)}>
                <FaWhatsapp style={{color: '#128c7e'}} className={styles.icon}/>
              </a>
              <a href={void (0)}>
                <FaInstagram className={styles.icon}/>
              </a>
              <a href={void (0)}>
                <FaYoutube style={{color: '#c4302b'}} className={styles.icon}/>
              </a>
              <a href={void (0)}>
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
