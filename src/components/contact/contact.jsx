import React from "react";
import styles from "./contact.module.css";

const Contact = (props) => {
  return (
    <>
      <section className={styles.infoContainer}>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <i class="fas fa-map"></i>
            <h3>address</h3>
            <p>Gyeong-Ju, South Korea</p>
          </div>

          <div className={styles.box}>
            <i class="fas fa-envelope"></i>
            <h3>email</h3>
            <p>lsevina126@gmail.com</p>
            <p>dltjddms126@naver.com</p>
          </div>

          <div className={styles.box}>
            <i class="fas fa-phone"></i>
            <h3>number</h3>
            <p>+82 10-9141-6073</p>
            <p>+82 54-745-2555</p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <form action="">
          <h3>get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et.
          </p>
          <div className={styles.inputBox}>
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
          </div>
          <div className={styles.inputBox}>
            <input type="number" placeholder="your number" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea
            name=""
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="send message" class={styles.btn} />
        </form>

        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25874.28487483064!2d129.1984403!3d35.84199965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35664f4cf0d8c903%3A0x8197f8c791bc2f3c!2z7Zmp66as64uo6ri4!5e0!3m2!1sko!2skr!4v1645032451417!5m2!1sko!2skr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.content}>
          <h3>newsletter</h3>
          <p>subscribe for weekly newsletter.</p>
        </div>
        <form action="">
          <input
            className={styles.email}
            type="email"
            name=""
            placeholder="enter your email"
          />
          <input type="submit" value="subscribe" className={styles.btn} />
        </form>
      </section>
    </>
  );
};

export default Contact;
