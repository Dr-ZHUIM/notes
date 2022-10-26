import { getDemos, getProjects } from "../lib/projects";
import ProjectCard from "../components/projectCard";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const projectDatas = getProjects();
  const demoDatas = getDemos();
  return { props: { projectDatas, demoDatas } };
}

export default function Project(props) {
  const { projectDatas, demoDatas } = props;
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <h2>Projects</h2>
      <div className="flex-row flex-wrap">
        {projectDatas.map((data) => {
          return (
            <Link key={data.id} href={data.fileContents.href}>
              <a target="_blank">
                <ProjectCard data={data.fileContents} />
              </a>
            </Link>
          );
        })}
      </div>
      <h2>Demos</h2>
      <div className="flex-row flex-wrap">
        {demoDatas.map((data) => {
          return (
            <Link key={data.id} href={data.fileContents.href}>
              <a target="_blank">
                <ProjectCard data={data.fileContents} />
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
