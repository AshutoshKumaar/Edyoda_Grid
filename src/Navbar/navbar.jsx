import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import styles from '../Navbar/navbar.module.css'

function Navbar() {
  return (
    <div className={styles.conatiner}>
        <div className={styles.logo}>
            <h1>EdYoDa<br/><span>Stories</span></h1>
        </div>
        <div className={styles.categerious}>
            <span>Explore Categories</span><span><FaAngleDown/></span>
        </div>
        <div className={styles.disc}>
            <p>EdYoda is free learning and knowledge sharing platform for techies</p>
        </div>
        <div className={styles.btn}>
            <button>Go to Main Website</button>
        </div>
      
    </div>
  )
}

export default Navbar
