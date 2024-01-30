"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

function Header() {
  const [open, setOpen] = useState(false);
  const handleMoblileMenu = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.container}>
      {open && (
        <MenuMobile
          open={open}
          setOpen={setOpen}
          handleMoblileMenu={handleMoblileMenu}
        />
      )}
      <div className={styles.logoarea}>
        <span onClick={handleMoblileMenu} className={styles.bars_moblie}>
          <HiOutlineBars3BottomLeft />
        </span>
        <Image
          src="https://i.postimg.cc/qRThVw8d/Taste-now.png"
          alt="logo"
          height={35}
          width={170}
          className={styles.logo}
        />
      </div>
      <div className={styles.menulists_container}>
        <div className={styles.menulists}>
          <Link className={styles.link} href="">
            Home
          </Link>
          <Link className={styles.link} href="">
            About Us
          </Link>
          <Link className={styles.link} href="">
            Blog
          </Link>
          <Link className={styles.link} href="">
            Contact Us
          </Link>
          <Link className={styles} href="">
            <Image
              src="https://i.postimg.cc/7hCfSR40/Shopping-Cart.png"
              alt="logo"
              height={40}
              width={40}
            />
          </Link>
        </div>
        <div>
          <button className={styles.button}>Sign Up</button>
          <Link className={styles.cart_moblie} href="">
            <Image
              src="https://i.postimg.cc/7hCfSR40/Shopping-Cart.png"
              alt="logo"
              height={40}
              width={40}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
