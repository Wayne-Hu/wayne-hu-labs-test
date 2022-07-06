import type { NextPage } from "next";
import Layout from "../components/Layout";
import { projects } from "../fakes/projects";
import Project from "../modules/home/Project";
import User from "../modules/home/User";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-9/12">
        <User name="Wayne Hu" />
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            from={project.from}
            to={project.to}
            description={project.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
