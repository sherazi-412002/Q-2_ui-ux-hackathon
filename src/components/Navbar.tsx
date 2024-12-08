import React from 'react'
import logo from "../../public/Meubel House_Logos-05.png";
import alertPic from '../../public/mdi_account-alert-outline.png';
import heart from '../../public/akar-icons_heart.png';
import cart from '../../public/ant-design_shopping-cart-outlined.png';
import search from '../../public/akar-icons_search.png';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';


const Navbar = () => {
  return (
    <div>

        <nav className='flex justify-around items-center top-0 w-screen lg:w-[1440px]  h-[100px] shadow-md shadow-[#dbdada] fixed'>
          <div className='flex items-center'>
            <Image src={logo} alt='logo' width={500} height={500} className='w-[35px] xl:w-[50px] h-[26px] xl:h-[32px]'/>
            <h1 className='text-[24px] xl:text-[34px]  font-bold'>Furniro.</h1>
          </div>

          <div>

            <ul  className='lg:flex gap-[30px] xl:gap-[75px] hidden '>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/shop'}><li>Shop</li></Link>
                <Link href={'/blog'}><li>Blog</li></Link>
                <Link href={'/contact'}><li>Contact</li></Link>
            </ul>

          </div>

          <div className='lg:flex gap-[15px] xl:gap-[45px] hidden'>
            
          <Image src={alertPic} alt='alert' width={1000} height={1000} className='w-[28px] h-[28px]'/>
          <Image src={search} alt='searchIcon' width={1000} height={1000} className='w-[28px] h-[28px]'/>
          <Image src={heart} alt='heartIcon' width={1000} height={1000} className='w-[28px] h-[28px]'/>
          <Image src={cart} alt='cartIcon' width={1000} height={1000} className='w-[28px] h-[28px]'/>

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
                 <div className='flex gap-5 sm:gap-[45px]'>
            
                  <Image src={alertPic} alt='alert' width={1000} height={1000} className='w-[28px] h-[28px]'/>
                  <Image src={search} alt='searchIcon' width={1000} height={1000} className='w-[28px] h-[28px]'/>
                  <Image src={heart} alt='heartIcon' width={1000} height={1000} className='w-[28px] h-[28px]'/>
                  <Image src={cart} alt='cartIcon' width={1000} height={1000} className='w-[28px] h-[28px]'/>
  
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