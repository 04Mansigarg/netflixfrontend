import React from 'react'
import styles from "./Email.module.css"
import LanguageIcon from '@mui/icons-material/Language';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_email } from '../Redux-Store/Home/Action';

export const Email = () => {
    const email = useSelector((state => state.email))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getStarted = () => {
        if (email === "") {
            alert("ADD EMAIL ADDRESS")
        }
        else {
            navigate("/signup1")
        }

    }
    return (
        <div className={styles.main}>
            <div className={styles.emailDiv}>
                <div className={styles.nav}>
                    <div>
                        <img className={styles.logo} src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
                    </div>
                    <div className={styles.buttons}>
                        <span className={styles.select}>
                            <LanguageIcon />
                            <select className={styles.selectMenu}>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </span>
                        <button onClick={() => navigate("/login")} className={styles.signinButton}>Sign In</button>
                    </div>
                </div>
                <div className={styles.emailHeading}>
                    <h1 >Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                <div className={styles.mailDiv}>
                    <Box
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        className={styles.mail}
                    >
                        <TextField type="email" value={email} onChange={(e) => dispatch(get_email(e.currentTarget.value))} id="filled-basic" label="Email Address" variant="standard" color='grey' InputProps={{ // <== adjusted this
                            disableUnderline: true, // <== added this 
                        }} />
                    </Box>
                    <button onClick={getStarted} className={styles.getStarted}>Get Started {'>'}</button>
                </div>


            </div>
            <div className={styles.horizontal} ></div>
        </div>
    )
}
