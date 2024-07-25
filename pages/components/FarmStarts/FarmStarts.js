import React from 'react'
import Image from 'next/image';
import grpfarm from '../../images/farmgroup.webp'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
const FarmStarts = () => {
    return (
        <div className='py-6 px-4 md:px-12'>
            <p className='pb-4 font-bold text-xl lg:text-3xl pt-4 lg:pt-14 md:pb-7 font-opensans'>Farmhouses Starts At ₹5999/Day</p>
            <div className='flex'>
                <div >
                    <Image
                        src={grpfarm}
                        alt='farmhouse'
                        className=''
                    />
                </div>
                <div className='w-2/3 lg:pl-10'>
                    <p className='text-[10px] font-semibold pl-3  md:text-xl lg:text-3xl lg:w-[65%] '>Dozzy Has 10,000+ Attached
                        Farmhouses From Basic - Luxury
                        It's Just Starting At  ₹5999/Day
                        Only To View More</p>
                    <p  className='text-[11px] font-semibold pl-3  md:text-xl lg:text-3xl pt-3 lg:w-[65%] '>To View More</p>
                    
                    <div className='flex gap-1 text-white pt-3 md:pt-6 pl-4'>
                        <button className='bg-green-500 rounded-full py-1 px-2 md:px-4 md:py-2'>
                        <Link href="https://api.whatsapp.com/send?phone=+9111911162text=Hi%0AI%20am%20looking%20for%20a%farmhouse%20booking." target='_blank'>
                                <p className=' flex gap-1 lg:gap-2 items-center text-[10px] lg:text-lg'><span><FaWhatsapp className='lg:size-6' size={10} /></span> <span>Whatsapp</span></p>
                            </Link>
                        </button>
                        <button className='bg-blue-500 rounded-full py-1 px-2 w-16 lg:w-28'>
                            <Link href="tel:9666677405" target='_blank'>
                                <p className='flex gap-1 items-center text-[10px] lg:text-lg'><span><BiPhoneCall className='lg:size-6' size={10} /></span> <span>Call Us</span></p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FarmStarts;