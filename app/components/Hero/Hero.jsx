import Image from "next/image";
import styles from "./Hero.module.css";
import bg1 from "@/public/bg1.png";
import bg2 from "@/public/bg2.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text_area}>
          <h1>
            Experience food
            <br />
            <span className={styles}>Delivery </span>
            like no other
          </h1>
          <p>
            We deliver the food of your choice wherever, whenever. Select your
            food from only the top restaurants in the area, and get it in a
            flash. Download the app now to discover more.
          </p>
        </div>
        <div className={styles.image_area}>
          <Image src={bg2} alt="logo" fill priority className={styles.image1} />
          <Image
            src={bg1}
            alt="logo"
            fill
            priority
            // width={450}
            // height={540}
            className={styles.image2}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
