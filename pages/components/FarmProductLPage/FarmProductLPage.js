import React from 'react'
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import farm1 from '../../images/farmhouse/shan.jpg'
import farm2 from '../../images/farmhouse/cheritanfarmhouse.jpg'
import farm3 from '../../images/farmhouse/Sakethvanam.jpg'
import farm4 from '../../images/farmhouse/Urban.jpg'
import farm5 from '../../images/farmhouse/zozo.jpeg'
import farm6 from '../../images/farmhouse/shan.jpeg'
const FarmProductLPage = () => {
    const [visibleItems, setVisibleItems] = useState(7);
    const replaceText = (str) => {
        return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    };
    const filteredData = [
        {
            farm_name: 'Cheritan',
            price_24_hours: 5900,
            farm_image: farm1,
            weekdays:{oneday:"5900" ,twoday:"6800"},
            weekends:{oneday:"7900" ,twoday:"10800"}
        },
        {
            farm_name: 'Saketh Vanam',
            price_24_hours: 13000,
            farm_image: farm2,
            weekdays:{oneday:"13000" ,twoday:"25000"},
            weekends:{oneday:"18000" ,twoday:"35000"}
        },
        {
            farm_name: 'Srinivasa',
            price_24_hours: 13000,
            farm_image: farm3,
            weekdays:{oneday:"13000" ,twoday:"25000"},
            weekends:{oneday:"18000" ,twoday:"35000"}

        },
        {
            farm_name: 'Urban',
            price_24_hours: 8000,
            farm_image: farm4,
            weekdays:{oneday:"8000" ,twoday:"15000"},
            weekends:{oneday:"13000" ,twoday:"25000"}
        },
        {
            farm_name: 'Zoo Zoo',
            price_24_hours: 8000,
            farm_image: farm5,
            weekdays:{oneday:"8000" ,twoday:"15000"},
            weekends:{oneday:"13000" ,twoday:"25000"}
        },
        {
            farm_name: 'Shan',
            price_24_hours: 10000,
            farm_image: farm6,
            weekdays:{oneday:"10000" ,twoday:"19000"},
            weekends:{oneday:"15000" ,twoday:"29000"}
        },
    ];
    // console.log(filteredData[0].weekdays.oneday);
    return (
        <div>
            <div className='text-sm pl-4 py-4 md:px-12 lg:py-16'>
                <p className='font-bold md:text-xl lg:text-5xl'>Farm Houses In Hyderbad</p>
                <p className='md:py-4 lg:text-2xl lg:pb-4'>Get Very Low  prices Compared To Others</p>
            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 items-center xs:justify-center">
                    {filteredData?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:w-[454px] w-[97%]  xs:w-[90%] md:w-80 h-full lg:hover:scale-105">
                                <div className="relative h-96">
                                    <Link href={`/${item.farm_name.toLowerCase()}`}>
                                        <Image
                                            src={item.farm_image}
                                            alt="Car"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg relative"
                                            priority
                                        />
                                    </Link>
                                </div>

                                <div className="px-2 pt-4 flex flex-col gap-4 p-1">
                                    <div className='flex items-baseline justify-between px-2'>
                                        <Link href={`/${item.farm_name.toLowerCase()}`}><p className='text-[#556EE6]'>Dozzy Farm House</p></Link>
                                        {/* <p className="text-black font-bold">₹ {item.price_24_hours}/day</p> */}
                                        <div className='flex gap-2'>
                                            <p className="text-black font-bold flex flex-col text-[9px]"><span className='text-[#556EE6]'>Mon-Fri</span><span>₹ {item.weekdays.oneday} /1 Day</span></p>
                                            <p className="text-black font-bold flex flex-col text-[9px]"><span className=' text-[#556EE6]'>Fri-Sun</span><span>₹ 7900 /1 Day</span></p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between px-2'>
                                        <Link href={`/${item.farm_name.toLowerCase()}`}>
                                            <p className="text-gray-700 cursor-pointer font-semibold text-xl hover:text-red-600 w-fit">{item.farm_name}</p>
                                        </Link>
                                        {/* <div className='flex gap-2'>
                                            <p className="text-black font-bold flex flex-col text-[9px]"><span className='text-[#556EE6]'>Mon-Fri</span><span>₹ {item.weekdays.oneday} /1 Day</span></p>
                                            <p className="text-black font-bold flex flex-col text-[9px]"><span className=' text-[#556EE6]'>Fri-Sun</span><span>₹ 7900 /1 Day</span></p>
                                        </div> */}
                                    </div>

                                    <div className='text-black flex justify-center font-semibold'>For Booking</div>
                                    <div className='flex justify-around gap-1 pb-2 text-white'>
                                        <button className='bg-green-500 rounded-full p-2'>
                                            <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%21" target='_blank'>
                                                <p className=' flex gap-1 text-sm'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
                                            </Link>
                                        </button>
                                        <button className='bg-blue-500 rounded-full p-2'>
                                            <Link href="tel:9666677405" target='_blank'>
                                                <p className=' flex gap-1 text-sm'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FarmProductLPage