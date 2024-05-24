import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          In our digital ventures, we champion audacious ideas: bigger, bolder,
          braver, and better. We defy limits, embracing challenges with courage
          and innovation. With relentless dedication, we craft exceptional
          solutions that inspire and exceed expectations, setting new standards
          in the ever-evolving digital sphere.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2 className={styles.h}>10 K+</h2>
            <p className={styles.p}>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h}>235 K+</h2>
            <p className={styles.p}>People Reached</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.h}>5 K+</h2>
            <p className={styles.p}>Services</p>
          </div>
        </div>
      </div>

      <div className={styles.imagecontainer}>
        <Image
          src="/OIG.jpeg"
          alt="about"
          width={500}
          height={520}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default About;
