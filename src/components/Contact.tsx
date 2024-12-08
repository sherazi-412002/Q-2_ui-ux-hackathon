import React from 'react'
import logo from "../../public/Meubel House_Logos-05.png";
import Image from 'next/image';
import rightIcon from '../../public/dashicons_arrow-down-alt2.png'
import adress from '../../public/Images (3).png'
// import phone from '../../public/Images (3).png'
// import phone from '../../public/Images (3).png'

function Contact() {
  return (
    <div className='max-w-[1058px] mx-auto'>

      {/* Top Section */}
      <div className="TopBackgroundImg w-full lg:w-[1440px] flex flex-col items-center text-center h-[316px] pt-[121px] mt-[100px] px-4">
       <Image src={logo} alt='logo' width={1000} height={1000} className='w-[60px] md:w-[77px] h-[60px] md:h-[77px]'/>
        <h2 className="text-[32px] md:text-[48px] font-medium">Contact</h2>
        <p className="flex gap-3 text-[14px] md:text-[16px] font-medium">
          Home
          <Image
            src={rightIcon}
            alt="Icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
          Contact
        </p>
      </div>

      <div className='mt-[98px] flex flex-col justify-center text-center w-full mt-[]98px max-w-[1140px]'>

        <h2 className='text-[36px] font-semibold'>Get In Touch With Us</h2>
        <p className='text-text1'>For More Information About Our Product & Services. Please Feel Free To Drop Us </p>
        <p className='text-text1'>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

      </div>

      <div className='flex'>
        
        <div className='flex flex-col w-[393px] h-[537px]'>

            <ul>
                <li>
                <Image src={adress} alt='adresss' width={1000} height={1000} className='w-[60px] md:w-[77px] h-[60px] md:h-[77px]'/>
                </li>
                <li></li>
                <li></li>
            </ul>

        </div>
        <div></div>

      </div>



    </div>
  )
}

export default Contact