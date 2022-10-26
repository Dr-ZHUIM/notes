import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { navRouters } from "../config/routers";
import styles from "./layout.module.scss";

const name = "Your Name";

export default function Layout({ children }) {
  const [colorMode, setColorMode] = useState("light");

  const changeColorMode = () => {
    setColorMode((currentColor) => {
      let nextColor = currentColor === "dark" ? "light" : "dark";
      return nextColor;
    });
  };

  return (
    <div color-mode={colorMode} className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* navbarBox */}
      <section className={`${styles.navbarBox} flex-j-b flex-a-c`}>
        <Link href="/">
          <a>
            <div className={styles.sign}>
              <Image
                src="/images/sign.png"
                alt="mysign"
                layout="fill"
                priority={true}
              ></Image>
            </div>
          </a>
        </Link>
        <div className="flex-all flex-a-c flex-j-e flex-row">
          {navRouters.map((router) => (
            <Link key={router.id} href={router.href}>
              <a className={styles.navItems}>{router.id}</a>
            </Link>
          ))}
          {/* github */}
          <a
            className={`${styles.navItems} flex-row flex-a-c`}
            href="https://github.com/Dr-ZHUIM"
            target="_blank"
          >
            <Image
              src="/images/github.png"
              alt="github_img"
              width={24}
              height={24}
            ></Image>
          </a>
          {/* colormode */}
          <a onClick={changeColorMode} className={`flex-row flex-a-c ${styles.navbar_btn} ${styles.navItems}`}>
            <Image
              src="/images/colorMode.png"
              alt="colorMode_img"
              width={24}
              height={24}
            ></Image>
          </a>
        </div>
      </section>
      {/* content-slot */}
      <main className={`${styles.mainBox} flex-col`}>{children}</main>
    </div>
  );
}
