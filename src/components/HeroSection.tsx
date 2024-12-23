import React from 'react';

const HeroSection = () => {
  return (
    <div className="HeroSection bg-cover bg-center w-[100%]  h-[500px] lg:h-[717px] mt-[100px] flex justify-center xl:pl-[739px] xl:pt-[170px] ">
      <div className="bg-opacity-60 lg:bg-opacity-100 bg-primary2 space-y-6 p-6 w-[300px] my-auto xl:my-0 rounded-lg h-[330px] lg:h-[443px] lg:w-[643px] lg:pl-[41px] lg:pt-[62px]">
        <p className="font-semibold text-[16px] text-center lg:text-left">New Arrival</p>

        <h2 className="text-3xl lg:text-[52px] font-bold text-primary1 leading-tight text-center lg:text-left">
          <p>Discover Our</p>
          <p>New Collection</p>
        </h2>

        <p className="font-medium text-[14px] lg:text-[18px] text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br className="hidden lg:block" />
          elit tellus, luctus nec ullamcorper mattis.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="w-[180px] xl:w-[222px] h-[50px] lg:h-[74px] bg-primary1 hover:opacity-85 text-white text-sm lg:text-[16px]">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;