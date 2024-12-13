import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Img01 from '../../public/Rectangle 24 (1).png'
import Img02 from '../../public/Rectangle 25 (1).png'
import Img03 from '../../public/Rectangle 26 (1).png'
import Img04 from '../../public/CTA.png'
import Img05 from '../../public/Content.png'
import Img06 from '../../public/Indicator.png'
import Image from 'next/image'

const RoomInpiration = () => {
  return (
    <div className='max-w-[1236px] w-full h-[500px] lg:h-[670px] flex justify-center items-center lg:items-start mx-auto  space-x-[42px]'>
      {/* Text Section */}
      <div className='flex flex-col lg:mt-[223px]  justify-start space-y-5'>
        <div className='space-y-2'>
          <h2 className=' text-[30px] lg:text-[40px] font-bold leading-none'>
            50+ Beautiful rooms <br />
            inspiration
          </h2>
          <p className='text-[#616161] font-medium'>
            Our designer already made a lot of beautiful <br />
            prototipe of rooms that inspire you
          </p>
        </div>
        <button className='text-white bg-primary1 w-[176px] h-[48px] mt-5'>Explore More</button>
      </div>

      {/* Carousel Section */}
      <div className='flex-1 hidden lg:block'>
        <Carousel>
          <CarouselContent className='flex space-x-5 overflow-hidden'>
            {/* Adjust the width to show only two items */}
            <CarouselItem className='w-[50%] h-[582px] p-10 flex gap-4 relative'>
              <div>
                <Image src={Img01} alt='1st Img' className='w-[404px] h-[582px]'/>
                <Image
                 src={Img04}
                 alt='1st Img'
                 height={48}
                 width={48}
                 className='absolute top-[510px] left-[270px]'
                />
                <Image
                 src={Img05}
                 alt='1st Img'
                 height={130}
                 width={217}
                 className='absolute top-[428px] left-[54px]'
                />
                </div>

                <div className='space-y-5'>
                  <Image src={Img02} alt='2nd Img' className='w-[372px] h-[486px]' objectFit='cover' />
                  <Image
                   src={Img06}
                   alt='2nd Img'
                   height={27}
                    width={120}
                  
                   />

                </div>
            </CarouselItem>
            <CarouselItem className='w-[50%]  h-[582px] p-10 relative'>
              <Image src={Img03} alt='1st Img' className='w-[404px] h-[582px]'/>
              <Image
                   src={Img06}
                   alt='2nd Img'
                   height={27}
                    width={120}
                  
               />

            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default RoomInpiration
