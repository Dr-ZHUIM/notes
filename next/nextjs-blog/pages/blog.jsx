import Link from "next/link";
import { getSortedBlogsData } from "../lib/post";
import styles from "../styles/blog.module.scss";

export async function getStaticProps() {
  const allBlogsData = getSortedBlogsData();
  return {
    props: {
      allBlogsData,
    },
  };
}

export default function Posts(props) {
  return (
    <>
      {props.allBlogsData.map((blogData) => {
        return (
          <div  key={blogData.id} className={styles.blogItem}>
            <Link href={`/blog/${blogData.id}`}>
              <p className={styles.title}>{blogData.id}</p>
            </Link>
            <p className={styles.date}>{blogData.date}</p>
          </div>
        );
      })}
    </>
  );
}
