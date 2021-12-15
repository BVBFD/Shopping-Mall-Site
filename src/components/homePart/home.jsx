import React from "react";
import styles from "./home.module.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

const Home = () => {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <>
      <header className={styles.heading}>
        <div className={styles.logo}>
          <h2>
            <img src="./images/Logo-big.png" />
            Mr.Lee Mall
          </h2>
        </div>
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
      <section className={styles.home}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/home-img-1.jpg" alt="" />
            </div>
            <div className={styles.explain}>
              <p>Up To 40% Off on Black Friday!</p>
              <span>Smart Phone</span>
              <a href="#">
                <button>Shop Now!</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/home-img-2.jpg" alt="" />
            </div>
            <div className={styles.explain}>
              <p>Up To 30% Off on Black Friday!</p>
              <span>Smart Watch</span>
              <a href="#">
                <button>Shop Now!</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideBox}>
            <div className={styles.imgBox}>
              <img src="./images/home-img-3.jpg" alt="" />
            </div>
            <div className={styles.explain}>
              <p>Up To 40% Off on Black Friday!</p>
              <span>Smart Headset</span>
              <a href="#">
                <button>Shop Now!</button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
