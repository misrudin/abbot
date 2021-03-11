import React from 'react'
import {Button, Carousel, Col, Container, Row} from "react-bootstrap";
import styles from 'styles/Home.module.scss'
import {Footer, Header} from "src/components";
import Link from 'next/link'


const HomePage = () => {
  return (
    <div>
      {/*navbar*/}

      <Header/>

      {/*carousel*/}
      <div className={styles.carousel}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/icons/dumy.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/icons/dumy.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/icons/dumy.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/*  cta */}

      <div className={styles.cta_container}>
        <Container className={styles.container}>
          <Link href="/register">
            <a>
              <Button className={styles.button_register} variant="warning">Register Now</Button>
            </a>
          </Link>
          <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dicta,
            dignissimos? Alias laborum
            reiciendis rem totam vel. Maxime, praesentium recusandae.</p>
          <Button className={styles.button_call} variant="success">Call Us Now</Button>
        </Container>
      </div>


      {/*  product*/}
      <div className={styles.product}>
        <Container className={styles.container}>
          <h5 className={styles.title}>Product Knowledge</h5>
          <Row className={styles.product_item}>
            <Col md={6}>
              <h5 className={styles.name}>Golsuren Ensure</h5>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aperiam est ex fuga laboriosam
                mollitia obcaecati quae? Blanditiis dignissimos dolorum officiis quo quod tempora totam. Aspernatur
                consectetur dolore, ducimus ea illum ipsam libero rerum sequi temporibus unde! Amet, eligendi facere
                iste minus necessitatibus nesciunt perspiciatis possimus quasi soluta.
              </p>
            </Col>
            <Col className="text-center" md={6}>
              <img src="/icons/dummy_milk.png" alt="Product"/>
            </Col>
          </Row>
          <Row className={styles.product_item}>
            <Col className="text-center" md={6}>
              <img src="/icons/dummy_milk.png" alt="Product"/>
            </Col>
            <Col md={6}>
              <h5 className={styles.name}>Golsuren Ensure</h5>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aperiam est ex fuga laboriosam
                mollitia obcaecati quae? Blanditiis dignissimos dolorum officiis quo quod tempora totam. Aspernatur
                consectetur dolore, ducimus ea illum ipsam libero rerum sequi temporibus unde! Amet, eligendi facere
                iste minus necessitatibus nesciunt perspiciatis possimus quasi soluta.
              </p>
            </Col>
          </Row>
          <Row className={styles.product_item}>
            <Col md={6}>
              <h5 className={styles.name}>Golsuren Ensure</h5>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aperiam est ex fuga laboriosam
                mollitia obcaecati quae? Blanditiis dignissimos dolorum officiis quo quod tempora totam. Aspernatur
                consectetur dolore, ducimus ea illum ipsam libero rerum sequi temporibus unde! Amet, eligendi facere
                iste minus necessitatibus nesciunt perspiciatis possimus quasi soluta.
              </p>
            </Col>
            <Col className="text-center" md={6}>
              <img src="/icons/dummy_milk.png" alt="Product"/>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  footer*/}
      <Footer withLink/>
    </div>
  )
}


export default HomePage
