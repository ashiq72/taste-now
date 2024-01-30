import React from "react";
import styles from "./MenuMobile.module.css";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function MenuMobile({ handleMoblileMenu }) {
  return (
    <div className={styles.mobile_menu}>
      <span onClick={handleMoblileMenu} className={styles.close_btn}>
        <IoMdClose />
      </span>
      <Link onClick={handleMoblileMenu} href="/" className={styles.logo}>
        Taste now
      </Link>
      <div className={styles.menulists}>
        <Link onClick={handleMoblileMenu} className={styles.link} href="">
          Home
        </Link>
        <Link onClick={handleMoblileMenu} className={styles.link} href="">
          About Us
        </Link>
        <Link onClick={handleMoblileMenu} className={styles.link} href="">
          Blog
        </Link>
        <Link onClick={handleMoblileMenu} className={styles.link} href="">
          Contact Us
        </Link>
        <Link onClick={handleMoblileMenu} href="">
          <button className={styles.button}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
