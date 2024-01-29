import Image from "next/image";
import styles from "./Hero.module.css";

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
          <Image
            src="https://i.postimg.cc/nrw1p4XF/Splash-food-1.png"
            alt="logo"
            height={900}
            width={900}
            className={styles.image1}
          />
          <Image
            src="https://i.postimg.cc/8ky4RSt2/Food-Background-2-1.png"
            alt="logo"
            height={905}
            width={905}
            className={styles.image2}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
