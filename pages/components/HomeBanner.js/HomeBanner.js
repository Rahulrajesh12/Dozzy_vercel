import React from 'react'
import Image from 'next/image'
import bgsvg from '../../images/traveller.svg'
import farmhouse from '../../images/kk.jpg'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
// imp Link
const HomeBanner = () => {
    return (
        <div>
        <div className='flex justify-between'>
            <div className='pl-5 md:pl-12 lg:pl-20 lg:pt-44 pt-12 flex flex-col gap-3 lg:gap-8 '>
                <p className='text-[8px] text-[#556EE6] font-bold lg:text-xl'>Most Affordable Farmhouses in India</p>
                <h2 className='text-lg font-extrabold lg:font-bold flex flex-col lg:gap-2 lg:text-6xl'><span>Farmhouses</span> <span>In Hyderabad</span></h2>
                <div className='flex gap-1 text-white lg:pt-6 pb-16'>
                    <button className='bg-green-500 rounded-full py-1 px-2 lg:px-5'>
                        <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%21" target='_blank'>
                            <p className=' flex gap-1 items-center text-[10px]'><span><FaWhatsapp className='lg:size-6' size={10} /></span> <span>Whatsapp</span></p>
                        </Link>
                    </button>
                    <button className='bg-blue-500 rounded-full py-1 px-2 w-16 lg:w-28 lg:px-5'>
                        <Link href="tel:9666677405" target='_blank'>
                            <p className='flex gap-1 items-center text-[10px]'><span><BiPhoneCall className='lg:size-6' size={10} /></span> <span>Call Us</span></p>
                        </Link>
                    </button>
                </div>
            </div>
            <div className='... bg-[url("/bgdoz.svg")] bg-cover bg-no-repeat lg: '>
                <Image
                    priority
                    src={bgsvg}
                    alt="Follow us on Twitter"
                    className='w-56 h-52 lg:w-[701px] lg:h-[684px] lg:relative lg:bottom-10 lg:right-28'
                />
            </div>
        </div>
        <div>
            <Image
            src={farmhouse}
            alt='farmhouse'
            // height={400}
            // width={400}
            className='w-full h-full'
            />
        </div>
        </div>
    )
}

export default HomeBanner