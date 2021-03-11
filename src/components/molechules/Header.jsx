import React from "react";
import {Container, Navbar} from "react-bootstrap";
import styles from "styles/Home.module.scss";


const Header = () => {
  return (
    <Navbar bg="dark" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/icons/logo1.svg"
            width="150"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="ml-auto">
          <img
            src="/icons/logo2.png"
            width="150"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default React.memo(Header)
