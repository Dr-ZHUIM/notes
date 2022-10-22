import styles from "./projectCard.module.scss";
import Image from "next/image";

export default function ProjectCard(props) {
  const { data } = props;
  return (
    <div className={`flex-row flex-j-b flex-a-c flex-wrapper ${styles.wrapper}`}>
      <div className={`pos-re ${styles.icon}`}>
        <Image layout="fill" src={`/images/${data.icon}`} alt=""></Image>
      </div>
      <div className={styles.intro_wrapper}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.description}>{data.description}</div>
      </div>
    </div>
  );
}
