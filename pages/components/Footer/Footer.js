import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiPhoneCall } from "react-icons/fi";
import phone from '../../images/onePlus10t.webp'
import gplay from '../../images/ggle.webp'
import appstore from '../../images/apple.webp'
const Footer = () => {
    return (
        <div className='... bg-[url("/mld.jpg")] lg:bg-center  bg-cover z-0'>
            <div className='flex items-center text-white lg:pt-24 lg:pl-40 py-4 px-2'>
                <Image
                    src={phone}
                    alt='phone'
                    width={1000}
                    height={1000}
                    className='w-24 lg:w-56 lg'
                    priority
                />
                <div className='relative p-2 rounded-md'>
                    <div className='absolute inset-0 bg-black opacity-60 rounded-md z-0'></div>
                    <div className='relative z-10 p-1 roboto-text'>
                        <p className='text-base lg:text-4xl lg:pb-8 lg:pt-8 lg:pl-20 text-white'>Your All-In-One App Dozzy</p>
                        <ul className='text-[10px] flex flex-col lg:flex-row lg:text-lg text-white lg:pl-20'>
                            <li className='lg:w-2/4'>
                                <p>Head Office:</p>
                                <p className='lg:w-[80%]'>Dozzy Private limited 5th Floor, Sigma Tech Park Whitefield, Bangalore</p>
                            </li>
                        </ul>
                        <ul className='lg:pt-7 lg:pl-20 flex flex-col-reverse lg:flex-row'>
                            <li>
                                <p className='text-blue-700 font-semibold py-1 lg:py-0 lg:'>
                                    <span className='bg-white p-[2px] lg:p-2 rounded-sm lg:rounded-lg lg:text-2xl'>App Launching Soon</span>
                                </p>
                                <p className='flex gap-2 pt-1 items-center lg:pt-2'>
                                    <Image
                                        src={gplay}
                                        alt='google play'
                                        width={1000}
                                        height={1000}
                                        className='w-14 h-6 lg:w-28 lg:h-12'
                                    />
                                    <Image
                                        src={appstore}
                                        alt='apple store'
                                        width={1000}
                                        height={1000}
                                        className='w-12 h-4 lg:w-24 lg:h-8 rounded-sm'
                                    />
                                </p>
                            </li>
                            <li>
                                <div className='xl:pl-32 lg:pl-12 lg:pr-1 xl:pr-16 py-2'>
                                    <p className='lg:pb-2'>Contact Us</p>
                                    <Link className='lg:text-3xl font-bold text-sm flex items-center gap-1 lg:gap-2' href="tel:9111911162" target='_blank'><span><FiPhoneCall className='size-3 lg:size-6' /></span>9111-9111-62<span></span></Link>
                                </div>

                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer