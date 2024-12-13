// import Image from 'next/image'
// import React from 'react'
// import logo from "../../../public/Meubel House_Logos-05.png";
// import rightIcon from '../../../public/dashicons_arrow-down-alt2.png'
// import cartItem from '../../../public/Group 146.png'
// import deleteIcon from '../../../public/ant-design_delete-filled.png'
// // import AboutWeb from '@/components/AboutWeb';

// const page = () => {
//   return (
//     <div>

//       {/* Top Section */}
//         <div className="TopBackgroundImg w-full lg:w-[1440px] flex flex-col items-center text-center h-[316px] pt-[61px] mt-[100px]">
//         <Image
//           src={logo}
//           alt="logo"
//           width={1000}
//           height={1000}
//           className="w-[60px] md:w-[66px] h-[50px] md:h-[40px]"
//         />
//         <h2 className="text-[32px] md:text-[48px] font-medium">Cart</h2>
//         <p className="flex gap-3 text-[14px] md:text-[16px] font-medium">
//           Home
//           <Image
//             src={rightIcon}
//             alt="Icon"
//             width={20}
//             height={20}
//             className="w-[20px] h-[20px]"
//           />
//           Cart
//         </p>
//       </div>

//       {/* Cart Secttion */}

//       <div className='w-[1440px] h-[525px]  pt-[72px] px-[100px] flex justify-between'>


//         <div className='w-[817px] h-[215px] flex flex-col justify-between'>

//           <div className='h-[55px] w-[817px] flex items-center justify-around bg-primary2'>

//             <ul className='text-[16px] font-medium flex flex-row gap-28'>
//               <li>Product</li>
//               <li>Price</li>
//               <li className='flex gap-24 items-center'>
//                 <div>Quantity</div>
//                 <div>Subtotal</div>
//               </li>
//             </ul>
            
//           </div>

//           <div>
//              <ul className='flex justify-between items-center'>
//               <li className='flex gap-10 items-center'>
//                <Image
//                   src={cartItem}
//                   alt="logo"
//                   width={1000}
//                   height={1000}
//                   className="w-[108px] h-[105px]"
//                 />
//               <p className='text-text1'>Asgaard sofa</p></li>
//               <li className='text-text1'>Rs. 250,000.00</li>
//               <li className='p-1 text-center border-2 h-[32px] w-[32px]'>1</li>
//               <li>Rs. 25,000.00</li>
//               <li>
//                 <Image
//                   src={deleteIcon}
//                   alt="logo"
//                   width={1000}
//                   height={1000}
//                   className="w-[28px] h-[28px]"
//                  />
//               </li>
//              </ul>
//           </div>

//         </div>

//         <div className='bg-primary2 w-[393px] h-[390px] flex flex-col space-y-[60px] items-center'>

//           <h2 className='text-[32px] font-bold mt-4'>Cart Totals</h2>
//           <ul className='flex flex-col space-y-8'>
//             <li className='flex justify-between'>
//               <div>Subtotal</div>
//               <div>250,000.00</div>
//             </li>
//             <li className='flex justify-between'>
//               <div>Total</div>
//               <div className='text-primary1'>250,000.00</div>
//             </li>
//             <li>
//               <button className='p-3 border-2 h-[59px] w-[222px] border-black rounded-lg'>Check Out</button>
//             </li>
//           </ul>

//         </div>

       
//       </div>

      
//       <div>
//         {/* <AboutWeb/> */}
//       </div>
//     </div>
//   )
// }

// export default page



import Image from 'next/image'
import React from 'react'
import logo from "../../../public/Meubel House_Logos-05.png";
import rightIcon from '../../../public/dashicons_arrow-down-alt2.png'
import cartItem from '../../../public/Group 146.png'
import deleteIcon from '../../../public/ant-design_delete-filled.png'
import AboutWeb from '@/components/AboutWeb';

const page = () => {
  return (
    <div>

      {/* Top Section */}
        <div className="TopBackgroundImg w-full lg:w-[1440px] flex flex-col items-center text-center h-[316px] pt-[61px] mt-[100px] px-4 sm:px-8">
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className="w-[60px] md:w-[66px] h-[50px] md:h-[40px]"
        />
        <h2 className="text-[32px] md:text-[48px] font-medium">Cart</h2>
        <p className="flex gap-3 text-[14px] md:text-[16px] font-medium">
          Home
          <Image
            src={rightIcon}
            alt="Icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
          Cart
        </p>
      </div>

      {/* Cart Section */}

      <div className='w-full lg:w-[1440px] h-auto lg:h-[525px] pt-[72px] px-4 sm:px-8 lg:px-[100px] flex flex-col lg:flex-row justify-between'>

        <div className='w-full lg:w-[817px] h-auto flex flex-col'>

          <div className='h-[55px] w-full lg:w-[817px] flex items-center justify-around bg-primary2'>

            <ul className='text-[16px] font-medium flex flex-row gap-10 sm:gap-16 lg:gap-28'>
              <li>Product</li>
              <li className='hidden lg:block'>Price</li>
              <li className='flex gap-12 sm:gap-20 lg:gap-24 items-center'>
                <div>Quantity</div>
                <div>Subtotal</div>
              </li>
            </ul>
            
          </div>

          <div className='mt-4'>
             <ul className='flex flex-wrap justify-between items-center gap-4'>
              <li className='flex gap-4 sm:gap-6 lg:gap-10 items-center'>
               <Image
                  src={cartItem}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[80px] sm:w-[100px] lg:w-[108px] h-[80px] sm:h-[100px] lg:h-[105px]"
                />
              <p className='text-text1'>Asgaard sofa</p></li>
              <li className='text-text1 hidden lg:block'>Rs. 250,000.00</li>
              <li className='p-1 text-center border-2 h-[32px] w-[32px]'>1</li>
              <li>Rs. 25,000.00</li>
              <li>
                <Image
                  src={deleteIcon}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[24px] sm:w-[28px] h-[24px] sm:h-[28px]"
                 />
              </li>
             </ul>
          </div>

        </div>

        <div className='bg-primary2 w-full lg:w-[393px] h-auto p-5 lg:p-0 lg:h-[390px] flex flex-col space-y-8 lg:space-y-[60px] items-center mt-8 mb-20 lg:mb-0 lg:mt-0'>

          <h2 className='text-[28px] sm:text-[32px] font-bold mt-4'>Cart Totals</h2>
          <ul className='flex flex-col space-y-6 sm:space-y-8'>
            <li className='flex justify-between px-4 sm:px-6 lg:px-8'>
              <div>Subtotal</div>
              <div>250,000.00</div>
            </li>
            <li className='flex justify-between px-4 sm:px-6 lg:px-8'>
              <div>Total</div>
              <div className='text-primary1'>250,000.00</div>
            </li>
            <li className='flex justify-center'>
              <button className='p-3 border-2 h-[48px] sm:h-[54px] lg:h-[59px] w-[200px] sm:w-[210px] lg:w-[222px] border-black rounded-lg'>Check Out</button>
            </li>
          </ul>

        </div>

      </div>

      <div>
        <AboutWeb/>
      </div>
    </div>
  )
}

export default page;
