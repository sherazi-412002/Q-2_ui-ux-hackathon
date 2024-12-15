import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import React from 'react'

function page() {
  return (
    <div>
      <Banner pageTitle='Contact' mainPage='Home' currentPage='Contact'/>
      <Contact/>

    </div>
  )
}

export default page