// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import { IoStar } from "react-icons/io5";
// import { useDispatch } from 'react-redux';
// import { add } from '@/app/redux/cartslice';
// import { Product } from '@/api/product/route';



// const ProductDetail: React.FC = () => {
//   const { slug } = useParams(); 
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();

  


//   useEffect(() => {
//     if (!slug) return;

//     const fetchProduct = async () => {
//       try {
//         console.log("Fetching product with slug:", slug);
//         const res = await fetch(`/api/product/data?slug=${slug}`);

//         if (!res.ok) {
//           console.error("Product not found or API error.");
//           setProduct(null);
//         } else {
//           const data = await res.json();
//           setProduct(data);
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   if (loading) return <div>Loading product details...</div>;
//   if (!product) return <div>Product not found</div>;

//   const addQuantity = () => setQuantity((prev) => prev + 1);
//   const subtractQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

//   const handleAdd = () => {
//     if (!product) return;

//     dispatch(add({
//       _id: product._id,
//       title: product.title,
//       price: product.price,
//       imageUrl: product.imageUrl,
//       dicountPercentage: product.dicountPercentage,
//        description: product.description,
//        isNew: product.isNew,
//        slug:product.slug,
//        tags:product.tags
//     }));
//   };

//   return (
//     <div className="w-full mt-[100px] xl:px-[100px] pt-10 flex flex-col lg:flex-row gap-10 justify-center">
//       <Image
//         src={product.imageUrl} 
//         alt={product.title}
//         height={1000}
//         width={1000}
//         className="h-[300px] w-auto lg:h-[391px] lg:w-[481px] mx-auto"
//       />
//       <div className="space-y-4 mt-5 px-10">
//         <h1 className="text-[28px] lg:text-[42px]">{product.title}</h1>
//         <p className="text-[24px] font-medium text-text1">Rs {product.price}</p>
//         <div className="flex gap-5">
//           <div className="flex gap-1">
//             {[...Array(5)].map((_, index) => (
//               <span key={index} className="text-yellow-500">
//                 <IoStar />
//               </span>
//             ))}
//           </div>
//           <div className="h-[20px] bg-text1 w-[1px]" />
//           <p className="text-[11px] text-text1">5 Customer Review</p>
//         </div>
//         <p className="text-[14px] lg:w-[424px] text-justify">
//           {product.description || "No description available."}
//         </p>
//         <div className="flex gap-5">
//           <button className="rounded-lg border-2 border-black h-12 w-[90px] flex justify-center items-center">
//             <span onClick={subtractQuantity} style={{ cursor: quantity > 1 ? 'pointer' : 'not-allowed' }}>-</span>
//             <span>{quantity}</span>
//             <span onClick={addQuantity}>+</span>
//           </button>
//           <button onClick={handleAdd} className="rounded-lg border-2 hover:bg-primary1 border-black h-12 w-[150px]">
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { add } from "@/app/redux/cartslice";
import { Product } from "@/app/api/product/route";

const ProductDetail: React.FC = () => {
  const { title } = useParams();
  console.log(`title:-> `, title)
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const productTitle = Array.isArray(title) ? title[0] : title;
  
  useEffect(() => {
    if (!productTitle) return;
  
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/data?title=${encodeURIComponent(productTitle)}`);
  
        if (!res.ok) {
          console.error("Product not found or API error.");
          setProduct(null);
        } else {
          const data = await res.json();
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [productTitle]);
   // Ensure effect runs when productTitle changes

  
  if (loading) return <div>Loading product details...</div>;
  if (!product) return <div>Product not found</div>;

  const addQuantity = () => setQuantity((prev) => prev + 1);
  const subtractQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAdd = () => {
    if (!product) return;

    dispatch(add({
      _id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      dicountPercentage: product.dicountPercentage,
      description: product.description,
      isNew: product.isNew,
      slug: product.slug,
      tags: product.tags
    }));
  };

  return (
    <div className="w-full mt-[100px] xl:px-[100px] pt-10 flex flex-col lg:flex-row gap-10 justify-center">
      <Image
        src={product.imageUrl}
        alt={product.title}
        height={1000}
        width={1000}
        className="h-[300px] w-auto lg:h-[391px] lg:w-[481px] mx-auto"
      />
      <div className="space-y-4 mt-5 px-10">
        <h1 className="text-[28px] lg:text-[42px]">{product.title}</h1>
        <p className="text-[24px] font-medium text-text1">Rs {product.price}</p>
        <div className="flex gap-5">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-500">
                <IoStar />
              </span>
            ))}
          </div>
          <div className="h-[20px] bg-text1 w-[1px]" />
          <p className="text-[11px] text-text1">5 Customer Reviews</p>
        </div>
        <p className="text-[14px] lg:w-[424px] text-justify">
          {product.description || "No description available."}
        </p>
        <div className="flex gap-5">
          <button className="rounded-lg border-2 border-black h-12 w-[90px] flex justify-center items-center">
            <span onClick={subtractQuantity} style={{ cursor: quantity > 1 ? "pointer" : "not-allowed" }}>-</span>
            <span>{quantity}</span>
            <span onClick={addQuantity}>+</span>
          </button>
          <button onClick={handleAdd} className="rounded-lg border-2 hover:bg-primary1 border-black h-12 w-[150px]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;




