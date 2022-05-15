import React from "react";
import styles from "../css/SignUp1.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FooterComp } from "./FooterComp";

const SignUp1 = () => {
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
        <Link className={styles.signbtn} to="/login">
          Sign In
        </Link>
      </div>
      <div className={styles.middlebox}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
          alt=""
        />
        <p>STEP 1 OF 3</p>
        <h2>Finish setting up your account</h2>
        <p>
          Netflix is personalised for you. Create a password to watch on any
          device at any time.
        </p>
        <button
          onClick={() => {
            navigate("/signup2");
          }}
        >
          Next
        </button>
      </div>
      <FooterComp />
    </div>
  );
};

export default SignUp1;
