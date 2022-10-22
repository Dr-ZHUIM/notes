import { getDemos, getProjects } from "../lib/projects";
import ProjectCard from "../components/projectCard";
import Link from "next/link";

export async function getStaticProps() {
  const projectDatas = getProjects();
  const demoDatas = getDemos();
  console.log("projectDatas", projectDatas);
  return { props: { projectDatas, demoDatas } };
}

export default function Project(props) {
  const { projectDatas, demoDatas } = props;
  console.log("projectDatas", projectDatas);
  console.log("demoDatas", demoDatas);
  return (
    <>
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
