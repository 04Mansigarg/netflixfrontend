import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/SignUp3.module.css";
import { FooterComp } from "./FooterComp";

const SignUp3 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        <Link className={styles.signbtn} to="/">
          Sign Out
        </Link>
      </div>
      <div className={styles.middlebox}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png"
          alt=""
        />
        <p>STEP 2 OF 3</p>
        <h2>Choose your plan.</h2>
        <ul>
          <li>No commitments, cancel anytime.</li>
          <li>Everything on Netflix for one low price.</li>
          <li>No ads and no extra fees. Ever.</li>
        </ul>
        <button onClick={() => navigate("/payment")}>Next</button>
      </div>
      <FooterComp />
    </div>
  );
};

export default SignUp3;
