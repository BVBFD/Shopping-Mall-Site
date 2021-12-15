import React from "react";
import styles from "./home.module.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Link, Route, Routes } from "react-router-dom";

const Home = () => {
  SwiperCore.use([Pagination, Navigation]);
  return (
    // header section
    <>
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

      {/* home slide section */}
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

      {/* banner section */}
      <section className={styles.banner}>
        <a href="#">
          <div className={styles.bannerBox}>
            <img src="./images/banner-1.jpg" alt="" />
            <div className={styles.content}>
              <span>Black Friday!</span>
              <h3>Up To 40% Off</h3>
            </div>
          </div>
        </a>

        <a href="#">
          <div className={styles.bannerBox}>
            <img src="./images/banner-2.jpg" alt="" />
            <div className={styles.content}>
              <span>Black Friday!</span>
              <h3>Up To 30% Off</h3>
            </div>
          </div>
        </a>

        <a href="#">
          <div className={styles.bannerBox}>
            <img src="./images/banner-3.jpg" alt="" />
            <div className={styles.content}>
              <span>Black Friday!</span>
              <h3>Up To 40% Off</h3>
            </div>
          </div>
        </a>
      </section>

      {/* Arrivals section */}
      <section className={styles.arrivals}>
        <h1 className={styles.arrivalsHeading}>
          New <span> Arrivals </span>
        </h1>

        <div className={styles.newArrivalsBoxContainer}>
          <div className={styles.newArrivalsBox}>
            <div className={styles.imgBox}>
              <img src="./images/arrival-1.jpg" alt="" />
            </div>
            <div className={styles.content}>
              <h3>HD Television</h3>
              <div className={styles.price}>
                $249.99 <span>$399.99</span>
              </div>
              <div className={styles.stars}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className={styles.newArrivalsBox}>
            <div className={styles.imgBox}>
              <img src="./images/arrival-2.jpg" alt="" />
            </div>
            <div className={styles.content}>
              <h3>HD Television</h3>
              <div className={styles.price}>
                $99.99 <span>$129.99</span>
              </div>
              <div className={styles.stars}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className={styles.newArrivalsBox}>
            <div className={styles.imgBox}>
              <img src="./images/arrival-3.jpg" alt="" />
            </div>
            <div className={styles.content}>
              <h3>HD Television</h3>
              <div className={styles.price}>
                $149.99 <span>$199.99</span>
              </div>
              <div className={styles.stars}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className={styles.newArrivalsBox}>
            <div className={styles.imgBox}>
              <img src="./images/arrival-4.jpg" alt="" />
            </div>
            <div className={styles.content}>
              <h3>HD Television</h3>
              <div className={styles.price}>
                $49.99 <span>$69.99</span>
              </div>
              <div className={styles.stars}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className={styles.newArrivalsBox}>
            <div className={styles.imgBox}>
              <img src="./images/arrival-5.jpg" alt="" />
            </div>
            <div className={styles.content}>
              <h3>HD Television</h3>
              <div className={styles.price}>
                $39.99 <span>$49.99</span>
              </div>
              <div className={styles.stars}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className={styles.newArrivalsBox}>
            <div className={styles.imgBox}>
              <img src="./images/arrival-6.jpg" alt="" />
            </div>
            <div className={styles.content}>
              <h3>HD Television</h3>
              <div className={styles.price}>
                $349.99 <span>$399.99</span>
              </div>
              <div className={styles.stars}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.quickLinks}>
        <Link to={"/"}>
          <img className={styles.logo} src="./images/Logo-big.png" />
        </Link>

        <div className={styles.links}>
          <Link to={"/"}>
            <span>Home</span>
          </Link>
          <Link to={"/about"}>
            <span>about</span>
          </Link>
          <Link to={"/products"}>
            <span>products</span>
          </Link>
          <Link to={"/contact"}>
            <span>contact</span>
          </Link>
          <Link to={"/login"}>
            <span>login</span>
          </Link>
          <Link to={"/register"}>
            <span>register</span>
          </Link>
          <Link to={"/cart"}>
            <span>cart</span>
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

export default Home;
