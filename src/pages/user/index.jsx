import React from 'react'
import {Footer, Header, SEO, Wrapper} from "src/components";
import styles from "styles/Dashboard.module.scss";
import {Button, Form, Table} from "react-bootstrap";

const User = () => {

  const Item = ({data}) => {
    return (
      <tr>
        <td className="text-center">1</td>
        <td>Mark</td>
        <td>mark@gmail.com</td>
        <td>@mark</td>
        <td>6283434349343</td>
        <td>Jl. Cibaduyut Caya No. 42</td>
      </tr>
    )
  }
  return (
    <>
      <SEO title="User"/>
      <div className={styles.dashboard}>
        <Header/>
        <Wrapper>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>User Table</h5>
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
                <th>Username Zoom</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
              </thead>
              <tbody>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <tr className={styles.footer_table}>
                <td colSpan="6">
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

export default User
