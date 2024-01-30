"use client";
import React from "react";
import Image from "next/image";
import styles from "./Categories.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoPizzaSharp } from "react-icons/io5";
import { CiBurger } from "react-icons/ci";
import { TbSalad } from "react-icons/tb";
import { FaBurger } from "react-icons/fa6";

function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Our Popular <span>Categories</span>
          </h1>
        </div>
        <div className={styles.slide}>
          <div className={styles.categorie_items}>
            <div>
              <span>
                <IoPizzaSharp />
              </span>
              <h1>Pizzas</h1>
            </div>
            <div>
              <span>
                <CiBurger />
              </span>
              <h1>Burgers</h1>
            </div>
            <div>
              <span>
                <TbSalad />
              </span>
              <h1>Salads</h1>
            </div>
            <div>
              <span>
                <FaBurger />
              </span>
              <h1>Combos</h1>
            </div>
          </div>
          <div className=" z-10">
            <div className="">
              {/* Slider for large screen  */}
              <div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Pagination]}
                  // className="mySwiper"
                  className={styles.swiper}
                >
                  <SwiperSlide>
                    <div className={styles.slide_card}>
                      <Image
                        src="https://i.postimg.cc/nhMFjR8p/pizza-2-1.png"
                        alt="logo"
                        height={300}
                        width={300}
                        className={styles.image1}
                      />
                      <h1>1</h1>
                      <p>Di napoles</p>
                      <h3>$11,99</h3>
                      <button>Add to cart</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.slide_card}>
                      <Image
                        src="https://i.postimg.cc/nhMFjR8p/pizza-2-1.png"
                        alt="logo"
                        height={300}
                        width={300}
                        className={styles.image1}
                      />
                      <h1>2</h1>
                      <p>Di napoles</p>
                      <h3>$11,99</h3>
                      <button>Add to cart</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.slide_card}>
                      <Image
                        src="https://i.postimg.cc/nhMFjR8p/pizza-2-1.png"
                        alt="logo"
                        height={300}
                        width={300}
                        className={styles.image1}
                      />
                      <h1>3</h1>
                      <p>Di napoles</p>
                      <h3>$11,99</h3>
                      <button>Add to cart</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.slide_card}>
                      <Image
                        src="https://i.postimg.cc/nhMFjR8p/pizza-2-1.png"
                        alt="logo"
                        height={300}
                        width={300}
                        className={styles.image1}
                      />
                      <h1>4</h1>
                      <p>Di napoles</p>
                      <h3>$11,99</h3>
                      <button>Add to cart</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.slide_card}>
                      <Image
                        src="https://i.postimg.cc/nhMFjR8p/pizza-2-1.png"
                        alt="logo"
                        height={300}
                        width={300}
                        className={styles.image1}
                      />
                      <h1>5</h1>
                      <p>Di napoles</p>
                      <h3>$11,99</h3>
                      <button>Add to cart</button>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
