import React from 'react'
import Image from 'next/image'
// import foot from '../../images/foot.jpg'
import phone from '../../images/onePlus10t.png'
import gplay from '../../images/googleplay.png'
import appstore from '../../images/applestore.png'
const Footer = () => {
    return (
        <div className='... bg-[url("/weffff.jpg")] lg:bg-center  bg-cover z-0 opacity-90'>
            <div className='flex items-center text-white lg:pt-24 lg:pl-40'>
                <Image
                    src={phone}
                    width={100}
                    height={100}
                    className='lg:w-56 lg'
                    priority
                />
                <div className='border-[1px] border-gray-50 opacity-90 p-2 rounded-md z-10'>
                    <p className='text-base lg:text-4xl lg:pb-8 lg:pt-8 lg:pl-20'>Your All-In-One App  Dozzy</p>
                    <ul className='text-[10px] flex lg:text-lg z-50 text-white lg:pl-20'>
                        <li className='w-2/4'>

                            <p>Head Office:</p>
                            <p className='w-[80%]'>Dozzy Private limited 5th Floor, Sigma Tech Park Whitefield, Bangalore</p>

                        </li>
                        <li>
                            <p>Contact Us</p>
                            <p className='text-sm font-bold lg:text-lg'>9111-9111-62</p>
                            <div className='pt-2 lg:pt-4 lg:'>
                                <p className='text-blue-700 font-semibold py-1 lg:py-0 lg:'><span className='bg-white p-[2px] lg:p-2 rounded-sm lg:rounded-lg lg:text-2xl'>App Launching Soon</span></p>
                                <p className='flex gap-2 pt-2 lg:pt-8'>
                                    <Image
                                        src={gplay}
                                        width={80}
                                        height={80}
                                        className='w-12 h-6 lg:w-28 lg:h-10'
                                    />
                                    <Image
                                        src={appstore}
                                        width={100}
                                        height={100}
                                        className='w-12 h-6 lg:w-28 lg:h-10'
                                    />
                                </p>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer