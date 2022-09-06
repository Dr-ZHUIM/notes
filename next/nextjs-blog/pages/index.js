import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/post';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Blog</h2>
      </section>
    </Layout>
  );
}