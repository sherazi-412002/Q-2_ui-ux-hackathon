import React from 'react';
import living from '../../public/Image-living room.png';
import dining from '../../public/Mask Group.png';
import bedroom from '../../public/Mask Group (1).png';
import Image from 'next/image';

const RangeSection = () => {
  return (
    <section className="w-full max-w-[1183px] mx-auto mt-[57px] flex flex-col px-6 lg:px-0">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[24px] lg:text-[32px] font-bold text-text2">Browse The Range</h2>
        <p className="text-[16px] lg:text-[20px] text-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Image Grid Section */}
      <div className="flex flex-col md:flex-row gap-[30px] mt-[40px] lg:mt-[63px]">
        {/* Dining Section */}
        <div className="flex flex-col gap-[20px] lg:gap-[30px] items-center">
          <Image
            src={dining}
            alt="Dining Room"
            width={1000}
            height={1000}
            className="w-full max-w-[381px] h-auto lg:h-[480px] rounded-lg"
          />
          <p className="text-[18px] lg:text-[24px] font-semibold text-text2 text-center">Dining</p>
        </div>

        {/* Living Section */}
        <div className="flex flex-col gap-[20px] lg:gap-[30px] items-center">
          <Image
            src={living}
            alt="Living Room"
            width={1000}
            height={1000}
            className="w-full max-w-[381px] h-auto lg:h-[480px] rounded-lg"
          />
          <p className="text-[18px] lg:text-[24px] font-semibold text-text2 text-center">Living</p>
        </div>

        {/* Bedroom Section */}
        <div className="flex flex-col gap-[20px] lg:gap-[30px] items-center">
          <Image
            src={bedroom}
            alt="Bedroom"
            width={1000}
            height={1000}
            className="w-full max-w-[381px] h-auto lg:h-[480px] rounded-lg"
          />
          <p className="text-[18px] lg:text-[24px] font-semibold text-text2 text-center">Bedroom</p>
        </div>
      </div>
    </section>
  );
};

export default RangeSection;
