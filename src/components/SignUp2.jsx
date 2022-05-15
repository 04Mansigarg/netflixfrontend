import React from "react";
import styles from "../css/SignUp2.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FooterComp } from "./FooterComp";
import { useDispatch, useSelector } from "react-redux";
import { get_email, get_password } from "../Redux-Store/Home/Action";

const SignUp2 = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addUserCredential = () => {
    if (password === "" || email === "") {
      alert("Add CREDENTIAL");
    } else {
      navigate("/signup3");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </a>
        </div>
        <Link className={styles.signbtn} to="/login">
          Sign In
        </Link>
      </div>
      <div className={styles.middlebox}>
        <p>STEP 1 OF 3</p>
        <h2>Create a password to start your membership</h2>
        <p>Just a few more steps and you're done!</p>
        <p>We hate paperwork, too.</p>
        <form action="">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => dispatch(get_email(e.currentTarget.value))}
          />
          <input
            type="password"
            placeholder="Add a password"
            value={password}
            onChange={(e) => dispatch(get_password(e.currentTarget.value))}
          />
          <button onClick={addUserCredential}>Next</button>
        </form>
      </div>
      <FooterComp />
    </div>
  );
};

export default SignUp2;
