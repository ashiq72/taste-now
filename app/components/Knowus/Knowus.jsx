import Image from "next/image";
import styles from "./Knowus.module.css";

function Knowus() {
  return (
    <div className={styles.knowus}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Get to know <span>us</span>
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.imagearea}>
            <Image
              src="https://i.postimg.cc/bYCXbt7p/unsplash-Oalh2-Moj-Uuk.png"
              alt=""
              width={618}
              height={435}
            />
          </div>
          <div className={styles.textarea}>
            <h1>
              <span>Teamwork</span> is the key to our sucess
            </h1>
            <p>
              At TasteNow we make sure that every decision is determined by a
              team of us. Everyone´s opinion matters, and as group, we are
              stronger. We firmly belive that team work, makes the dream work.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.textarea}>
            <h1>
              We are all in for the <span>enviroment</span>
            </h1>
            <p>
              At TasteNow we make sure that every decision is determined by a
              team of us. Everyone´s opinion matters, and as group, we are
              stronger. We firmly belive that team work, makes the dream work.
            </p>
          </div>
          <div className={styles.imagearea}>
            <Image
              src="https://i.postimg.cc/bYCXbt7p/unsplash-Oalh2-Moj-Uuk.png"
              alt=""
              width={618}
              height={435}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowus;
