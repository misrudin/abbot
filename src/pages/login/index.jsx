import React from 'react'
import {Footer, Header} from "src/components";
import styles from 'styles/Login.module.scss'
import {Button, Form} from "react-bootstrap";


const Login = () => {
  return (
    <div className={styles.login_page}>
      {/*navbar*/}
      <Header/>
      <div className={styles.container}>
        <h5 className={styles.title}>Login Your Account</h5>
        <div className={styles.form}>
          <div className={styles.left}>
            <h5>Information</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa distinctio fuga neque nesciunt
              nostrum, qui sequi soluta sunt unde.</p>
          </div>
          <div className={styles.right}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <div className="d-flex justify-content-center mt-5">
                <Button className="button-main" variant="primary" type="submit">
                  Login
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


export default Login
