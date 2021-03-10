import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from 'styles/Home.module.scss'
import {CarouselProvider, DotGroup, Slide, Slider} from "pure-react-carousel";
import {Footer, Header} from "src/components";
import Link from 'next/link'


const HomePage = () => {
  return (
    <div>
      {/*navbar*/}

      <Header/>

      {/*carousel*/}
      <div className={styles.carousel}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={3}
          infinite={true}
          isIntrinsicHeight={true}
          isPlaying={true}
          interval={5000}
        >
          <Slider>
            <Slide>
              <img src="/icons/dumy.jpg" alt="test"/>
            </Slide>
            <Slide>
              <img src="/icons/dumy.jpg" alt="test"/>
            </Slide>
            <Slide>
              <img src="/icons/dumy.jpg" alt="test"/>
            </Slide>
          </Slider>
          <DotGroup className={styles.dot}/>
        </CarouselProvider>
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
