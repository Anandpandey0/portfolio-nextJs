import Header from "@/components/Header";
import Image from "next/image";

import { AiFillGithub, AiFillLock } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import lock from "../../public/lock.png";

import Head from "next/head";

import Link from "next/link";
import Timer from "@/components/timer";

// import "react-device-frameset/dist/styles/marvel-devices.min.css";
const Projects = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="grid xl:grid-cols-3 lg:grid-cols-2   gap-4 lg:ml-20  ">
        {projects.map((project) => (
          <div
            className="border-solid border-4  cursor-pointer hover:border-[#a681cc]  lg:w-5/6 w-[90%] h-fit md:h-[100vh]  p-4   block mx-auto shadow-md transition-shadow duration-500 hover:shadow-lg relative"
            key={project._id}
          >
            <div className="h-[30vh]  w-full p-2 relative ">
              <Image
                src={project.img}
                alt=""
                fill
                className="object-contain "
              />
            </div>

            <h1 className="pt-8 mb-4 text-center font-semibold text-2xl">
              {project.name}
            </h1>
            <div className="flex flex-col h-1/2  justify-between  ">
              <p className="p-2 text-center xl:h-[328px]">
                {project.desc.length > 500
                  ? project.desc.substring(0, 400) + "..."
                  : project.desc}
              </p>
              <div className="flex items-center justify-center gap-10 w-full flex-wrap mb-8">
                <Link href={project.github} target="_blank">
                  <button className="flex items-center bg-[#a681cc] p-2 px-4 text-white hover:bg-[#9662cb] ">
                    <AiFillGithub size="1.5rem" className="mx-2" /> Github
                  </button>
                </Link>
                {/* {console.log(project.name + ":" + project.demo.length)} */}
                {/* {projects.demo && projects.demo.length > 0
                  ? console.log(projects.demo.length)
                  : console.log("0")} */}
                {project.demo && project.demo.length > 0 && (
                  <Link href={project.demo} target="_blank">
                    <button className="flex items-center bg-[#a681cc] p-2 px-4 text-white hover:bg-[#9662cb]">
                      <BsDisplay size="1.5rem" className="mx-2" /> Demo
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await fetch(
    "https://anandpandey-portfolio.vercel.app/api/getProjects"
  );
  const projects = await res.json();
  return {
    props: {
      projects,
    },
  };
}
export default Projects;
