import React from 'react'
import {Footer, Header} from "src/components";
import styles from 'styles/Login.module.scss'
import {Button, Col, Form, Row} from "react-bootstrap";


const Register = () => {
  return (
    <div className={styles.login_page}>
      {/*navbar*/}
      <Header/>
      <div className={styles.container}>
        <h5 className={styles.title}>Register Your Account</h5>
        <div className={styles.form} style={{width: '70%'}}>
          <div className={styles.left}>
            <h5>Information</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa distinctio fuga neque nesciunt
              nostrum, qui sequi soluta sunt unde. orem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
              culpa distinctio fuga neque nesciunt
              nostrum, qui sequi soluta sunt unde.</p>
          </div>
          <div className={`${styles.right}`}>
            <h5>Fill The Form To Register</h5>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>AAM Number</Form.Label>
                    <Form.Control type="text" placeholder="AAM Number"/>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username Zoom Meeting</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="AAM Number"/>
                  </Form.Group>
                 </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>City Place</Form.Label>
                    <Form.Control as="select">
                      <option>Jawa</option>
                      <option>Luar Jawa</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>


              <div className="d-flex justify-content-end mt-5">
                <Button className="button-main" variant="primary" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {/*  footer*/}
      <Footer/>
    </div>
  )
}


export default Register
