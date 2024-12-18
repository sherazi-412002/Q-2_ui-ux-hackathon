import Image from 'next/image'
import React from 'react'
import logo from "../../public/Meubel House_Logos-05.png";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface chilProps {
    pageTitle:string,
    mainPage:string,
    currentPage:string,
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
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className='font-medium text-[16px]'>{mainPage}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  


      </div>
    </div>
  )
}

export default Banner