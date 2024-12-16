import React from 'react'
import Image from 'next/image'
import bgsvg from '../../images/traveller.webp'
import bgfarm from '../../../public/kk.webp'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import Head from 'next/head';
import LinkCall from '../LinkCall';



const HomeBanner = () => {
    return (
        <div>
            <Head>
            <link rel="preload" href="/kk.webp" as="image" />
            </Head>
            <div className='flex justify-between'>
                <div className='pl-5 pt-6 md:pl-12 lg:pl-20 lg:pt-44  flex flex-col gap-3 lg:gap-8 '>
                    <p className='text-[8px] text-[#556EE6] font-bold lg:text-xl'>Most Affordable Farmhouses in India</p>
                    <h2 className='text-lg font-bold lg:font-bold flex flex-col lg:gap-2 lg:text-6xl'><span>Farmhouses</span> <span>In Hyderabad</span></h2>
                    <div className='flex gap-2 text-white lg:pt-6 pb-16'>
                        <button className='bg-green-500 rounded-lg py-1 px-2 lg:px-5 w-20 lg:w-40'>
                            <Link onClick={(e) => LinkCall(e,"https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking.")} href="https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking." target='_blank'>
                                <p className=' flex gap-1 items-center text-[10px] lg:text-lg'><span><FaWhatsapp className='lg:size-6' size={10} /></span> <span>Whatsapp</span></p>
                            </Link>
                        </button>
                        <button className='bg-blue-500 rounded-lg py-1 px-2 lg:px-5 w-20 lg:w-40'>
                            <Link onClick={(e) => LinkCall(e,"tel:9666655973")} href="tel:9666655973" target='_blank'>
                                <p className='flex gap-1 items-center text-[10px] lg:text-lg'><span><BiPhoneCall className='lg:size-6' size={10} /></span> <span>Call US</span></p>
                            </Link>
                        </button>

                    </div>
                </div>
                <div className='... bg-[url("/bgdoz.svg")] bg-cover bg-no-repeat lg: '>
                    <Image
                        priority
                        src={bgsvg}
                        alt="from houses near hyderabad "
                        className='lg:w-[701px] lg:h-[684px] max lg:relative lg:bottom-10 lg:right-28'
                        // layout='responsive'
                        height={1000}
                        width={1000}
                    />
                </div>
            </div>
            <div>
                <Image
                    priority
                    src={bgfarm}
                    alt="from houses near hyderabad"
                    className=' w-screen lg:h-[700px] object-cover'
                    height={1000}
                    width={1000}
                />
                <div className=''>
                    <ul className='text-gray-400 flex bg-black opacity-90 items-center justify-center text-[10px] lg:text-lg lg:font-bold text-center'>
                        <li className='w-full p-1 lg:border-r-2 border-r-[1px] border-gray-500 flex flex-col '><p>1000+</p><p>Total Dozzy Farmhouses</p></li>
                        <li className='w-full p-1 flex flex-col '><p>30</p><p >Dozzy Available Cities</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner