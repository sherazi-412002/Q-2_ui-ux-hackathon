import React from 'react';

const HeroSection = () => {
  return (
    <div className="HeroSection bg-cover bg-center w-full lg:w-[1440px] h-auto lg:h-[717px] mt-[100px] flex justify-center lg:pl-[739px] lg:pt-[170px] ">
      <div className="bg-transparent lg:bg-primary2 space-y-6 p-6 lg:h-[443px] lg:w-[643px] lg:pl-[41px] lg:pt-[62px]">
        <p className="font-semibold text-[16px] text-center lg:text-left">New Arrival</p>

        <h2 className="text-[36px] lg:text-[52px] font-bold text-primary1 leading-tight text-center lg:text-left">
          <p>Discover Our</p>
          <p>New Collection</p>
        </h2>

        <p className="font-medium text-[14px] lg:text-[18px] text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br className="hidden lg:block" />
          elit tellus, luctus nec ullamcorper mattis.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="w-[180px] lg:w-[222px] h-[50px] lg:h-[74px] bg-primary1 hover:opacity-85 text-white text-[14px] lg:text-[16px]">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;