import React from 'react'
import Link from 'next/link';
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <div className='font-bold text-lg px-5 md:px-12 lg:px-20 py-4 flex justify-between items-center'>
      <Link href={'/'}><h2 className='text-3xl lg:text-5xl text-[#556EE6]'>Dozzy</h2></Link>
      <div>
        <div className=' py-2 text-black'>
          <p className='lg:pb- lg:text-3xl text-sm  text-[#556EE6]'>For Booking help</p>
          <Link className='lg:text-3xl font-bold text-sm flex items-center gap-1 lg:gap-2' href="tel:9111911162" target='_blank'><span><FiPhoneCall className='size-3 lg:size-6' /></span>9111-9111-62<span></span></Link>
        </div>
      </div>
    </div>
  )
}

export default Header;