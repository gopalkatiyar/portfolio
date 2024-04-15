import React from 'react'
import { bannerImg } from '../../assets';

const RightBanner = () => {
  return (
    <div className="w-1/2 flex relative ">
      <img
        className="w-[120%] h-[100%] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div
        className="absolute bottom-0 w-[350px] h-[380px] ml-20 mb-[150px] lgl:w-[500px] lgl:h-[500px] 
		bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex
		 justify-center items-center"
      ></div>
    </div>
  );
}

export default RightBanner