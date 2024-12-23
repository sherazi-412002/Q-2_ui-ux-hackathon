// import React from 'react';
// import Image from 'next/image';
// import { data } from '../data/productData';
// import shareIcon from '../../public/gridicons_share.png' 
// import compareIcon from '../../public/compare-svgrepo-com 1.png' 
// import likeIcon from '../../public/Vector (5).png' 

// const ProductCard = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] md:gap-[32px] px-4 mt-[46px]">
//       {data.map((product, index) => (
//         <div
//           key={index}
//           className="relative w-[285px] h-[446px] border border-gray-200 shadow-lg overflow-hidden group"
//         >
//           {/* Discount or New Tag */}
//           {product.hasDiscount && product.OriginalPrice && (
//             <div className="absolute top-[24px] right-[24px] bg-[#E97171] w-[48px] h-[48px] text-white text-sm font-semibold py-[12px] px-2 rounded-[50%]">
//               {product.price / product.OriginalPrice <= 0.5 ? '-50%' : '-30%'}
//             </div>
//           )}
//           {product.isNew && (
//             <div className="absolute top-[24px] right-[24px] bg-[#2EC1AC] w-[48px] h-[48px] text-white text-sm font-semibold py-[12px] px-2 rounded-[50%]">
//               New
//             </div>
//           )}

//           {/* Product Image */}
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={285}
//             height={301}
//             className="w-full h-[301px] object-cover"
//           />

//           {/* Hover Overlay */}
//           <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//             {/* Add to Cart Button */}
//             <button className="bg-white text-primary1 font-semibold  py-2 px-4 w-[202px] h-[48px] shadow-md border-2 border-primary1">
//               Add to Cart
//             </button>
//             {/* Icons Section */}
//             <div className="flex items-center gap-5 mt-4">
//               <div className="flex flex-row gap-1 items-center ">
//                 <Image
//                   src={shareIcon}
//                   alt="Share"
//                   width={24}
//                   height={24}
//                   className="w-4 h-4"
//                 />
//                 <span className="text-white text-sm">Share</span>
//               </div>
//               <div className="flex flex-row gap-1 items-center ">
//                 <Image
//                   src={compareIcon}
//                   alt="Compare"
//                   width={24}
//                   height={24}
//                   className="w-5 h-5"
//                 />
//                 <span className="text-white text-sm">Compare</span>
//               </div>
//               <div className="flex flex-row gap-1 items-center ">
//                 <Image
//                   src={likeIcon}
//                   alt="Like"
//                   width={24}
//                   height={24}
//                   className="w-5 h-5"
//                 />
//                 <span className="text-white text-sm">Like</span>
//               </div>
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="p-4 flex flex-col">
//             <h3 className="text-[24px] font-bold mb-2">{product.name}</h3>
//             <p className="text-[16px] text-gray-500 mb-4">{product.description}</p>

//             {/* Price Section */}
//             <div className="flex items-center gap-4">
//               <span className="text-[20px] font-semibold text-gray-900">Rp {product.price.toFixed(2)}</span>
//               {product.OriginalPrice ? (
//                 <span className="text-sm text-gray-400 line-through">Rp {product.OriginalPrice.toFixed(2)}</span>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCard;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // For dynamic navigation
import { data } from '../data/productData';
import shareIcon from '../../public/gridicons_share.png';
import compareIcon from '../../public/compare-svgrepo-com 1.png';
import likeIcon from '../../public/Vector (5).png';
import { Products } from '../data/productData'




const ProductCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] md:gap-[32px] px-4 mt-[46px]">
      {data.map((product: Products) => (
        <Link key={product.id} href={`/products/${product.name}`} passHref>
          <div className="relative w-[285px] h-[446px] border border-gray-200 shadow-lg overflow-hidden group cursor-pointer">
            {/* Discount or New Tag */}
            {product.hasDiscount && product.OriginalPrice && (
              <div className="absolute top-[24px] right-[24px] bg-[#E97171] w-[48px] h-[48px] text-white text-sm font-semibold py-[12px] px-2 rounded-[50%]">
                {product.price / product.OriginalPrice <= 0.5 ? '-50%' : '-30%'}
              </div>
            )}
            {product.isNew && (
              <div className="absolute top-[24px] right-[24px] bg-[#2EC1AC] w-[48px] h-[48px] text-white text-sm font-semibold py-[12px] px-2 rounded-[50%]">
                New
              </div>
            )}

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={285}
              height={301}
              className="w-full h-[301px] object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <button className="bg-white text-primary1 font-semibold py-2 px-4 w-[202px] h-[48px] shadow-md border-2 border-primary1">
                Add to Cart
              </button>  
           {/* Icons Section */}
            <div className="flex items-center gap-5 mt-4">
              <div className="flex flex-row gap-1 items-center ">
                <Image
                  src={shareIcon}
                  alt="Share"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                <span className="text-white text-sm">Share</span>
              </div>
              <div className="flex flex-row gap-1 items-center ">
                <Image
                  src={compareIcon}
                  alt="Compare"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
                <span className="text-white text-sm">Compare</span>
              </div>
              <div className="flex flex-row gap-1 items-center ">
                <Image
                  src={likeIcon}
                  alt="Like"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
                <span className="text-white text-sm">Like</span>
                </div>
              </div>
            </div>

            

            {/* Product Details */}
            <div className="p-4 flex flex-col">
              <h3 className="text-[24px] font-bold mb-2">{product.name}</h3>
              <p className="text-[16px] text-gray-500 mb-4">{product.description}</p>

              {/* Price Section */}
              <div className="flex items-center gap-4">
                <span className="text-[20px] font-semibold text-gray-900">Rp {product.price.toFixed(2)}</span>
                {product.OriginalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    Rp {product.OriginalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
