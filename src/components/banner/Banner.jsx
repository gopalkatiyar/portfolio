import React from 'react'
import LeftBannar from './LeftBannar';
import RightBanner from './RightBanner';
const Banner = () => {
	
  return (
    <section
      id="home"
      className="  py-20 w-full h-[800px] pt-10 pb-20 flex  border-b-[1px] font-titleFont
	border-b-black gap-40 "
    >
      <LeftBannar />
      {/* <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold">
            Hi, I'm <br />
            <span className="text-designColor capitalize">Gopal katiyar</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi
            aperiam libero est aspernatur dolores cupiditate beatae labore
            recusandae non earum quidem neque, eligendi cumque repellat
            praesentium possimus animi! Cumque.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="w-1/2 flex relative ">
        <img
          className="w-[70%] h-[70%] mt-20 z-10"
          src={bannerImg}
          alt="bannerImg"
        />
			  <div className="absolute bottom-0 w-[400px] h-[450px] mb-20 lgl:w-[500px] lgl:h-[500px] 
		bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex
		 justify-center items-center"></div>
      </div> */}
		  <RightBanner/>
    </section>
  );
}

export default Banner