import styles from "./contact.module.css";
import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src="/contact.jpeg"
          alt="about"
          width={500}
          height={520}
          className={styles.img}
        />
      </div>
      <div className={styles.formcontainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="text" placeholder="Enter Phone Number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="9"
            style={{ fontSize: "15px" }}
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
