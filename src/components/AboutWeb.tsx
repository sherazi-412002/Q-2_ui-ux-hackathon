import React from 'react';
import trophy from '../../public/trophy 1.png';
import guarantee from '../../public/guarantee.png';
import shipping from '../../public/shipping.png';
import supportIcon from '../../public/customer-support.png';
import Image from 'next/image';

function AboutWeb() {
  return (
    <section className="w-full bg-primary2 lg:w-[1440px] h-auto lg:h-[270px] mx-auto p-5 lg:p-0 lg:px-[53px] flex justify-center lg:items-center ">
      <div className="flex flex-col lg:flex-row  gap-10 lg:gap-[56px] items-center">
        {/* High Quality */}
        <div className="flex gap-4 lg:gap-[2px]  items-center text-center lg:text-left">
          <Image
            src={trophy}
            alt="quality"
            width={1000}
            height={1000}
            className="w-[60px] h-[60px]"
          />
          <div className="flex flex-col gap-1 lg:gap-[2px]">
            <h2 className="text-[18px] lg:text-[25px] font-semibold text-[#242424]">
              High Quality
            </h2>
            <p className="text-[16px] lg:text-[20px] font-medium text-[#898989]">
              crafted from top materials
            </p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex gap-4 lg:gap-[2px] items-center text-center lg:text-left">
          <Image
            src={guarantee}
            alt="quality"
            width={1000}
            height={1000}
            className="w-[60px] h-[60px]"
          />
          <div className="flex flex-col gap-1 lg:gap-[2px]">
            <h2 className="text-[18px] lg:text-[25px] font-semibold text-[#242424]">
              Warranty Protection
            </h2>
            <p className="text-[16px] lg:text-[20px] font-medium text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex gap-4 lg:gap-[2px] items-center text-center lg:text-left">
          <Image
            src={shipping}
            alt="quality"
            width={1000}
            height={1000}
            className="w-[60px] h-[60px]"
          />
          <div className="flex flex-col gap-1 lg:gap-[2px]">
            <h2 className="text-[18px] lg:text-[25px] font-semibold text-[#242424]">
              Free Shipping
            </h2>
            <p className="text-[16px] lg:text-[20px] font-medium text-[#898989]">
              Order over 150 $
            </p>
          </div>
        </div>

        {/* 24 / 7 Support */}
        <div className="flex gap-4 lg:gap-[2px] items-center text-center lg:text-left">
          <Image
            src={supportIcon}
            alt="quality"
            width={1000}
            height={1000}
            className="w-[60px] h-[60px]"
          />
          <div className="flex flex-col gap-1 lg:gap-[2px]">
            <h2 className="text-[18px] lg:text-[25px] font-semibold text-[#242424]">
              24 / 7 Support
            </h2>
            <p className="text-[16px] lg:text-[20px] font-medium text-[#898989]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutWeb;