import React from 'react';
import logo from "../../public/Meubel House_Logos-05.png";
import Image from 'next/image';
import rightIcon from '../../public/dashicons_arrow-down-alt2.png';
import adress from '../../public/Vector (3).png';
import phone from '../../public/Vector (4).png';
import time from '../../public/bi_clock-fill.png';
import AboutWeb from './AboutWeb';

function Contact() {
  return (
    <div>
      {/* Top Section */}
      <div className="TopBackgroundImg w-full lg:w-[1440px] flex flex-col items-center text-center h-[316px] pt-[61px] mt-[100px]">
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className="w-[40px] md:w-[50px] h-[30px] md:h-[40px]"
        />
        <h2 className="text-[32px] md:text-[48px] font-medium">Contact</h2>
        <p className="flex gap-3 text-[14px] md:text-[16px] font-medium">
          Home
          <Image
            src={rightIcon}
            alt="Icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
          Contact
        </p>
      </div>

      {/* Get in Touch Section */}
      <div className="mt-[50px] lg:mt-[98px] flex flex-col justify-center text-center w-full mx-auto max-w-[1140px] px-4 sm:px-6">
        <h2 className="text-[28px] md:text-[36px] font-semibold">
          Get In Touch With Us
        </h2>
        <p className="text-text1 text-[14px] md:text-[16px]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
        </p>
        <p className="text-text1 text-[14px] md:text-[16px]">
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Details and Form */}
      <div className="flex flex-col lg:flex-row justify-center mx-auto mt-[50px] lg:mt-[110px] px-4 sm:px-6 gap-10 lg:gap-[50px] max-w-[1140px]">
        {/* Contact Details */}
        <div className="flex flex-col w-full lg:w-[393px]">
          <ul className="space-y-10">
            <li className="flex gap-5">
              <Image
                src={adress}
                alt="address"
                width={1000}
                height={1000}
                className="w-[22px] h-[27px]"
              />
              <div>
                <p className="text-[20px] md:text-[24px] font-medium">
                  Address
                </p>
                <p className="text-[14px] md:text-[16px]">236 5th SE Avenue, New York</p>
                <p className="text-[14px] md:text-[16px]">NY10000, United States</p>
              </div>
            </li>
            <li className="flex gap-5">
              <Image
                src={phone}
                alt="phone"
                width={1000}
                height={1000}
                className="w-[30px] h-[30px]"
              />
              <div>
                <p className="text-[20px] md:text-[24px] font-medium">Phone</p>
                <p className="text-[14px] md:text-[16px]">Mobile: +(84) 546-6789</p>
                <p className="text-[14px] md:text-[16px]">Hotline: +(84) 456-6789</p>
              </div>
            </li>
            <li className="flex gap-5">
              <Image
                src={time}
                alt="working hours"
                width={1000}
                height={1000}
                className="w-[23px] h-[23px]"
              />
              <div>
                <p className="text-[20px] md:text-[24px] font-medium">
                  Working Time
                </p>
                <p className="text-[14px] md:text-[16px]">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-[14px] md:text-[16px]">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[635px] flex flex-col px-4 sm:px-6 lg:px-[52px]">
          <ul className="space-y-9">
            <li className="flex flex-col gap-[10px]">
              <label className="text-[14px] md:text-[16px] font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Write Your Name Here..."
                className="w-full lg:w-[529px] h-[60px] md:h-[75px] border-2 placeholder:pl-3 rounded-lg border-text1"
              />
            </li>
            <li className="flex flex-col gap-[10px]">
              <label className="text-[14px] md:text-[16px] font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Write Your Email Here..."
                className="w-full lg:w-[529px] h-[60px] md:h-[75px] border-2 placeholder:pl-3 rounded-lg border-text1"
              />
            </li>
            <li className="flex flex-col gap-[10px]">
              <label className="text-[14px] md:text-[16px] font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Write Your Subject Here..."
                className="w-full lg:w-[529px] h-[60px] md:h-[75px] border-2 placeholder:pl-3 rounded-lg border-text1"
              />
            </li>
            <li className="flex flex-col gap-[10px]">
              <label className="text-[14px] md:text-[16px] font-medium">
                Message
              </label>
              <textarea
                placeholder="Write Your Message..."
                className="w-full lg:w-[529px] h-[100px] md:h-[120px] placeholder:pl-3 rounded-lg border-2 border-text1"
              ></textarea>
            </li>
            <li>
              <button
                className="w-full lg:w-[237px] h-[50px] md:h-[55px] bg-primary1 hover:opacity-80 mt-[13px]"
                type="submit"
              >
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
       <br /><br />
      {/* About Section */}
      <div>
        <AboutWeb />
      </div>
    </div>
  );
}

export default Contact;
