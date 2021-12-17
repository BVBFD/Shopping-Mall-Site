import React from "react";
import styles from "./footer.module.css";
import { Link, Route, Routes } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <section className={styles.quickLinks}>
        <Link to={"/"}>
          <img className={styles.logo} src="./images/Logo-big.png" />
        </Link>

        <div className={styles.links}>
          <Link to={"/"}>
            <span>Home</span>
          </Link>
          <Link to={"/about"}>
            <span>About</span>
          </Link>
          <Link to={"/products"}>
            <span>Products</span>
          </Link>
          <Link to={"/contact"}>
            <span>Contact</span>
          </Link>
          <Link to={"/login"}>
            <span>Login</span>
          </Link>
          <Link to={"/register"}>
            <span>Register</span>
          </Link>
          <Link to={"/cart"}>
            <span>Cart</span>
          </Link>
        </div>

        <div className={styles.share}>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </section>

      {/* footer section */}
      <section className={styles.credit}>
        <p>
          Created by <span>Mr.Lee Seong Eun </span> || All Rights Reserved
        </p>
        <img src="./images/card_img.png" alt="" />
      </section>
    </>
  );
};

export default Footer;
