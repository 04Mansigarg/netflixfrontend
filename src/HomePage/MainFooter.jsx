import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import styles from "./MainFooter.module.css"
export const MainFooter = () => {
    return (
        <div className={styles.mainFooterDiv}>
            <div className={styles.socialMediaLinks}>
                <div><Link to="/homepage"><FacebookOutlinedIcon sx={{ color: "white" }} /></Link></div>
                <div><Link to="/homepage"><InstagramIcon sx={{ color: "white" }} /></Link></div>
                <div><Link to="/homepage"><TwitterIcon sx={{ color: "white" }} /></Link></div>
                <div><Link to="/homepage"><YouTubeIcon sx={{ color: "white" }} /></Link></div>
            </div>
            <div className={styles.mainFooterLinksDiv}>
                <div><Link className={styles.mainFooterLink} to="/">Audio and Subtitles</Link></div>
                <div><Link className={styles.mainFooterLink} to="/">Audio Description</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Help Centre</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Gift Cards</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Media Center</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Investors Relations</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Jobs</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Terms of Use</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Privacy</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Legal Notices</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Cookie Preferences</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Corporate Information</Link> </div>
                <div><Link className={styles.mainFooterLink} to="/">Contact Us</Link> </div>
            </div>
            <button className={styles.mainFooterButton}>Service Code</button>
            <h4 className={styles.footerLastHeading}>@ 1997-2022 Netflix, Ins. [60a4438f-2546-48f5-8c37-5499925a6eob]</h4>
        </div >
    )
}
