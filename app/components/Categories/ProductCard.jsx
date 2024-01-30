"use client";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./Categories.module.css";

function ProductCard({ item }) {
  console.log(item);
  return (
    <SwiperSlide>
      <div className={styles.slide_card}>
        <Image
          src="https://i.postimg.cc/nhMFjR8p/pizza-2-1.png"
          alt="logo"
          height={300}
          width={300}
          className={styles.image1}
        />
        <h1>{item.name}</h1>
        <p>Di napoles</p>
        <h3>$11,99</h3>
        <button>Add to cart</button>
      </div>
    </SwiperSlide>
  );
}

export default ProductCard;
