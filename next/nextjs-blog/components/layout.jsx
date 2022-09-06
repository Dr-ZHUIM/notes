import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import { useState } from 'react';

const name = 'Your Name';
export const siteTitle = 'Le Blog __ François';

export default function Layout({ children, home }) {

  const [colorMode,setColorMode] = useState("light");

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
         width={24} 
         height={24}></Image>
      </section>
      <main className={styles.mainBox}>{children}</main>
      {/* author-block */}
      <main className={styles.avatorBox}>
        <div className={styles.avatorTop}>
          <Image
            src="/images/avator.jpg"
            alt='avator'
            width={180}
            height={180}
            className={styles.avatorTopImg}
          ></Image>
        </div>
        <p>Hi! My name is Zhuim , a front-end engineer. Welcome to my Blog . Now I am reseraching Vite + React ecosystem . Let's learn and discuss together ! </p>
        <p>
          What you believe may create a elegant star night. 
        </p>
      </main>
    </div>
  );
}
