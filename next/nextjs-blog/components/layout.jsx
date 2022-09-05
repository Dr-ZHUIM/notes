import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import { useState } from 'react';

const name = 'Your Name';
export const siteTitle = 'Le Blog __ François';

export default function Layout({ children, home }) {

  const [colorMode,setColorMode] = useState("dark");

  const changeColorMode = () => {
    setColorMode(currentColor=>{
      console.log(currentColor);
      let nextColor = currentColor === "dark" ? "light" : "dark";
      return nextColor
    })
  }

  return (
    <div color-mode={colorMode} className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className={styles.navbarBox}>
        <Image
         onClick={changeColorMode} 
         src="/images/colorMode.png" 
         alt='colorMode_img' 
         width={36} 
         height={36}></Image>
      </section>
      <main className={styles.mainBox}>{children}</main>
      {/* author-block */}
      <section className={styles.avatarBox}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </div>
  );
}