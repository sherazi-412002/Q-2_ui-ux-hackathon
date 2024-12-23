// 'use client'
// import React, { useState } from 'react';
// import { data3 } from '../../data/productData'; // Import your product data
// import Image from 'next/image';
// import { IoStar } from "react-icons/io5";


// export const ProductCompare: React.FC = () => {
//    const [selectedProducts, setSelectedProducts] = useState([data3[0], data3[1]]); // Replace indices with logic to select products from the sidebar

//   if (selectedProducts.length !== 2) {
//     return <div>Please select exactly two products to compare.</div>;
//   }

//   const [product1, product2] = selectedProducts;

//   const renderStars = (rating: number) => {
//     return [...Array(5)].map((_, i) => (
//       <span key={i} className={`text-${i < rating ? 'yellow-500' : 'gray-300'}`}>
//         <IoStar />
//       </span>
//     ));
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-8 lg:px-16 mt-10">
//       <h1 className="text-3xl font-bold text-center mb-6">Product Comparison</h1>

//       {/* Product Information Comparison */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
//         <div className="col-span-1">
//           <h2 className="text-xl font-semibold text-center">Comparison Overview</h2>
//           <ul className="space-y-3">
//             {["Image", "Name", "Price", "Rating", "Views"].map((feature, index) => (
//               <li key={index} className="bg-gray-50 px-4 py-3 rounded-lg font-medium text-lg">
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {[product1, product2].map((product, idx) => (
//           <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center">
//             <Image
//               src={product.image}
//               alt={product.name}
//               height={200}
//               width={200}
//               className="mx-auto"
//             />
//             <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
//             <p className="text-lg font-medium text-gray-600">Rs {product.price}</p>
//             <div className="flex justify-center gap-1 mt-3">
//               {renderStars(product.rating)}
//             </div>
//             <p className="text-sm text-gray-500">{product.views} Views</p>
//           </div>
//         ))}
//       </div>

//       {/* Specification Comparison */}
//       {[
//         { title: "General", features: ["Sales Packages", "Model Number", "Secondary Material", "Configuration", "Upholstery Material", "Upholstery Color"] },
//         { title: "Product", features: ["Filling Material", "Finish Type", "Adjustable Headrest", "Maximum Load Capacity", "Origin of Manufacture"] },
//         { title: "Dimensions", features: ["Width", "Height", "Depth", "Weight"] },
//         { title: "Warranty", features: ["Warranty Summary", "Warranty Service Type", "Covered in Warranty", "Not Covered in Warranty", "Domestic Warranty"] },
//       ].map((section, index) => (
//         <div key={index} className="mt-10">
//           <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="col-span-1">
//               <ul className="space-y-3">
//                 {section.features.map((feature, idx) => (
//                   <li key={idx} className="bg-gray-50 px-4 py-3 rounded-lg font-medium text-lg">
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {[product1, product2].map((product, idx) => (
//               <div key={idx} className="bg-white shadow-md rounded-lg p-6">
//                 <ul className="space-y-3">
//                   {section.features.map((feature, id) => (
//                     <li key={id} className="text-lg text-gray-600">
//                       {product[feature.toLowerCase().replace(/ /g, "_") as keyof typeof product] || "N/A"}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCompare;