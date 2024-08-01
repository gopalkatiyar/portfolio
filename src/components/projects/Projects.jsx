import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food-delivery website"
          des="Developed a comprehensive food delivery application featuring a responsive frontend, backend, and an
intuitive admin panel."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="Developed a full-stack, real-time chat application using the MERN (MongoDB, Express.js, React, Node.js)
stack."
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE (working on it)"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects