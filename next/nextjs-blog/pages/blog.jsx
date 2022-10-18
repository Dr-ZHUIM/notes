import { useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { getSortedBlogsData } from "../lib/post";

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
    <Layout>
      {props.allBlogsData.map((blogData) => {
        return (
          <Link href={`/blog/${blogData.id}`} key={blogData.id}>
            <div>
              <p>{blogData.id}</p>
              <p>{blogData.date}</p>
            </div>
          </Link>
        );
      })}
    </Layout>
  );
}
