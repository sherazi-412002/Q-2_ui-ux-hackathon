'use client'

import logo from "../../public/Meubel House_Logos-05.png";
import alertPic from '../../public/mdi_account-alert-outline.png';

import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { BsCart } from "react-icons/bs";
import { LuHeart, LuSearch} from 'react-icons/lu';
import { usePathname } from 'next/navigation';
import { RootState } from '@/app/redux/store';
import { useSelector } from 'react-redux';
import CartItem from "./CartItem";
import { useState } from "react";






const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const pathName = usePathname();

  const item = useSelector((state:RootState) => state.cart.items)


  return (
    <div>

        <nav className='flex justify-around items-center top-0 w-full h-[100px] shadow-md shadow-[#dbdada] fixed z-50'>
          <div className='flex items-center'>
            <Image src={logo} alt='logo' width={500} height={500} className='w-[35px] xl:w-[50px] h-[26px] xl:h-[32px]'/>
            <h1 className='text-[24px] xl:text-[34px]  font-bold'>
            FurniSphere.</h1>
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
            <Sheet open={isOpen} onOpenChange={toggleSheet}>
              <SheetTrigger asChild>
                 <BsCart
                  size={24}
                  className="cursor-pointer"
                  onClick={toggleSheet} 
                />
              </SheetTrigger>
              <span className="absolute top-8 right-24 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                 {item.length} 
               </span>
            
              <SheetContent side="right">
                <SheetTitle>Your Cart</SheetTitle>
                <CartItem />
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
                    <div>
                       <Sheet open={isOpen}  onOpenChange={toggleSheet}>
                         <SheetTrigger asChild>  
                          <div>   
                           <BsCart size={24} className="cursor-pointer" onClick={toggleSheet} />
                           <span className="absolute top-32 right-9 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                            {item.length} 
                            </span>
                          </div>   
                         </SheetTrigger>

                          <SheetContent side="right">
                            <SheetTitle>Your Cart</SheetTitle>
                            <CartItem />
                          </SheetContent>
                        </Sheet>
                      </div>

                   
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



