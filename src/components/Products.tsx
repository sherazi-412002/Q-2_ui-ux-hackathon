import React from 'react'
import ProductCard from './ProductsCard'
import Link from 'next/link'

function Products() {
  return (
    <div className='w-full mx-w-[1236px] h-auto xl:h-[1084px] flex flex-col items-center justify-center mx-auto mt-[56px]'>
       <h2 className='text-[40px] font-bold text-[#3A3A3A] mb-[32px] md:text-center'>Our Products</h2>
       <ProductCard />
       <div className='flex md:justify-center'><button className='w-[245px] h-[48px] border-primary1 text-primary1 hover:opacity-80 border-2 p-3 mt-[32px]'><Link href={'/shop'}>View All</Link></button></div>
    </div>
  )
}

export default Products