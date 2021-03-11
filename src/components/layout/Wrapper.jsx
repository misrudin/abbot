import React from "react";
import styles from 'styles/Component.module.scss'
import {Sidebar} from "../molechules";

const Wrapper = ({children})=> {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default React.memo(Wrapper)
