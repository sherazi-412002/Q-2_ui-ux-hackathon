import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="w-full lg:w-[1440px] h-auto lg:h-[505px] flex flex-col justify-between px-6 py-4 lg:px-[100px] lg:pt-[48px] lg:pb-[38px]">
        {/* Top section */}
        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between">
          <div className="space-y-4 lg:space-y-10 text-center lg:text-left">
            <h2 className="font-bold text-[24px]">Funiro.</h2>
            <p className="text-text1">
              400 University Drive Suite 200 Coral <br />
              Gables, <br />
              FL 33134 USA
            </p>
          </div>

          <div className="text-center lg:text-left">
            <ul className="space-y-4 lg:space-y-10">
              <li className="text-[16px] font-medium text-text1">Links</li>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/shop'}>Shop</Link>
              </li>
              <li>
                <Link href={'/blog'}>Blog</Link>
              </li>
              <li>
                <Link href={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <ul className="space-y-4 lg:space-y-10">
              <li className="text-[16px] font-medium text-text1">Help</li>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <ul className="space-y-4 lg:space-y-10">
              <li>
                <p className="text-[16px] font-medium text-text1">Newsletter</p>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:leading-none">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="w-[60%] lg:w-auto mb-2 lg:mb-0 placeholder:text-[14px] placeholder:underline placeholder:text-text1 border border-gray-300 p-2 rounded-md"
                />
                <p className="text-[14px] font-medium underline cursor-pointer ml-2">SUBSCRIBE</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t-2 border-t-text1 mt-10 pt-6">
          <p className="text-center flex lg:items-end justify-center">2023 furino. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;