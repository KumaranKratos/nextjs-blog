import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(process.env.URL + `api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgcontainer}>
          <Image
            src={post.img ? post.img : "/OIG1.jpeg"}
            alt="n"
            height={500}
            width={500}
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.dtitle}>Published</span>
            <span className={styles.dvalue}>{post.createdAt}</span>
          </div>
        </div>
        <div className={styles.desc}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
