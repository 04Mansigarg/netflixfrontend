import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Email.module.css"
import LanguageIcon from '@mui/icons-material/Language';

export const Footer = () => {
    return (
        <div className={styles.footerDiv}>
            <h3 className={styles.footerHeading}>Questions? Call 000-800-040-1843</h3>
            <div className={styles.footerLink}>
                <div><Link className={styles.link} to="/">FAQ</Link></div>
                <div><Link className={styles.link} to="/">Help Centre</Link></div>
                <div><Link className={styles.link} to="/">Account</Link></div>
                <div><Link className={styles.link} to="/">Media Centre</Link></div>
                <div><Link className={styles.link} to="/">Investor Relations</Link></div>
                <div><Link className={styles.link} to="/">Jobs</Link></div>
                <div><Link className={styles.link} to="/">Ways to Watch</Link></div>
                <div><Link className={styles.link} to="/">Terms of Use</Link></div>
                <div><Link className={styles.link} to="/">Privacy</Link></div>
                <div><Link className={styles.link} to="/">Cookie Preferences</Link></div>
                <div><Link className={styles.link} to="/">Corporate Information</Link></div>
                <div><Link className={styles.link} to="/">Contact Us</Link></div>
                <div><Link className={styles.link} to="/">Speed Test</Link></div>
                <div><Link className={styles.link} to="/">Legal Noticies</Link></div>
                <div><Link className={styles.link} to="/">Only on Netflix</Link></div>
            </div>
            <div className={styles.footerSelect}>
                <span >
                    <LanguageIcon />
                    <select className={styles.footerSelectMenu}>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </span>
            </div>

            <h3 className={styles.footerNetflix}>Netflix India</h3>
        </div>
    )
}
