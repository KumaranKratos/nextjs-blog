import Link from "next/link";
import styles from "./postCard.module.css";
import Image from "next/image";
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgcontainer}>
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.img}
                alt=""
                height={500}
                width={500}
                className={styles.img}
              />
            </Link>
          </div>
        )}
      </div>
      <span className={styles.date}>
        {post.createdAt ? post.createdAt.slice(0, 10) : ""}
      </span>

      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc.slice(0, 80) + "..."}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
