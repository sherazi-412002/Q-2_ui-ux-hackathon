'use client'
import React, { useState } from 'react'
import logo from "../../public/Meubel House_Logos-05.png";
import alertPic from '../../public/mdi_account-alert-outline.png';

import cartItem1 from '../../public/Group 146 (1).png';
import cartItem2 from '../../public/Group 146 (2).png';

import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { BsBagX } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { LuHeart, LuSearch, LuShoppingCart } from 'react-icons/lu';
import { usePathname } from 'next/navigation';



<BsBagX />

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();


  return (
    <div>

        <nav className='flex justify-around items-center top-0 w-full h-[100px] shadow-md shadow-[#dbdada] fixed z-50'>
          <div className='flex items-center'>
            <Image src={logo} alt='logo' width={500} height={500} className='w-[35px] xl:w-[50px] h-[26px] xl:h-[32px]'/>
            <h1 className='text-[24px] xl:text-[34px]  font-bold'>Furniro.</h1>
          </div>

          <div>

            <ul  className='lg:flex gap-[30px] font-medium  xl:gap-[75px] hidden '>
                <Link href={'/'}><li 
                className={`hover:text-primary1  transition-all ${
                             pathName === "/" ? "text-primary1" : "text-black"}`}>Home</li></Link>

                <Link href={'/shop'}><li
                 className={`hover:text-primary1 transition-all   ${
                             pathName === "/shop" ? "text-primary1" : "text-black"}`}>Shop</li></Link>

                <Link href={'/blog'}><li
                 className={`hover:text-primary1 transition-all ${
                             pathName === "/blog" ? "text-primary1" : "text-black"}`}>Blog</li></Link>

                <Link href={'/contact'}><li
                 className={`hover:text-primary1 transition-all ${
                             pathName === "/contact" ? "text-primary1" : "text-black"}`}>Contact</li></Link>
            </ul>

          </div>

          <div className='lg:flex gap-[15px] xl:gap-[45px] hidden'>
             
             
            <Image src={alertPic} alt='alert' width={1000} height={1000} className='w-[28px] h-[28px]'/>
            <LuSearch className='w-[28px] h-[28px]'/>
            <LuHeart className='w-[28px] h-[28px]' />
            <button  onClick={() => setIsSheetOpen(true)}>
              <LuShoppingCart className='w-[28px] h-[28px]'/>
            </button>
          

            {/* Cart Section */}


            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetContent side={"right"} className='w-[350px] h-[90vh] sm:w-[500px] lg:w-[1000px] sm:h-[90vh] flex flex-col justify-between'>
                <SheetTitle>
                  <h1 className='text-[34px] font-bold'>Shopping Cart</h1> 
                </SheetTitle>
                <hr />
                <div className='mt-6 lg:mt-[42px] '>
                   <div className='flex flex-col gap-5'>
                    <div className='flex justify-around items-center'> 
                      <Image src={cartItem1} alt='cartItem1' height={1000} width={1000} className='w-[108px] h-[105px] rounded-lg'/>
                      <div>
                        <p>Asgaard sofa</p>
                        <p>1 x <span className='text-primary1'>Rs 250,000.00</span></p>
                      </div>
                      <div><IoCloseCircle size={30} /></div>
                    </div>

                    <div className='flex justify-around items-center'> 
                      <Image src={cartItem2} alt='cartItem1' height={1000} width={1000} className='w-[108px] h-[105px] rounded-lg'/>
                      <div>
                        <p>Casaliving Wood</p>
                        <p>1 x <span className='text-primary1'>Rs 270,000.00</span></p>
                      </div>
                      <div><IoCloseCircle size={30} /></div>
                    </div>
                 
                  </div>


                  <div className='flex flex-col gap-7 mt-[80px] lg:mt-[160px]'>
                    <div className='flex'>
                      <p className='ml-[31px]'>Subtotal</p>
                      <p className='text-primary1 ml-[101px]'>Rs 520,000.00</p>
                    </div>
                    <hr />
                    <div className='text-[12px] flex justify-around mb-5'>
                      <Link href={'/cart'}><Button className='rounded-2xl w-20 p-1 border-2 border-black' variant="outline">Cart</Button></Link>
                      <Link href={'/checkout'}><Button className='rounded-2xl w-24 p-1 border-2 border-black' variant="outline">Checkout</Button></Link>
                      <Link href={'/product-comparison'}><Button className='rounded-2xl w-28 p-1 border-2 border-black' variant="outline">Comparison </Button></Link>
                    </div>
                  </div>
                </div>

              </SheetContent>

                

            </Sheet>

          </div>


          {/* Responsive Design */}

          <Sheet>

            <SheetTrigger asChild>
              <Button variant={'outline'} size={'icon'} className='lg:hidden'>
                 <span><Menu size={40}/></span>
              </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetTitle>
                 <div className='flex items-center'>
                  <Image src={logo} alt='logo' width={500} height={500} className='w-[50px] h-[32px]'/>
                  <h1 className='text-[34px] font-bold'>Furniro.</h1>
                 </div>
                </SheetTitle>

                <div className='flex flex-col gap-10 mt-20 items-center'>
                  <div className='flex gap-8 sm:gap-[45px]'>
            
                    <Image src={alertPic} alt='alert' width={1000} height={1000} className='w-[28px] h-[28px]'/>
                    <LuSearch className='w-[28px] h-[28px]'/>
                    <LuHeart className='w-[28px] h-[28px]' />
                    <button  onClick={() => setIsSheetOpen(true)}>
                    <LuShoppingCart className='w-[28px] h-[28px]'/>
                    </button>  
                  </div>


                 <div>
                  <ul className='text-[16px] flex flex-col items-center gap-6 mt-4'>
                     <Link href={'/'}><li className='border-b-[1px] border-black'>Home</li></Link>
                     <Link href={'/shop'}><li className='hover:border-b-[1px] border-black'>Shop</li></Link>
                     <Link href={'/blog'}><li className='hover:border-b-[1px] border-black'>Blog</li></Link>
                     <Link href={'/contact'}><li className='hover:border-b-[1px] border-black'>Contact</li></Link>
                  </ul>
                 </div>
                </div>
            </SheetContent>
          </Sheet>
        </nav>


    </div>
  )
}

export default Navbar