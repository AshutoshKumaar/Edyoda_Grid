import React from 'react'
import styles from '../fotter/footer.module.css'
import { FaFacebook,FaInstagram, FaEnvelope, FaGooglePay , FaUserSecret, FaCommentAlt } from "react-icons/fa";


function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.row}>
            <h5>Edyoda</h5>
            <p>About us</p>
            <p>Contact us</p>
            <p>Terms of uses</p>
            <p>Privacy Policy</p>

        </div>
        <div className={styles.row}>
            <h5>Resources</h5>
            <p>Learning Paths</p>
            <p>Courses</p>
            <p>Learning Videos</p>
            <p>Educators</p>
            <p>EdYoda Stories</p>
            <p>University</p>
        </div>
        <div className={styles.row}>
            <h5>For Enterprises</h5> 
            <p>Train Your Employees</p>
            <h5>Quick links</h5>
            <p>Learn and Earn</p>
            <p>Become a Learning-Enabler</p>
            <p>Tips for Learning-Enabler</p>
            <p>Request New Topic</p>
            <p>Certification</p>
            <p>Affiliate Progam</p>
            
        </div>
        <div className={styles.row}>
            <h5>Connect</h5>
            <p className={styles.para}>
                2nd Floor #188, Survey No. - 123/1,
                ncubes Building Next to McDonalds,
                ITPL Main Rd, Brookefield,
                Bengaluru, Karnataka-560037,
                India
            </p>
            <p className={styles.email}><FaEnvelope />   hello@edyoda.com</p>
            <p className={styles.icon}><FaFacebook /> <FaGooglePay /> <FaInstagram /> <FaUserSecret /> <FaCommentAlt /> </p>
        </div>
        
      
    </div>
  )
}

export default Footer
