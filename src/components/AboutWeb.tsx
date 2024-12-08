// import Image from 'next/image'
// import React from 'react'
// import trophy from '../../public/trophy 1.png'
// import guarantee from '../../public/guarantee.png'
// import shipping from '../../public/shipping.png'
// import supportIcon from '../../public/customer-support.png'
// function AboutWeb() {
//   return (

//     <section className='w-[1334px] h-[70px] mx-auto px-[53px] py-[100px]'>

//       <div className='flex gap-[56px]'>
//         <div className='flex gap-[2px] items-center'>

//             <Image src={trophy} alt='quality' width={1000} height={1000} className='w-[60px] h-[60px]'/>
//             <div className='flex flex-col gap-[2px]'>
//                 <h2 className='text-[25px] font-semibold text-[#242424]'>High Quality</h2>
//                 <p className='text-[20px] font-medium text-[#898989]'>crafted from top materials</p>
//             </div>

//         </div>
//         <div className='flex gap-[2px] items-center'>

//             <Image src={guarantee} alt='quality' width={1000} height={1000} className='w-[60px] h-[60px]'/>
//             <div className='flex flex-col gap-[2px]'>
//                 <h2 className='text-[25px] font-semibold text-[#242424]'>Warranty Protection</h2>
//                 <p className='text-[20px] font-medium text-[#898989]'>Over 2 years</p>
//             </div>

//         </div>

//         <div className='flex gap-[2px] items-center'>

//             <Image src={shipping} alt='quality' width={1000} height={1000} className='w-[60px] h-[60px]'/>
//             <div className='flex flex-col gap-[2px]'>
//                 <h2 className='text-[25px] font-semibold text-[#242424]'>Free Shipping</h2>
//                 <p className='text-[20px] font-medium text-[#898989]'>Order over 150 $</p>
//             </div>

//         </div>

//         <div className='flex gap-[2px] items-center'>

//             <Image src={supportIcon} alt='quality' width={1000} height={1000} className='w-[60px] h-[60px]'/>
//             <div className='flex flex-col gap-[2px]'>
//                 <h2 className='text-[25px] font-semibold text-[#242424]'>24 / 7 Support</h2>
//                 <p className='text-[20px] font-medium text-[#898989]'>Dedicated support</p>
//             </div>

//         </div>
//       </div>

//     </section>

//   )
// }

// export default AboutWeb

import Image from 'next/image'
import React from 'react'
import trophy from '../../public/trophy 1.png'
import guarantee from '../../public/guarantee.png'
import shipping from '../../public/shipping.png'
import supportIcon from '../../public/customer-support.png'

function AboutWeb() {
  return (
    <section className="w-full max-w-[1334px] mx-auto px-4 md:px-[53px] py-[50px] md:py-[100px]">
      <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-[56px] justify-center">
        <div className="flex gap-4 items-center max-w-[300px]">
          <Image
            src={trophy}
            alt="High Quality"
            width={60}
            height={60}
            className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-[18px] md:text-[25px] font-semibold text-[#242424]">
              High Quality
            </h2>
            <p className="text-[14px] md:text-[20px] font-medium text-[#898989]">
              crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center max-w-[300px]">
          <Image
            src={guarantee}
            alt="Warranty Protection"
            width={60}
            height={60}
            className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-[18px] md:text-[25px] font-semibold text-[#242424]">
              Warranty Protection
            </h2>
            <p className="text-[14px] md:text-[20px] font-medium text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center max-w-[300px]">
          <Image
            src={shipping}
            alt="Free Shipping"
            width={60}
            height={60}
            className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-[18px] md:text-[25px] font-semibold text-[#242424]">
              Free Shipping
            </h2>
            <p className="text-[14px] md:text-[20px] font-medium text-[#898989]">
              Order over 150 $
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center max-w-[300px]">
          <Image
            src={supportIcon}
            alt="24 / 7 Support"
            width={60}
            height={60}
            className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-[18px] md:text-[25px] font-semibold text-[#242424]">
              24 / 7 Support
            </h2>
            <p className="text-[14px] md:text-[20px] font-medium text-[#898989]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutWeb