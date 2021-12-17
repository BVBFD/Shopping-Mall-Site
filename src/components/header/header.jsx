import React from "react";
import styles from "./header.module.css";
import { Link, Route, Routes } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.heading}>
      <Link to={"/"} className={styles.logo}>
        <h2>
          <img src="./images/Logo-big.png" />
          Mr.Lee Mall
        </h2>
      </Link>
      <form>
        <input type="text" placeholder="Search..." />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </form>
      <div className={styles.iconBox}>
        <div>
          <i class="fas fa-bars"></i>
        </div>
        <a>
          <i class="fas fa-user"></i>
        </a>
        <a>
          <i class="fas fa-heart"></i>
        </a>
        <a>
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
