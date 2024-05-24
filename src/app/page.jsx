import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>Creative Thought Agency</h1>
        <p className={styles.desc}>
          {"Creative Thought Agency"}is a dynamic blog, fostering creativity
          through insightful articles and inspiring content. With
          thought-provoking discussions, we empower individuals to unleash their
          creative potential. Join us on a journey of discovery and inspiration.
        </p>
        <div className={styles.boxes}>
          <button className={styles.learn} type="button">
            Learn More
          </button>
          <button className={styles.contact} type="button">
            Contact
          </button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands" fill />
        </div>
      </div>

      <div className={styles.imagecontainer}>
        <Image
          src="/OIGG.jpeg"
          alt="home"
          width={500}
          height={520}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Home;
