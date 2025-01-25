'use client'
import CheckOut from '@/actions/CheckOut';
import { RootState } from '@/app/redux/store';
import Banner from '@/components/Banner';
import { CartItem } from '@/components/CartItem';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';






function Page() {

  const [customerInfo, setCustomerInfo] = useState({
    firstName:" ",
    lastName:" ",
    email:" ",
    address:" ",
    phone:" "
  })

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setCustomerInfo({...customerInfo,[name]:value})
  }


  const handleCheckout = ()=>
    {
        CheckOut(cartItems,customerInfo)
       
    }


  const cartItems: CartItem[] = useSelector((state: RootState   ) => state.cart.items);


  return (
    <div>
      <Banner pageTitle={'Checkout'} mainPage={'Home'} currentPage={'Checkout'} />

      <div className="flex flex-wrap md:flex-nowrap justify-center px-5 xl:px-0 gap-6 sm:gap-8 lg:gap-[26px]">
        {/* Billing Section */}
        <div className="w-full md:w-[608px] h-auto lg:h-[1714px] mt-[20px] md:mt-[40px] lg:mt-[63px] px-4 md:px-0">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold ml-0 md:ml-[74px]">
            Billing Details
          </h2>
          <ul className="ml-0 md:ml-[76px] mt-4 space-y-4 sm:space-y-6 lg:space-y-9">
            <li className="flex flex-wrap gap-4 sm:gap-[20px] lg:gap-[31px]">
              <div className="flex flex-col gap-[12px]">
                <legend>First Name</legend>
                <input
                  type="text" name='firstName' onChange={handleInputChange} value={customerInfo.firstName}
                  className="w-full pl-5 sm:w-[200px] lg:w-[211px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <legend>Last Name</legend>
                <input
                  type="text" name='lastName' onChange={handleInputChange} value={customerInfo.lastName}
                  className="w-full sm:w-[200px]  pl-5 lg:w-[211px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
                />
              </div>
            </li>
            <li className="flex flex-col gap-[12px]">
              <legend>Company Name (Optional)</legend>
              <input
                type="text" 
                className="w-full sm:w-[350px] pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
              />
            </li>
            <li className="flex flex-col gap-[12px]">
              <legend>Country / Region</legend>
              <input
                type="text"
                className="w-full sm:w-[350px] pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
              />
            </li>
            <li className="flex flex-col gap-[12px]">
              <legend>Street Address</legend>
              <input
                type="text"
                className="w-full sm:w-[350px] pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
              />
            </li>
            <li className="flex flex-col gap-[12px]">
              <legend>Town / City</legend>
              <input
                type="text"
                className="w-full sm:w-[350px] pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
              />
            </li>
            <li className="flex flex-col gap-[12px]">
              <legend>Province</legend>
              <input
                type="text"
                className="w-full sm:w-[350px]  pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
              />
            </li>
            <li className="flex flex-col gap-[12px]">
              <legend>ZIP Code</legend>
              <input
                type="text"
                className="w-full sm:w-[350px] pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
              />
            </li>
            <li className="flex flex-col gap-[12px]">
              <legend>Phone</legend>
              <input
                type="phone" name='phone' onChange={handleInputChange} value={customerInfo.phone}
                className="w-full sm:w-[350px] pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
              />
            </li>
            <li className="flex flex-col gap-[12px]">
              <legend>Email Address</legend>
              <input
                type="email" name='email' onChange={handleInputChange} value={customerInfo.email}
                className="w-full sm:w-[350px] pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2"
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Additional Information"
                className="w-full sm:w-[350px] pl-5 lg:w-[453px] h-[60px] sm:h-[70px] lg:h-[75px] rounded-lg border-black border-2 placeholder:pl-3"
              />
            </li>
          </ul>
        </div>

        {/* Order Section */}

        <div className="w-full md:w-[608px] h-auto lg:h-[789px] pt-[40px] md:pt-[60px] lg:pt-[87px] px-4 md:px-0">
        {cartItems.length > 0 ? (
          cartItems.map((item: CartItem) => (
          <ul key={item.id} className="space-y-3 sm:space-y-4 lg:space-y-5">
            <li className="text-[18px] sm:text-[20px] lg:text-[24px] font-medium flex justify-between">
              <p>Product</p>
              <p>Subtotal</p>
            </li>
            <li className="flex justify-between">
              <p>
                <span className="text-text1">{item.name}</span> x 1
              </p>
              <p>{item.price}</p>
            </li>
            <li className="flex justify-between">
              <p>Subtotal</p>
              <p>{item.price}</p>
            </li>
          </ul>
           ))
            ) : (
              <p className="mt-5 text-center">Your cart is empty</p>
            )}
               <div className="flex justify-between">
              <p>Total</p>
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-primary1">
               {cartItems.length > 0 ?( <> {cartItems[0].price + cartItems[1].price} </> ):( <li>cart is empty </li> )}
              </p>
            </div>

          <div className="mt-6 space-y-[12px] sm:space-y-[15px] lg:space-y-[18px]">
            <h3>
              {' '}
              <span className="text-black text-[14px] sm:text-[16px]">•</span> Direct Bank Transfer
            </h3>
            <p className="text-text1 font-light">
              Make your payment directly into our bank account. Please use <br />
              your Order ID as the payment reference. Your order will not be <br />
              shipped until the funds have cleared in our account.
            </p>

            <p className="text-text1 font-light">Direct Bank Transfer</p>
            <p className="text-text1 font-light">Cash On Delivery</p>

            <p>
              Your personal data will be used to support your experience <br />
              throughout this website, to manage access to your account, and <br />
              for other purposes described in our{' '}
              <span className="font-bold"> privacy policy. </span>
            </p>
          </div>

          <button onChange={handleCheckout} className="w-[250px] sm:w-[280px] lg:w-[312px] h-[50px] sm:h-[56px] lg:h-[64px] justify-center mt-[20px] lg:mt-[39px] rounded-lg border-2 border-black">
            Place Order
          </button>
          <br /><br />
        </div>
      </div>
    </div>
  );
}

export default Page;
