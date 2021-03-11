import React from 'react'
import {Footer, Header, SEO, Wrapper} from "src/components";
import styles from 'styles/Dashboard.module.scss'

const Dashboard = () => {
  return (
    <>
      <SEO title="Dashboard"/>
      <div className={styles.dashboard}>
        <Header/>
        <Wrapper>
          <div className={styles.container}>
            <div className={styles.header}>
              <h5>General Configuration</h5>
            </div>

            <div className={styles.total_data}>
              <p>Total Registered User</p>
              <h5>1203 Users - 12/03/2021 - 15/03/2021</h5>
            </div>

            <div className={styles.total_data}>
              <p>Configured Zoom Meeting Link - jawa Region</p>
              <h5>http:www.zoom.com/1243434/32323/1111</h5>
            </div>

            <div className={styles.total_data}>
              <p>Configured Zoom Meeting Link - Luar Jawa Region</p>
              <h5>http:www.zoom.com/1243434/32323/2222</h5>
            </div>

            <div className={styles.total_data}>
              <p>Registration Open Date</p>
              <h5>10 AM, 3  April 2021</h5>
            </div>

            <div className={styles.total_data}>
              <p>Configured Zoom Date</p>
              <h5>10 AM, 6 - 7 April 2021</h5>
            </div>
          </div>
        </Wrapper>
        <Footer/>
      </div>
    </>
  )
}

export default Dashboard
