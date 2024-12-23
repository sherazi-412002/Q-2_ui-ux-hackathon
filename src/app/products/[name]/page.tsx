// 'use client'
// import { data } from '../../../data/productData'; // Import product data
// import React from 'react';
// import { Products } from '../../../data/productData'
// import { useParams} from 'next/navigation';
// import Image from 'next/image';
// import { IoStar } from "react-icons/io5";


// const ProductDetail: React.FC = () => {
//   const {name} = useParams();
//   // Get product ID from route
  
  
//   // Find the product by ID
//   const product: Products | undefined = data.find(
//     (item) => item.name === name
//   );

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (

//     <div className='w-[1440px] h-[820px] mt-[100px] px-[100px] flex justify-between pt-[35px]'>

//       <Image src={product.image} alt={product.name} height={1000} width={1000} className='ml-[71px] h-[391px] w-[481px] mt-[78px]'/>

//       <div className='space-y-4'>
//         <h1 className='text-[42px]'>{product.name}</h1>
//         <p className='text-[32px] font-medium text-text1'>Rs {product.price}</p>
//         <div className='flex gap-5'>

//           <div className='flex gap-1'>
//             {[...Array(5)].map(()=>(
//               <span key={'/'} className="text-yellow-500"><IoStar /></span>
//             ))}
//           </div>
//           <div className='h-[30px] bg-text1 w-[1px]'/>
//           <p className='text-[13px] text-text1'>5 Customer Review</p>

//         </div>
//         <p className='w-[424px] text-justify'>Setting the bar as one of the loudest speakers in its class,
//            the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear 
//            midrange and extended highs for a sound.
//         </p>
//         <div>
//           <p className='text-[14px] text-text1'>Size</p>
//           <ul className='flex gp-4 mt-2'>
//             <li className='w-[30px] h-[30px] hover:bg-primary1 rounded-lg bg-primary2 text-center'>SM</li>
//             <li className='w-[30px] h-[30px] hover:bg-primary1 rounded-lg bg-primary2 text-center'>L</li>
//             <li className='w-[30px] h-[30px] hover:bg-primary1 rounded-lg bg-primary2 text-center'>XL</li>
//             <li className='w-[30px] h-[30px] hover:bg-primary1 rounded-lg bg-primary2 text-center'>XS</li>
//           </ul>
//         </div>
//         <div>

//           <p className='text-[13px] text-text1'>Color</p>
//           <div className='flex gap-5 mt-2'>
//             <div className='rounded-full w-[30px] h-[30px] hover:bg-opacity-90 bg-purple-800'/>
//             <div className='rounded-full w-[30px] h-[30px] hover:bg-opacity-90 bg-black'/>
//             <div className='rounded-full w-[30px] h-[30px] hover:bg-opacity-90 bg-primary1'/>
//           </div>

//         </div>

//         <div className='flex gap-[18px]'>
//           <button className='rounded-lg border-2 border-black space-x-9 h-16 w-[123px]'>
//             <span>-</span>
//             <span>1</span>
//             <span>+</span>
//           </button>
//           <button className='rounded-lg border-2 border-black h-16 w-[215px]'>Add To Cart</button>
//           <button className='rounded-lg border-2 border-black h-16 w-[215px]'>+ Compare</button>
//         </div>

//         <div className='bg-text1 w-[605px] h-[1px]'/>
//       </div>
       
//     </div>
//   );
// };

// export default ProductDetail;


'use client'
import { data } from '../../../data/productData'; // Import product data
import React from 'react';
import { Products } from '../../../data/productData';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { IoStar } from "react-icons/io5";

const ProductDetail: React.FC = () => {
  const { name } = useParams();
  // Get product ID from route

  // Find the product by ID
  const product: Products | undefined = data.find(
    (item) => item.name === name
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full mt-[100px] px-5 pt-10 xl:pt-0 justify-center gap-5 lg:px-[100px] flex flex-col lg:flex-row lg:justify-between lg:pt-[35px]">
      <Image
        src={product.image}
        alt={product.name}
        height={1000}
        width={1000}
        className="h-[300px] w-auto sm:h-[350px] md:h-[400px] lg:h-[391px] lg:w-[481px] mx-auto xl:ml-[71px] lg:mt-[78px]"
      />
      <div className="space-y-4 mt-5 lg:mt-0">
        <h1 className="text-[28px] sm:text-[32px] lg:text-[42px]">{product.name}</h1>
        <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-text1">
          Rs {product.price}
        </p>
        <div className="flex gap-5">
          <div className="flex gap-1">
            {[...Array(5)].map(() => (
              <span key="/" className="text-yellow-500">
                <IoStar />
              </span>
            ))}
          </div>
          <div className="h-[20px] lg:h-[30px] bg-text1 w-[1px]" />
          <p className="text-[11px] sm:text-[13px] text-text1">
            5 Customer Review
          </p>
        </div>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] lg:w-[424px] text-justify">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <div>
          <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-text1">
            Size
          </p>
          <ul className="flex gap-4 mt-2">
            {["SM", "L", "XL", "XS"].map((size) => (
              <li
                key={size}
                className="w-[30px] h-[30px] hover:bg-primary1 rounded-lg bg-primary2 text-center leading-[30px] text-xs sm:text-sm lg:text-base"
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] sm:text-[13px] text-text1">Color</p>
          <div className="flex gap-5 mt-2">
            {["bg-purple-800", "bg-black", "bg-primary1"].map((color, idx) => (
              <div
                key={idx}
                className={`rounded-full w-[20px] sm:w-[25px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[30px] ${color} hover:bg-opacity-90`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 lg:gap-[18px]">
          <button className="rounded-lg border-2 border-black space-x-3 sm:space-x-5 lg:space-x-9 h-12 sm:h-14 lg:h-16 w-[90px] sm:w-[100px] lg:w-[123px] text-xs sm:text-sm lg:text-base flex justify-center items-center">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </button>
          <button className="rounded-lg border-2 border-black h-12 sm:h-14 lg:h-16 w-[150px] sm:w-[180px] lg:w-[215px] text-xs sm:text-sm lg:text-base">
            Add To Cart
          </button>
          <button className="rounded-lg border-2 border-black h-12 sm:h-14 lg:h-16 w-[150px] sm:w-[180px] lg:w-[215px] text-xs sm:text-sm lg:text-base">
            + Compare
          </button>
        </div>
        <div className="bg-text1 w-full lg:w-[605px] h-[1px]" />
      </div>
    </div>
  );
};

export default ProductDetail;

