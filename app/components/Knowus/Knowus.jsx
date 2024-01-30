import Image from "next/image";
import styles from "./Knowus.module.css";

function Knowus() {
  return (
    <div className={styles.knowus}>
      <div className={styles.container}>
        <div>
          <h1>
            Get to know <span>us</span>
          </h1>
        </div>
        <div>
          <div>
            <Image
              src="https://i.postimg.cc/bYCXbt7p/unsplash-Oalh2-Moj-Uuk.png"
              alt=""
              width={600}
              height={600}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Knowus;
