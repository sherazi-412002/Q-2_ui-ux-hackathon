// import Image from 'next/image'
// import React from 'react'
// import rightIcon from '../../../public/dashicons_arrow-down-alt2.png'
// import blogImg1 from '../../../public/Rectangle 68.png'
// import blogImg2 from '../../../public/Rectangle 68 (1).png'
// import blogImg3 from '../../../public/Rectangle 68 (2).png'

// import post1 from '../../../public/Rectangle 69.png'
// import post2 from '../../../public/Rectangle 69 (1).png'
// import post3 from '../../../public/Rectangle 69 (2).png'
// import post4 from '../../../public/Rectangle 69 (3).png'
// import post5 from '../../../public/Rectangle 69 (4).png'

// import admin from '../../../public/dashicons_admin-users.png'
// import calender from '../../../public/uis_calender.png'
// import tag from '../../../public/ci_tag.png'
// import pagination from '../../../public/Frame 72.png'
// import searchIcon from '../../../public/akar-icons_search (1).png'




// function page() {
//   return (
//     <div className='w-[1440px]'>
        
//         {/* topSection */}

//         <div className="TopBackgroundImg w-full lg:w-[1440px] flex flex-col items-center text-center h-[316px] pt-[121px] mt-[100px]">
//            <h2 className="text-[32px] md:text-[48px] font-medium">Blog</h2>
//            <p className="flex gap-3 text-[14px] md:text-[16px] font-medium">
//            Home
//            <Image
//             src={rightIcon}
//             alt="Icon"
//             width={20}
//             height={20}
//             className="w-[20px] h-[20px]"
//             />
//             Blog
//             </p>
//          </div>


//          {/* Blog Content */}

//          <div className='flex flex-row gap-[30px] justify-center mt-[88px]'>

//            <div>

//               <div className='w-[820px] h-[794px] flex flex-col space-y-3'>
//                 <Image src={blogImg1} alt='blog01' width={1000} height={1000} className='w-[817px] h-[500px]'/>
//                 <ul className='text-text1 flex gap-5'>
//                   <li className='flex gap-2'>
//                     <Image src={admin} alt='admin' width={1000} height={1000} className='w-[20px] h-[20px]'/>
//                     <p>Admin</p>
//                   </li>
//                   <li className='flex gap-2'>
//                     <Image src={calender} alt='admin' width={1000} height={1000} className='w-[20px] h-[20px]'/>
//                     <p>24 Oct 2024</p>
//                   </li>
//                   <li className='flex gap-2'>
//                     <Image src={tag} alt='admin' width={1000} height={1000} className='w-[24px] h-[24px]'/>
//                     <p>Wood</p>
//                   </li>
//                 </ul>
//                 <h1 className='text-[30px] font-medium'>Going all-in with millennial design</h1>
//                 <p className='text-[15px] text-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
//                  dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
//                   aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
//                    in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
//                     ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
//                 <button className='p-3 border-b-2 w-[159px] border-b-black'>Read More</button>


//               </div>

//               <div className='w-[820px] h-[794px] flex flex-col space-y-3'>
//                 <Image src={blogImg2} alt='blog01' width={1000} height={1000} className='w-[817px] h-[500px]'/>
//                 <ul className='text-text1 flex gap-5'>
//                   <li className='flex gap-2'>
//                     <Image src={admin} alt='admin' width={1000} height={1000} className='w-[20px] h-[20px]'/>
//                     <p>Admin</p>
//                   </li>
//                   <li className='flex gap-2'>
//                     <Image src={calender} alt='admin' width={1000} height={1000} className='w-[20px] h-[20px]'/>
//                     <p>24 Oct 2024</p>
//                   </li>
//                   <li className='flex gap-2'>
//                     <Image src={tag} alt='admin' width={1000} height={1000} className='w-[24px] h-[24px]'/>
//                     <p>Handmade</p>
//                   </li>
//                 </ul>
//                 <h1 className='text-[30px] font-medium'>Exploring new ways of decorating</h1>
//                 <p className='text-[15px] text-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
//                  dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
//                   aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
//                    in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
//                     ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
//                 <button className='p-3 border-b-2 w-[159px] border-b-black'>Read More</button>


//               </div>

//               <div className='w-[820px] h-[794px] flex flex-col space-y-3'>
//                 <Image src={blogImg3} alt='blog01' width={1000} height={1000} className='w-[817px] h-[500px]'/>
//                 <ul className='text-text1 flex gap-5'>
//                   <li className='flex gap-2'>
//                     <Image src={admin} alt='admin' width={1000} height={1000} className='w-[20px] h-[20px]'/>
//                     <p>Admin</p>
//                   </li>
//                   <li className='flex gap-2'>
//                     <Image src={calender} alt='admin' width={1000} height={1000} className='w-[20px] h-[20px]'/>
//                     <p>24 Oct 2024</p>
//                   </li>
//                   <li className='flex gap-2'>
//                     <Image src={tag} alt='admin' width={1000} height={1000} className='w-[24px] h-[24px]'/>
//                     <p>Wood</p>
//                   </li>
//                 </ul>
//                 <h1 className='text-[30px] font-medium'>Handmade pieces that took time to make</h1>
//                 <p className='text-[15px] text-text1 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
//                  dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
//                   aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
//                    in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
//                     ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
//                 <button className='p-3 border-b-2 w-[159px] border-b-black'>Read More</button>


//               </div>

//            </div>
//            <div>

//               <div className='w-[393px] h-[537px]'>
//                 <div className='relative flex justify-center'>
//                   <input type="search" className='w-[311px] h-[58px] border-2 border-text1 rounded-lg' />
//                   <div className='absolute top-[15px] right-14'><Image src={searchIcon} alt='search' width={1000} height={1000} className='w-[24px] h-[24px]'/></div>
//                 </div>
//                 <ul className='w-[251px] h-[353px] ml-[77px] mt-4 space-y-10'>
//                   <li className='text-[24px] font-medium'>Ctegories</li>
//                   <li className='flex justify-between text-text1'>
//                     <p>Crafts</p>
//                     <p>2</p>
//                   </li>
//                   <li className='flex justify-between text-text1'>
//                     <p>Design</p>
//                     <p>8</p>
//                   </li>
//                   <li className='flex justify-between text-text1'>
//                     <p>Handmade</p>
//                     <p>7</p>
//                   </li>
//                   <li className='flex justify-between text-text1'>
//                     <p>Interior</p>
//                     <p>1</p>
//                   </li>
//                   <li className='flex justify-between text-text1'>
//                     <p>Wood</p>
//                     <p>6</p>
//                   </li>
//                 </ul>

//               </div>
//               <div className='w-[393px] h-[650px] pt-[16px] pl-[76px]'>

//                 <h2 className='text-[24px] font-medium'>Recent Posts</h2>
//                 <ul className='mt-[26px] flex flex-col space-y-10'>
//                   <li className='flex gap-3'>
//                     <Image src={post1} alt='post1' width={1000} height={1000} className='w-[80px] h-[80px] rounded-lg'/>
//                     <div>
//                       <p className='text-[14px]'>Going all-in with</p>
//                       <p className='text-[14px]'>millennial design</p>
//                       <p className='text-[12px] text-text1'>03 Aug 2022</p>
//                     </div>

//                   </li>
//                   <li className='flex gap-3'>
//                     <Image src={post2} alt='post1' width={1000} height={1000} className='w-[80px] h-[80px] rounded-lg'/>
//                     <div>
//                       <p className='text-[14px]'>Exploring new ways</p>
//                       <p className='text-[14px]'> of decorating</p>
//                       <p className='text-[12px] text-text1'>03 Aug 2022</p>
//                     </div>
//                   </li>
//                   <li className='flex gap-3'>
//                     <Image src={post3} alt='post1' width={1000} height={1000} className='w-[80px] h-[80px] rounded-lg'/>
//                     <div>
//                       <p className='text-[14px]'>Handmade pieces </p>
//                       <p className='text-[14px]'>that took time to make</p>
//                       <p className='text-[12px] text-text1'>03 Aug 2022</p>
//                     </div>
//                   </li>
//                   <li className='flex gap-3'>
//                     <Image src={post4} alt='post1' width={1000} height={1000} className='w-[80px] h-[80px] rounded-lg'/>
//                     <div>
//                       <p className='text-[14px]'>Modern home in </p>
//                       <p className='text-[14px]'>Milan</p>
//                       <p className='text-[12px] text-text1'>03 Aug 2022</p>
//                     </div>
//                   </li>
//                   <li className='flex gap-3'>
//                     <Image src={post5} alt='post1' width={1000} height={1000} className='w-[80px] h-[80px] rounded-lg'/>
//                     <div>
//                       <p className='text-[14px]'>Colorful office</p>
//                       <p className='text-[14px]'> redesign</p>
//                       <p className='text-[12px] text-text1'>03 Aug 2022</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//            </div>
//          </div>

//          <div className="flex justify-center">
//         <Image
//           src={pagination}
//           alt="numberLine"
//           className="w-[292px] md:w-[392px] h-[60px] md:h-[90px] mt-[40px] mb-[85px]"
//         />
//       </div>
//     </div>
//   )
// }

// export default page


import Image from 'next/image';
import React from 'react';
import rightIcon from '../../../public/dashicons_arrow-down-alt2.png';
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
import pagination from '../../../public/Frame 72.png';
import searchIcon from '../../../public/akar-icons_search (1).png';

function page() {
  return (
    <div className="w-full px-4 md:px-8 lg:w-[1440px] mx-auto">
      {/* Top Section */}
      <div className="TopBackgroundImg w-full flex flex-col items-center text-center h-[316px] pt-[121px] mt-[100px]">
        <h2 className="text-[32px] md:text-[48px] font-medium">Blog</h2>
        <p className="flex gap-3 text-[14px] md:text-[16px] font-medium">
          Home
          <Image
            src={rightIcon}
            alt="Icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
          Blog
        </p>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col lg:flex-row gap-[30px] justify-center mt-[88px]">
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
      <div className="flex justify-center">
        <Image
          src={pagination}
          alt="pagination"
          className="w-[200px] md:w-[292px] lg:w-[392px] h-[40px] md:h-[60px] lg:h-[90px] mt-[40px] mb-[85px]"
        />
      </div>
    </div>
  );
}

export default page;
