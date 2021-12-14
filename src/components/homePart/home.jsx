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
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <img src="./images/product-9.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
