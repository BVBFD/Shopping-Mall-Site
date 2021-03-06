import React from "react";
import styles from "./about.module.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

const About = (props) => {
  const openContent = (event) => {
    if (event.target.tagName === "DIV") {
      event.target.parentNode.classList.toggle(`${styles.active}`);
    } else if (
      event.target.tagName === "H3" ||
      event.target.tagName === "svg" ||
      event.target.tagName === "path"
    ) {
      event.target.parentNode.parentNode.classList.toggle(`${styles.active}`);
    }
  };

  return (
    <>
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

      <section className={styles.faq}>
        <h1 className={styles.heading}>
          Question & <span>Answers</span>
        </h1>

        <div className={styles.accordionContainer}>
          <div className={styles.accordion} onClick={openContent}>
            <div className={styles.accordionHeading}>
              <h3>How to make websites?</h3>
              <i class="fas fa-angle-down"></i>
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
          <div className={styles.accordion} onClick={openContent}>
            <div className={styles.accordionHeading}>
              <h3>How to place order online?</h3>
              <i class="fas fa-angle-down"></i>
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
          <div className={styles.accordion} onClick={openContent}>
            <div className={styles.accordionHeading}>
              <h3>How to pay online?</h3>
              <i class="fas fa-angle-down"></i>
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
          <div className={styles.accordion} onClick={openContent}>
            <div className={styles.accordionHeading}>
              <h3>is online payment safe?</h3>
              <i class="fas fa-angle-down"></i>
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
          <div className={styles.accordion} onClick={openContent}>
            <div className={styles.accordionHeading}>
              <h3>How to contact service center?</h3>
              <i class="fas fa-angle-down"></i>
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

      <section className={styles.review}>
        <h1 className={styles.heading}>
          Customer <span>review</span>
        </h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/pic-1.png" alt="" />
              <h3>John Deo</h3>
              <span>Designer</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae
                totam rem quidem eaque quis illum inventore suscipit rerum vel!
                Minima corporis animi nemo quaerat incidunt accusantium iste
                cupiditate temporibus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/pic-2.png" alt="" />
              <h3>John Deo</h3>
              <span>Designer</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae
                totam rem quidem eaque quis illum inventore suscipit rerum vel!
                Minima corporiss.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/pic-3.png" alt="" />
              <h3>John Deo</h3>
              <span>Designer</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae
                totam rem quidem eaqu
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/pic-4.png" alt="" />
              <h3>John Deo</h3>
              <span>Designer</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae
                totam rem quidem eaque quis illum inventore suscipit rerum vel!
                Minima cor
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/pic-5.png" alt="" />
              <h3>John Deo</h3>
              <span>Designer</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae
                totam rem quidem eaque quis illum inventore suscipit rerum vel!
                Minima corporis animi nemo quaerat incidunt accusantium iste
                cupiditate temporibus.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/pic-6.png" alt="" />
              <h3>John Deo</h3>
              <span>Designer</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae
                totam rem quidem eaque quis illum inventore suscipit rerum vel!
                Minima corpori
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default About;
