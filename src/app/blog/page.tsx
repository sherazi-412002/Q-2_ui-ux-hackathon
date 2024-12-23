import Image from 'next/image';
import React from 'react';
import blogImg1 from '../../../public/Rectangle 68.png';
import blogImg2 from '../../../public/Rectangle 68 (1).png';
import blogImg3 from '../../../public/Rectangle 68 (2).png';

import post1 from '../../../public/Rectangle 69.png';
import post2 from '../../../public/Rectangle 69 (1).png';
import post3 from '../../../public/Rectangle 69 (2).png';
import post4 from '../../../public/Rectangle 69 (3).png';
import post5 from '../../../public/Rectangle 69 (4).png';

import admin from '../../../public/dashicons_admin-users.png';
import calender from '../../../public/uis_calender.png';
import tag from '../../../public/ci_tag.png';
import searchIcon from '../../../public/akar-icons_search (1).png';
import AboutWeb from '@/components/AboutWeb';
import { PaginationOfPages } from '@/components/Pagination';
import Banner from '@/components/Banner';

function page() {
  return (
    <div className="w-full">
      {/* Top Section */}

     <Banner mainPage='Home' pageTitle='Blog' currentPage='Blog'/>        
    

      {/* Blog Content */}
      <div className="flex flex-col px-8 xl:px-0 lg:flex-row gap-[30px] justify-center mt-[88px]">
        <div className="w-full lg:w-[820px] space-y-[40px]">
          {/* Blog Posts */}
          {[{ img: blogImg1, tag: 'Wood', title: 'Going all-in with millennial design' },
            { img: blogImg2, tag: 'Handmade', title: 'Exploring new ways of decorating' },
            { img: blogImg3, tag: 'Wood', title: 'Handmade pieces that took time to make' }].map((post, index) => (
            <div key={index} className="w-full flex flex-col space-y-3">
              <Image
                src={post.img}
                alt={`blog0${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
              <ul className="text-text1 flex gap-5 text-sm md:text-base">
                <li className="flex gap-2">
                  <Image src={admin} alt="admin" className="w-[20px] h-[20px]" />
                  <p>Admin</p>
                </li>
                <li className="flex gap-2">
                  <Image src={calender} alt="calendar" className="w-[20px] h-[20px]" />
                  <p>24 Oct 2024</p>
                </li>
                <li className="flex gap-2">
                  <Image src={tag} alt="tag" className="w-[24px] h-[24px]" />
                  <p>{post.tag}</p>
                </li>
              </ul>
              <h1 className="text-[24px] md:text-[30px] font-medium">{post.title}</h1>
              <p className="text-[14px] md:text-[15px] text-text1 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
              </p>
              <button className="p-3 border-b-2 w-[159px] border-b-black">Read More</button>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[393px] space-y-[40px]">
          {/* Search Box */}
          <div className="relative flex justify-center">
            <input
              type="search"
              className="w-full md:w-[311px] h-[58px] border-2 border-text1 rounded-lg px-4"
            />
            <div className="absolute top-[15px] right-14">
              <Image
                src={searchIcon}
                alt="search"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>

          {/* Categories */}
          <ul className="space-y-10">
            <li className="text-[20px] md:text-[24px] font-medium">Categories</li>
            {[{ name: 'Crafts', count: 2 }, { name: 'Design', count: 8 }, { name: 'Handmade', count: 7 }, { name: 'Interior', count: 1 }, { name: 'Wood', count: 6 }].map((category, index) => (
              <li key={index} className="flex justify-between text-text1">
                <p>{category.name}</p>
                <p>{category.count}</p>
              </li>
            ))}
          </ul>

          {/* Recent Posts */}
          <div>
            <h2 className="text-[20px] md:text-[24px] font-medium">Recent Posts</h2>
            <ul className="mt-[26px] space-y-9">
              {[post1, post2, post3, post4, post5].map((post, index) => (
                <li key={index} className="flex gap-3">
                  <Image
                    src={post}
                    alt={`post${index + 1}`}
                    className="w-[80px] h-[80px] rounded-lg"
                  />
                  <div>
                    <p className="text-[14px]">Sample title {index + 1}</p>
                    <p className="text-[12px] text-text1">03 Aug 2022</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-[60px] mb-[85px]">
       <PaginationOfPages />
      </div>
      <div>
        <AboutWeb/>
      </div>
    </div>
    
  );
}

export default page;





