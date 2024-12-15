import Image from 'next/image'
import React from 'react'
import logo from "../../public/Meubel House_Logos-05.png";
import rightIcon from '../../public/dashicons_arrow-down-alt2.png'

interface chilProps {
    pageTitle:string,
    mainPage:string,
    currentPage:string

}


const Banner:React.FC<chilProps> = (props) => {
    const pageTitle = props.pageTitle
    const mainPage = props.mainPage
    const currentPage = props.currentPage
  return (
    <div>
              {/* Top Section */}
     <div className="TopBackgroundImg w-full lg:w-[1440px] flex flex-col items-center text-center h-[316px] pt-[61px] mt-[100px] px-4 sm:px-8">
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className="w-[60px] md:w-[66px] h-[50px] md:h-[40px]"
        />
        <h2 className="text-[32px] md:text-[48px] font-medium">{pageTitle}</h2>
        <p className="flex gap-3 text-[14px] md:text-[16px] font-medium">
          {mainPage}
          <Image
            src={rightIcon}
            alt="Icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
          {currentPage}
        </p>
      </div>
    </div>
  )
}

export default Banner