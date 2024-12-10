import React from 'react';
import Image from 'next/image';
import { data } from '../data/productData'; // Ensure this imports your product data

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] md:gap-[32px] px-4 mt-[46px] ">
      {data.map((product, index) => (
        <div
          key={index}
          className="relative w-[285px] h-[446px] border border-gray-200 shadow-lg overflow-hidden"
        >
          {/* Discount or New Tag */}
          {product.hasDiscount && product.OriginalPrice && (
            <div className="absolute top-[24px] right-[24px] bg-[#E97171] w-[48px] h-[48px] text-white text-sm font-semibold py-[12px] px-2 rounded-[50%]">
              {product.price / product.OriginalPrice <= 0.5 ? '-50%' : '-30%'}
            </div>
          )}
          {product.isNew && (
            <div className="absolute top-[24px] right-[24px] bg-[#2EC1AC]  w-[48px] h-[48px] text-white text-sm font-semibold py-[12px] px-2 rounded-[50%]">
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

          {/* Product Details */}
          <div className="p-4 flex flex-col">
            <h3 className="text-[24px] font-bold mb-2">{product.name}</h3>
            <p className="text-[16px] text-gray-500 mb-4">{product.description}</p>

            {/* Price Section */}
            <div className="flex items-center gap-4">
              <span className="text-[20px] font-semibold text-gray-900">Rp {product.price.toFixed(2)}</span>
              {product.OriginalPrice ? (
                <span className="text-sm text-gray-400 line-through">Rp {product.OriginalPrice.toFixed(2)}</span>
              ) : null}
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
