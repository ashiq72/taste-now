import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="https://i.postimg.cc/qRThVw8d/Taste-now.png"
          alt="logo"
          height={35}
          width={170}
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
        </div>
      </div>
    </div>
  );
}

export default Header;
