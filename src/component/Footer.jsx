import React from 'react'
import styles from "../component/Style/footer.module.css"
const Footer = () => {
  return (
    <div>
      <div className={styles.footerlast}>
        <br />
        <div className={styles.footercall}>Questions? Call 000-800-040-1843</div>
        <div className={styles.footerFaq}>
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
        </div>
        <div className={styles.footercook}>
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
        </div>
        <div className={styles.footereng}>
          <img className={styles.footerglobe} src="https://st2.depositphotos.com/8663904/11553/v/950/depositphotos_115536134-stock-illustration-earth-globe-logo-icon-black.jpg" alt="" />
          <h4>English</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer