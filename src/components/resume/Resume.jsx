import Title from "../layouts/Title";

import Skills from "./Skills";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Resume" />
      </div>

      <div className="lg:px-[200px]">
        <Skills />
      </div>
    </section>
  );
};

export default Resume;
