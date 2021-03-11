import React from 'react'
import {Footer, Header, SEO, Wrapper} from "src/components";
import styles from "styles/Dashboard.module.scss";
import {Button, Table, Form} from "react-bootstrap";

const Attendance = () => {
  const Item = ({data}) => {
    return (
      <tr>
        <td className="text-center">1</td>
        <td>Mark</td>
        <td>mark@gmail.com</td>
        <td>6283434349343</td>
        <td>Gopay</td>
      </tr>
    )
  }

  return (
    <>
      <SEO title="Attendance"/>
      <div className={styles.dashboard}>
        <Header/>
        <Wrapper>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>Attendance Table</h5>
                <div style={{width: 20, height: 20}}/>
                <Form.Check className={styles.option} inline label="Jawa" type="radio" id="city-place1"
                            name="city-place"/>
                <Form.Check className={styles.option} inline label="Luar Jawa" type="radio" id="city-place2"
                            name="city-place"/>
              </div>
              <Button variant="success">Export Excel</Button>
            </div>

            <Table hover responsive={"md"}>
              <thead>
              <tr>
                <th className="text-center">No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Uang Digital</th>
              </tr>
              </thead>
              <tbody>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <tr className={styles.footer_table}>
                <td colSpan="5">
                  <span>
                    <p>3000 user</p>
                  </span>
                </td>
              </tr>
              </tbody>
            </Table>
          </div>
        </Wrapper>
        <Footer/>
      </div>
    </>
  )
}

export default Attendance
