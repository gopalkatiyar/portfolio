import React from 'react'
import { bannerImg } from '../../assets';

const RightBanner = () => {
  return (
    <div className="w-1/2 flex relative ">
      <img
        className="w-[80%] h-[70%] lg:h-[70%] z-10 p-10 lg:p-10"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner