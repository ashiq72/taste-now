import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <h1>Taste now</h1>
          <div className={styles.social}>
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <FaSquareInstagram />
            </span>
            <span>
              <FaTwitterSquare />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>
        </div>
        <div className={styles.links}>
          <Link href="">Seslendirme ve Alt Jazz</Link>
          <Link href="">Media Market</Link>
          <Link href="">Gillie</Link>
          <Link href="">Size Last</Link>
        </div>
        <div className={styles.links}>
          <Link href="">Self Betimes</Link>
          <Link href="">Yatırımcı İlişkileri</Link>
          <Link href="">Basal Himmler</Link>
        </div>
        <div className={styles.links}>
          <Link href="">Yard Market</Link>
          <Link href="">Is İmkanları</Link>
          <Link href="">Car Tercihleri</Link>
        </div>
        <div className={styles.links}>
          <Link href="">Hedge Karla</Link>
          <Link href="">Mullein Koşulları</Link>
          <Link href="">Autumnal Bulgier</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
