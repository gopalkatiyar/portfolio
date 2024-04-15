import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
const Features = () => {
  return (
    <section
      id="about"
      className="w-full h-[500px] pb-20 flex border-b-[1px] border-b-black"
    >
      {/* <div className="flex flex-col gap-4 font-titleFont">
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">About</h3>
        <h1 className="text-5xl text-gray-300 font-bold capitalize">What I do</h1>
      </div> */}
     
      <div className="flex flex-col gap-10">
        <div>
          <Title
            title="About"
            des="What I Do"
          />
        </div>

        <div className="flex justify-center items-center">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Features;
