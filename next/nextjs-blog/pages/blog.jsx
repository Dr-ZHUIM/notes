import Link from "next/link";
import { getSortedBlogsData } from "../lib/post";
import Head from "next/head";
import styles from "../styles/blog.module.scss";
import moment from "moment";

export async function getStaticProps() {
  const allBlogsData = getSortedBlogsData();
  let blogsData = [];
  allBlogsData.map((blog) => {
    blog.date = moment(blog.date).format("MMM d, YYYY");
  });
  const years = allBlogsData.map((blog) => {
    return blog.date.slice(-4);
  });
  const yearClassification = new Set([...years]);
  yearClassification.forEach((year) => {
    const blogs = allBlogsData.filter((blogsData) => {
      return blogsData.date.slice(-4) === year;
    });
    blogsData.push({ year, blogs });
  });
  blogsData = blogsData.sort(({ year: a }, { year: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  return {
    props: {
      blogsData,
    },
  };
}

export default function Posts(props) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      {props.blogsData.map((blogData) => {
        return (
          <div className={styles.year} key={blogData.year}>
            <p className={styles.year_title}>{blogData.year}</p>
            <hr className={styles.blog_hr} />
            {blogData.blogs.map((blog) => {
              return (
                <div key={blog.id} className={styles.blogItem}>
                  <Link href={`/blog/${blog.id}`}>
                    <p className={styles.title}>{blog.id}</p>
                  </Link>
                  <p className={styles.date}>{blog.date}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
