import Banner from '@/components/Banner'
import React from 'react'

function page() {
  return (
    <div>
      <Banner pageTitle={'Checkout'} mainPage={'Home'} currentPage={'Checkout'}/>

      <div className='flex justify-center gap-[26px]'>

        {/* Billing Section */}
        <div className='w-[608px] h-[1714px] mt-[63px]'>

          <h2 className='text-[36px] font-semibold ml-[74px]'>Billing Details</h2>
          <ul className='ml-[76px] space-y-9'>
            <li className='flex gap-[31px]'>
              
                <div className='flex flex-col gap-[22px]'>
                  <legend>First Name</legend>
                  <input type="text" className='w-[211px] h-[75px] rounded-lg border-black border-2' />
                </div>
                <div className='flex flex-col gap-[22px]'>
                  <legend>First Name</legend>
                  <input type="text" className='w-[211px] h-[75px] rounded-lg border-black border-2' />
                </div>
            
            </li>
            <li className='flex flex-col gap-[22px]'>
              <legend>Company Name (Optional)</legend>
              <input type="text" className='w-[453px] h-[75px] rounded-lg border-black border-2' />
            </li>
            <li className='flex flex-col gap-[22px]'>
              <legend>Country / Region</legend>
              <input type="text" className='w-[453px] h-[75px] rounded-lg border-black border-2' />
            </li>
            <li className='flex flex-col gap-[22px]'>
              <legend>Street address</legend>
              <input type="text" className='w-[453px] h-[75px] rounded-lg border-black border-2' />
            </li>
            <li className='flex flex-col gap-[22px]'>
              <legend>Town / City</legend>
              <input type="text" className='w-[453px] h-[75px] rounded-lg border-black border-2' />
            </li>
            <li className='flex flex-col gap-[22px]'>
              <legend>Province</legend>
              <input type="text" className='w-[453px] h-[75px] rounded-lg border-black border-2' />
            </li>
            <li className='flex flex-col gap-[22px]'>
              <legend>ZIP code</legend>
              <input type="text" className='w-[453px] h-[75px] rounded-lg border-black border-2' />
            </li>
            <li className='flex flex-col gap-[22px]'>
              <legend>Phone</legend>
              <input type="text" className='w-[453px] h-[75px] rounded-lg border-black border-2' />
            </li>
            <li className='flex flex-col gap-[22px]'>
              <legend>Email address</legend>
              <input type="text" className='w-[453px] h-[75px] rounded-lg border-black border-2' />
            </li>
            <li>
              <input type="text" placeholder='Additional Information' className='w-[453px] placeholder:pl-3 h-[75px] rounded-lg border-black border-2' />
            </li>
          </ul>

        </div>

       {/* Order Section */}
        <div className='w-[608px] h-[789px] pt-[87px] py-[47px]'>

          <ul className='space-y-5'>
            <li className='text-[24px] font-medium flex justify-between'>
              <p>Product</p>
              <p>Subtotal</p>
            </li>
            <li className='flex justify-between'>
              <p><span className='text-text1'>Asgaard sofa</span> x 1</p>
              <p>250,000.00</p>
            </li>
            <li className='flex justify-between'>
              <p>Subtotal</p>
              <p>250,000.00</p>
            </li>
            <li className='flex justify-between'>
              <p>Total</p>
              <p className='text-[24px] font-bold text-primary1'>250,000.00</p>
            </li>
          </ul>

          <div className='space-y-[18px]'>
            <h3> <span className='text-black text-[16px]'>•</span> Direct Bank Transfer</h3>
            <p className='text-text1 font-light '>Make your payment directly into our bank account. Please use <br />
             your Order ID as the payment reference. Your order will not be <br />
              shipped until the funds have cleared in our account.</p>

              <p className='text-text1 font-light '>Direct Bank Transfer</p>
              <p className='text-text1 font-light '>Cash On Delivery</p>

              <p>Your personal data will be used to support your experience <br />
               throughout this website, to manage access to your account, and <br />
                for other purposes described in our <span className='font-bold'> privacy policy. </span></p>

          </div>

          <button className='w-[312px] h-[64px] justify-center mt-[39px] rounded-lg border-2 border-black'>Place Order</button>
          
        </div>
      </div>
    </div>
  )
}

export default page