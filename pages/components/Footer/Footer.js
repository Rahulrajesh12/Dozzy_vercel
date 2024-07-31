import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import foot from '../../images/foot.jpg'
import phone from '../../images/onePlus10t.png'
import gplay from '../../images/ggle.webp'
import appstore from '../../images/apple.webp'
const Footer = () => {
    return (
        <div className='... bg-[url("/mld.jpg")] lg:bg-center  bg-cover z-0 opacity-90'>
            <div className='flex items-center text-white lg:pt-24 lg:pl-40 py-4'>
                <Image
                    src={phone}
                    alt='phone'
                    width={1000}
                    height={1000}
                    className='w-24 lg:w-56 lg'
                    priority
                />
                <div className='relative p-1 rounded-md border-[1px] border-gray-50'>
                    <div className='absolute inset-0 bg-black opacity-60 rounded-md z-0'></div>
                    <div className='relative z-10 p-1 roboto-text'>
                        <p className='text-base lg:text-4xl lg:pb-8 lg:pt-8 lg:pl-20 text-white'>Your All-In-One App Dozzy</p>
                        <ul className='text-[10px] flex flex-col lg:flex-row lg:text-lg text-white lg:pl-20'>
                            <li className='lg:w-2/4'>
                                <p>Head Office:</p>
                                <p className='lg:w-[80%]'>Dozzy Private limited 5th Floor, Sigma Tech Park Whitefield, Bangalore</p>
                            </li>
                            <li>
                                <div className='lg:pt-6'>
                                    <p className='pb-2'>Contact Us</p>
                                    {/* <p className='text-sm font-bold lg:text-lg'>9111-9111-62</p> */}
                                    <Link className='lg:text-4xl lg:pt-4 text-white font-bold text-sm' href="tel:9111911162" target='_blank'>9111-9111-62</Link>
                                </div>
                               
                            </li>
                        </ul>
                        <div className='lg:pt-7 lg:pl-20'>
                                    <p className='text-blue-700 font-semibold py-1 lg:py-0 lg:'>
                                        <span className='bg-white p-[2px] lg:p-2 rounded-sm lg:rounded-lg lg:text-2xl'>App Launching Soon</span>
                                    </p>
                                    <p className='flex gap-2 pt-1 items-center lg:pt-8'>
                                        <Image
                                            src={gplay}
                                            alt='google play'
                                            width={100}
                                            height={100}
                                            className='w-14 h-6 lg:w-28 lg:h-12'
                                        />
                                        <Image
                                            src={appstore}
                                            alt='apple store'
                                            width={100}
                                            height={100}
                                            className='w-12 h-4 lg:w-24 lg:h-8 rounded-sm'
                                        />
                                    </p>
                                </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer