import React, { useRef } from "react";
import styles from "./about.module.css";
const About = (props) => {
  document.querySelectorAll(`.${styles.accordion}`).forEach((accordion) => {
    accordion.onclick = () => {
      accordion.classList.toggle(`${styles.active}`);
    };
  });

  return (
    <>
      {/* about section */}
      <section className={styles.about}>
        <div className={styles.image}>
          <img src="./images/Logo-big.png" alt="" />
        </div>

        <div className={styles.content}>
          <h3>Our Story</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            totam explicabo labore eligendi quaerat quas vel officia ea deleniti
            laboriosam, accusamus vitae expedita provident distinctio reiciendis
            nostrum pariatur aliquid! Tempora.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            totam explicabo labore eligendi quaerat quas vel officia ea deleniti
            laboriosam, accusamus vitae expedita provident distinctio reiciendis
            nostrum pariatur aliquid! Tempora.
          </p>
          <a href="#" className={styles.btn}>
            Read More
          </a>
        </div>
      </section>

      {/* faq section */}
      <section className={styles.faq}>
        <h1 className={styles.heading}>
          Question & <span>Answers</span>
        </h1>

        <div className={styles.accordionContainer}>
          <div className={styles.accordion}>
            <div className={styles.accordionHeading}>
              <h3>How to make websites?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>

            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>
          </div>
        </div>

        <div className={styles.accordionContainer}>
          <div className={styles.accordion}>
            <div className={styles.accordionHeading}>
              <h3>How to place order online?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>

            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>
          </div>
        </div>

        <div className={styles.accordionContainer}>
          <div className={styles.accordion}>
            <div className={styles.accordionHeading}>
              <h3>How to pay online?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>

            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>
          </div>
        </div>

        <div className={styles.accordionContainer}>
          <div className={styles.accordion}>
            <div className={styles.accordionHeading}>
              <h3>is online payment safe?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>

            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>
          </div>
        </div>

        <div className={styles.accordionContainer}>
          <div className={styles.accordion}>
            <div className={styles.accordionHeading}>
              <h3>How to contact service center?</h3>
              <i className="fas fa-angle-down"></i>
            </div>
            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>

            <p className={styles.accordionContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quod ad accusamus dolore molestiae sint delectus
              obcaecati autem exercitationem nihil unde quas vitae porro, labore
              fugiat molestias totam iste voluptatem!
            </p>
          </div>
        </div>
      </section>

      {/* review section */}
    </>
  );
};

export default About;
