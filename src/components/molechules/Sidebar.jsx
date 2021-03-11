import React from "react";
import styles from 'styles/Component.module.scss'
import {Link} from "../atoms";

const menu = [
  {
    name: "Home",
    link: "/dashboard"
  },
  {
    name: "User",
    link: "/user"
  },
  {
    name: "Attendance",
    link: "/attendance"
  }
]

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {
          menu?.map((e, i) => {
            return (
              <li key={i}>
                <Link href={e.link}>
                  <a>{e.name}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default React.memo(Sidebar)
