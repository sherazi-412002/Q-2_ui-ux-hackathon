// import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
// import React from 'react'
// import { IoCloseCircle } from "react-icons/io5";
// import cartItem2 from '../../public/Group 146 (2).png';
// import cartItem1 from '../../public/Group 146 (1).png';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import { remove } from '../redux/cartslice';

// interface CartItem {
//     id:number,
//     title:string,
//     price:number,
//     image:string
// }


// const CartItem:React.FC = () => {
//     const dispatch = useDispatch();
//     const cartItems = useSelector((state:RootState) => state.cart);

//     const handleRemove = (id: number) => {
//         dispatch(remove(id));
//       };

//   return (
//     <>
//         <Sheet>
//           <SheetContent side={"right"} className='w-[85vw] h-[70vh] sm:w-[500px] lg:w-[1000px] sm:h-[90vh] flex flex-col justify-between'>
//             <SheetTitle>
//                <h1 className='text-[34px] font-bold'>Shopping Cart</h1> 
//              </SheetTitle>
//              {cartItems.map((item:CartItem) => (
        
//                 <div className='mt-6 lg:mt-[42px] ' key={item.id}>
//                    <div className='flex flex-col gap-5'>
//                     <div className='flex justify-around items-center'> 
//                       <Image src={item.image} alt={item.title} height={1000} width={1000} className='w-[108px] h-[105px] rounded-lg'/>
//                       <div>
//                         <p>{item.title}</p>
//                         <p>1 x <span className='text-primary1'>{item.price}</span></p>
//                       </div>
//                       <div><IoCloseCircle size={30} /></div>
//                     </div>

//                   <div className='flex flex-col gap-7 mt-[80px] lg:mt-[160px]'>
//                     <div className='flex'>
//                       <p className='ml-[31px]'>Subtotal</p>
//                       <p className='text-primary1 ml-[101px]'>{item.price}</p>
//                     </div>
//                     <hr />
//                     <div className='text-[12px] flex justify-around mb-5'>
//                       <Link href={'/cart'}><Button className='rounded-2xl w-20 p-1 border-2 border-black' variant="outline">Cart</Button></Link>
//                       <Link href={'/checkout'}><Button className='rounded-2xl w-24 p-1 border-2 border-black' variant="outline">Checkout</Button></Link>
//                       <Link href={'/product-comparison'}><Button className='rounded-2xl w-28 p-1 border-2 border-black' variant="outline">Comparison </Button></Link>
//                     </div>
//                   </div>
//                 </div>
//              ))}
//            </SheetContent>         
//         </Sheet>

//     <>
//   )
// }

// export default CartItem

"use client"
import React from 'react';
import { IoCloseCircle } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { remove } from '../redux/cartslice';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const CartItem: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.items);
  
  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="open-cart-button">Open Cart</button>
        </SheetTrigger>
        <SheetContent side={"right"} className="w-[85vw] h-[70vh] sm:w-[500px] lg:w-[1000px] sm:h-[90vh] flex flex-col justify-between">
          <SheetTitle>
            <h1 className="text-[34px] font-bold">Shopping Cart</h1>
          </SheetTitle>
          {cartItems.length > 0 ? (
            cartItems.map((item: CartItem) => (
              <div className="mt-6 lg:mt-[42px]" key={item.id}>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-around items-center">
                    <Image src={item.image} alt={item.name} width={1000} height={1000} className="w-[108px] h-[105px] rounded-lg" />
                    <div>
                      <p>{item.name}</p>
                      <p>1 x <span className="text-primary1">{item.price}</span></p>
                    </div>
                    <IoCloseCircle size={30} className="cursor-pointer" onClick={() => handleRemove(item.id)} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="mt-5 text-center">Your cart is empty</p>
          )}
          <div className="flex flex-col gap-7 mt-[80px] lg:mt-[160px]">
            <div className="flex">
              <p className="ml-[31px]">Subtotal</p>
              <p className="text-primary1 ml-[101px]">{subtotal}</p>
            </div>
            <hr />
            <div className="text-[12px] flex justify-around mb-5">
              <Link href={'/cart'}>
                <Button className="rounded-2xl w-20 p-1 border-2 border-black" variant="outline">Cart</Button>
              </Link>
              <Link href={'/checkout'}>
                <Button className="rounded-2xl w-24 p-1 border-2 border-black" variant="outline">Checkout</Button>
              </Link>
              <Link href={'/product-comparison'}>
                <Button className="rounded-2xl w-28 p-1 border-2 border-black" variant="outline">Comparison</Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CartItem;
