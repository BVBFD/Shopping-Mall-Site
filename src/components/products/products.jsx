import React from "react";
import styles from "./products.module.css";

const Products = (props) => {
  return (
    <>
      <section className={styles.category}>
        <h1 className={styles.heading}>
          Shop by <span>Category</span>
        </h1>

        <div className={styles.boxContainer}>
          <a href="#" className={styles.box}>
            <img src="./images/cat_img1.png" alt="" />
            <h3>Televisions</h3>
          </a>

          <a href="#" className={styles.box}>
            <img src="./images/cat_img2.png" alt="" />
            <h3>Televisions</h3>
          </a>

          <a href="#" className={styles.box}>
            <img src="./images/cat_img3.png" alt="" />
            <h3>Televisions</h3>
          </a>

          <a href="#" className={styles.box}>
            <img src="./images/cat_img4.png" alt="" />
            <h3>Televisions</h3>
          </a>

          <a href="#" className={styles.box}>
            <img src="./images/cat_img5.png" alt="" />
            <h3>Televisions</h3>
          </a>

          <a href="#" className={styles.box}>
            <img src="./images/cat_img6.png" alt="" />
            <h3>Televisions</h3>
          </a>

          <a href="#" className={styles.box}>
            <img src="./images/cat_img7.png" alt="" />
            <h3>Televisions</h3>
          </a>
        </div>
      </section>

      <section className={styles.products}>
        <h1 className={styles.heading}>
          Featured <span>Products</span>
        </h1>

        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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

          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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

          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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

          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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

          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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

          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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

          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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

          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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

          <div className={styles.box}>
            <div className={styles.image}>
              <img
                src="./images/product-1.jpg"
                className={styles.mainImg}
                alt=""
              />
              <img
                src="./images/product-1-hover.jpg"
                className={styles.hoverImg}
                alt=""
              />
              <div className={styles.icons}>
                <a href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
            <div className={styles.content}>
              <h3>Smart Phone</h3>
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
        </div>
      </section>
    </>
  );
};

export default Products;
