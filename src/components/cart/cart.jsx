import React from "react";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";

const Cart = (props) => {
  return (
    <section className={styles.shoppingCart}>
      <h1 className={styles.heading}>
        your <span>products</span>
      </h1>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <i className="fas fa-times"></i>
          <img src="../images/product-1.jpg" alt="" />
          <div className={styles.content}>
            <h3>smartphone</h3>
            <form action="">
              <span>quantity : </span>
              <input type="number" name="" id="" min="0" />
            </form>
            <div className={styles.price}>
              $249.99 <span>$399.99</span>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <i class="fas fa-times"></i>
          <img src="../images/product-2.jpg" alt="" />
          <div className={styles.content}>
            <h3>camera</h3>
            <form action="">
              <span>quantity : </span>
              <input type="number" name="" id="" min="0" />
            </form>
            <div className={styles.price}>
              $249.99 <span>$399.99</span>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <i className="fas fa-times"></i>
          <img src="../images/product-3.jpg" alt="" />
          <div className={styles.content}>
            <h3>television</h3>
            <form action="">
              <span>quantity : </span>
              <input type="number" name="" id="" min="0" />
            </form>
            <div className={styles.price}>
              $249.99 <span>$399.99</span>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <i className="fas fa-times"></i>
          <img src="../images/product-4.jpg" alt="" />
          <div className={styles.content}>
            <h3>speaker</h3>
            <form action="">
              <span>quantity : </span>
              <input type="number" name="" id="" min="0" />
            </form>
            <div className={styles.price}>
              $249.99 <span>$399.99</span>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <i className="fas fa-times"></i>
          <img src="../images/product-5.jpg" alt="" />
          <div className={styles.content}>
            <h3>watch</h3>
            <form action="">
              <span>quantity : </span>
              <input type="number" name="" id="" min="0" />
            </form>
            <div className={styles.price}>
              $249.99 <span>$399.99</span>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <i className="fas fa-times"></i>
          <img src="../images/product-6.jpg" alt="" />
          <div className={styles.content}>
            <h3>smartwatch</h3>
            <form action="">
              <span>quantity : </span>
              <input type="number" name="" id="" min="0" />
            </form>
            <div className={styles.price}>
              $249.99 <span>$399.99</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cartTotal}>
        <h3>
          subtotal : <span>$1499.94</span>
        </h3>
        <h3>
          discount : <span>-$99.94</span>
        </h3>
        <h3>
          subtotal : <span>$1400.00</span>
        </h3>
        <a className={styles.btn}>proceed to checkout</a>
      </div>
    </section>
  );
};

export default Cart;
