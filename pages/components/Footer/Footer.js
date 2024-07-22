import React from 'react'
import Image from 'next/image'
// import foot from '../../images/foot.jpg'
import phone from '../../images/phone1.png'
import gplay from '../../images/googleplay.png'
import appstore from '../../images/applestore.png'
const Footer = () => {
    return (
        <div className='... bg-[url("/footer.png")] bg-blend-saturation bg-cover'>
            <div className='flex items-center text-white lg:py-20 lg:pl-40'>
                <Image
                    src={phone}
                    width={100}
                    height={100}
                    className='pb-2 lg:w-48 lg'
                />
                <div>
                    <ul className='text-xs lg:text-lg z-50 text-white font-semibold lg:pl-44'>
                        <li className='text-base lg:text-4xl'>Your All-In-One App  Dozzy</li>
                        <li>Head Office:</li>
                        <li className='w-[70%]'>Dozzy Private Limited 5th Floor, Sigma Tech Park Whitefield, Bangalore</li>
                        <li>9111-9111-62</li> 
                        <li className='text-blue-700 font-semibold'>App Launching Soon</li>
                        <li className='flex gap-2 pt-2'>
                            <Image
                                src={gplay}
                                width={80}
                                height={80}
                                className='w-10 h-4'
                            />
                            <Image
                                src={appstore}
                                width={100}
                                height={100}
                                className='w-10 h-4'
                            />

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer