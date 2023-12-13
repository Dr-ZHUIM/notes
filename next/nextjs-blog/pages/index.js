import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.scss";
      
export default function Home({ allPostsData }) {

  return (
    <>
      <Head>
        <title>Dr.Zhuim</title>
      </Head>
      {/* avatar */}
      <section>
        <div className="flex-row flex-a-c">
          <Image
            src="/images/avator.jpg"
            alt="avator"
            width={90}
            height={90}
            className={styles.avatar}
          ></Image>
          <div className={styles.avatar_intro}>
            <h1 className={styles.avatar_text}>Dr.Zhuim</h1>
            <p>China / Front-End Engineer / Aurora Enterprise</p>
          </div>
        </div>
      </section>
      {/* index-content */}
      <section className={styles.contents}>
        <p>
          Hi! My name is Dr.Zhuim <span>(if you want, you can also call me François, that's my French name)</span>, a front-end engineer in SuZhou, majoring in Français, working in Aurora.
        </p>
        <p>
          My dream is making my every engrossing idea come true. I focus on developing application based on React or React-Native. At my next goal, I will figure out the Vite and create some 
          fantastic Vite plugins for a bigger improvement.
        </p>
        <p>
          Outside of programming, i enjoy doing paints and travaling. If you are interested in travaling too, let's share photos or memories with each other!
        </p>
        <hr/>
        <p>
          Find me on <a href="https://github.com/Dr-ZHUIM" target="_blank">Github</a> or my Email a372919916@gmail.com.
        </p>
      </section>
    </>
  );
}
