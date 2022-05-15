import React from 'react'

import styles from "../css/Footer.module.css";

export const FooterComp = () => {
    return (
        <div className={styles.footer}>
            <p>Questions? Call 000-800-040-1843</p>
            <div className={styles.links}>
                <div>
                    <p>FAQ</p>
                    <p>Cookie Preferences</p>
                </div>
                <div>
                    <p>Help Centre</p>
                    <p>Corporate Information</p>
                </div>
                <div>
                    <p>Terms of Use</p>
                </div>
                <div>
                    <p>Privacy</p>
                </div>
            </div>
            <select name="" id="">
                <option value="">English</option>
                <option value="">हिन्दी </option>
            </select>
        </div>
    )
}
