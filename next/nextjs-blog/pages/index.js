import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.scss'
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
      <Image
            src="/images/avator.jpg"
            alt="avator"
            width={90}
            height={90}
            className={styles.avator}
          ></Image>
        <span>Blog</span>
      </section>
    </Layout>
  );
}