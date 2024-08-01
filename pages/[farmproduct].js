import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import customData from './components/kk.json';
import { PiCarFill } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

import { FaPeopleLine } from "react-icons/fa6";

import { HiCurrencyRupee } from "react-icons/hi2";
import { FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { GiBatteryPack } from "react-icons/gi";
import { MdOutlineWaterDamage } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { FaKitchenSet } from "react-icons/fa6";
import { GiBarbecue } from "react-icons/gi";
import { IoIosBonfire } from "react-icons/io";
import { BiSolidSpeaker } from "react-icons/bi";
import { MdSportsEsports } from "react-icons/md";
import { MdOutlineSportsVolleyball } from "react-icons/md";

import { MdSportsHandball } from "react-icons/md";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import cfarm1 from "./images/cheritan/1.webp"
import cfarm2 from "./images/cheritan/2.webp"
import cfarm3 from "./images/cheritan/4.webp"

import skfarm1 from "./images/saketh/1.webp"
import skfarm2 from "./images/saketh/2.webp"
import skfarm3 from "./images/saketh/3.webp"

import shfarm1 from "./images/shan/1.webp"
import shfarm2 from "./images/shan/2.webp"
import shfarm3 from "./images/shan/3.webp"

import srfarm1 from "./images/srinivasa/1.webp"
import srfarm2 from "./images/srinivasa/2.webp"
import srfarm3 from "./images/srinivasa/3.webp"

import ufarm1 from "./images/urban/1.webp"
import ufarm2 from "./images/urban/2.webp"
import ufarm3 from "./images/urban/3.webp"

import zfarm1 from "./images/zoozoo/1.webp"
import zfarm2 from "./images/zoozoo/2.webp"
import zfarm3 from "./images/zoozoo/3.webp"


const CarDetails = () => {

  const router = useRouter();
  const [caritem, setCarItem] = useState('')
  const { farmproduct } = router.query;

  const customData = {
    "cheritan": {
      farm_name: 'Cheritan',
      price_24_hours: 5900,
      farm_image: { c1: cfarm1, c2: cfarm2, c3: cfarm3, },
      weekdays: { oneday: "5900", twoday: "6800" },
      weekends: { oneday: "7900", twoday: "10800" },
      desc: "Cheritan Farmhouse, tucked away in the peaceful middle of the forest, provides a dreamlike haven from the bustling city life. Our farmhouse is set up to provide a perfect balance of leisure and enjoyment, guaranteeing you and your loved ones a memorable stay. Special features of Cheritan Farmhouse include a wonderful garden area, a cool swimming pool, a fully stocked kitchen with dishes and bowls, and a barbeque area for delicious meals. A 43-inch TV, WiFi, a Bluetooth audio system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5 provide plenty of entertainment options. Play games like chess, carroms, shuttle, cricket, and shuttle to make sure everyone has a good time.",

    },
    "saketh vanam": {
      farm_name: 'Saketh Vanam',
      price_24_hours: 13000,
      farm_image: { c1: skfarm1, c2: skfarm2, c3: skfarm3, },
      weekdays: { oneday: "13000", twoday: "25000" },
      weekends: { oneday: "18000", twoday: "35000" },
      desc: "Traditionally Farmhouses are simply homes built on agricultural lands to house and protect who owned or worked the land. The term Farmhouse isn't necessarily connected to a particular style identified by a fixed set of features, but a setting for a way of life. This is most likely why its appeal seems to be timeless."
    },
    "srinivasa": {
      farm_name: 'Srinivasa',
      price_24_hours: 13000,
      farm_image: { c1: srfarm1, c2: srfarm2, c3: srfarm3, },
      weekdays: { oneday: "13000", twoday: "25000" },
      weekends: { oneday: "18000", twoday: "35000" },
      desc: "SRINIVASA Farmhouse, nestled amidst the natural beauty, provides a serene escape from the city's hustle and bustle. Tailored for both relaxation and fun, our farmhouse guarantees a memorable experience for you and your loved ones. It features a refreshing swimming pool/baby pool, 12 acres of mango trees, a banyan tree, a fish pond, a fully equipped kitchen with bowls and plates, and a barbecue setup for delightful meals. For entertainment, there's a Bluetooth music system, a 100-inch big projector, WiFi, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube. Game enthusiasts can indulge in cricket, shuttle, carroms, and chess, promising endless enjoyment for everyone. "
    },
    "urban": {
      farm_name: 'Urban',
      price_24_hours: 8000,
      farm_image: { c1: ufarm1, c2: ufarm2, c3: ufarm3, },
      weekdays: { oneday: "8000", twoday: "15000" },
      weekends: { oneday: "13000", twoday: "25000" },
      desc: "A tranquil haven from the bustle of the city, URBAN Farmhouse is tucked away in the picturesque surroundings. Our farmhouse, designed for your enjoyment and relaxation, ensures that you and your loved ones will have an unforgettable experience. Along with a fish pond, 12 acres of mango and banyan trees, a fully stocked kitchen with dishes and bowls, and a grill area for delicious dinners, it has a refreshing swimming pool and baby pool. There is a 100-inch large projector, WiFi, a Bluetooth audio system, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube for entertainment. Chess, carroms, shuttle, cricket, and shuttle are available for game lovers to enjoy, with guaranteed fun for everybody."
    },
    "zoo zoo": {
      farm_name: 'Zoo Zoo',
      price_24_hours: 8000,
      farm_image: { c1: zfarm1, c2: zfarm2, c3: zfarm3, },
      weekdays: { oneday: "8000", twoday: "15000" },
      weekends: { oneday: "13000", twoday: "25000" },
      desc: "The tranquil haven that Zoo Zoo Farmhouse provides from the bustle of the city is located deep inside the natural world. You and your loved ones are guaranteed a pleasant stay at our farmhouse, which is designed to offer the ideal balance of leisure and enjoyment.The Zoo Zoo Farmhouse has unique features such a cool pool, comfortable sit-out areas, a fully stocked kitchen with dishes and bowls, and a grill for delicious dinners. With a 55-inch TV, WiFi, Bluetooth audio system, Aha, ZEE5, YouTube, Netflix, and Prime, there are plenty of entertainment alternatives. Chess, carroms, shuttle, and cricket are available for those who enjoy playing games, so everyone will have a great time."
    },
    "shan": {
      farm_name: 'Shan',
      price_24_hours: 10000,
      farm_image: { c1: shfarm1, c2: shfarm2, c3: shfarm3, },
      weekdays: { oneday: "10000", twoday: "19000" },
      weekends: { oneday: "15000", twoday: "29000" },
      desc: "SHAN Farmhouse provides a tranquil getaway from the bustle of the city because it is tucked away in a beautiful natural setting. Our farmhouse is designed to provide you and your loved ones with an unforgettable experience, combining leisure and enjoyment. It has unique features including a cool pool, five acres of mango trees, a fully functional kitchen with dishes and bowls, and a grill for delicious dinners. A 100-inch large projector, Bluetooth audio system, WiFi, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube are available for amusement. Gamers can play chess, carroms, shuttle, cricket, and shuttle, all of which guarantee hours of fun for all players. "
    }
  }

  return (
    <div className='bg-white text-black mont-text'>
      <div className=' lg:px-2 lg:mx-16 xl:mx-16 lg:p-4  px-2 py-2'>
        <div className='flex flex-col md:flex-row md:mt-2 lg:mt-2 lg:gap-16  p-2 border-2 border-[#556EE6] rounded-md'>
          <div className="crsldetails rounded-lg xl:w-[45%] lg:w-[70%]">
            <Carousel
              showThumbs={false}
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              className=""
            >
              {<Image className='rounded-md' src={customData[farmproduct?.toLowerCase()]?.farm_image.c1} alt={"1"} />}
              {<Image className='rounded-md' src={customData[farmproduct?.toLowerCase()]?.farm_image.c2} alt={"2"} />}
              {<Image className='rounded-md' src={customData[farmproduct?.toLowerCase()]?.farm_image.c3} alt={"3"} />}
            </Carousel>
          </div>
          <div className='flex flex-col lg:gap-20 gap-4 lg:pt-20 pt-2'>
            <div>
              <h2 className='p-1 font-bold  text-xl lg:text-3xl lg: capitalize'>{customData[farmproduct?.toLowerCase()]?.farm_name} Farm House <p className='text-blue-600 pt-3'>₹ {customData[farmproduct?.toLowerCase()]?.price_24_hours}/day</p>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4  text-xs
                     font-semibold lg:text-base xs: lg:w-full">
                <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                  <HiCurrencyRupee className="bg-[#556ee6] rounded-md p-1 text-white text-xs" size={30} />
                  <p className="ml-1">Zero Deposit</p>
                </div>
                <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                  <FaPeopleLine className="bg-[#556ee6] text-white rounded px-[4px]" size={30} />
                  <p className="ml-1">Unlimited Persons</p>
                </div>
              </div>
            <div className=''>
              <h2 className='font-semibold text-xl'>Contact Us By</h2>
              <div className='flex justify-start gap-2 lg:gap-5 xl:gap-8 xl:pt-4 pb-2 xs:gap-2 xs:pt-2 text-white'>
                <button className='bg-green-500 rounded-md p-2 lg:p-3'>
                  <Link href="https://api.whatsapp.com/send?phone=+9111911162text=Hi%0AI%20am%20looking%20for%20a%farmhouse%20booking." target='_blank'>
                    <p className=' flex items-center gap-1 text-sm'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
                  </Link>
                </button>
                <button className='bg-blue-500 rounded-md p-2 lg:p-3 lg:px-7'>
                  <Link href="tel:9111911162" target='_blank'>
                    <p className=' flex items-center gap-1 text-sm'><span><BiPhoneCall className='xl:size-6' /></span> <span>Call Us</span></p>
                  </Link>
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div className='overview pt-10 px-5 lg:px-0'>
          <h2 className='font-bold text-2xl lg:text-3xl border-l-2 border-red-900 mb-4  '>Our Amenities</h2>
          <ul className='my-2 flex-wrap pb-4 grid grid-cols-2 gap-y-3 lg:flex justify-center lg:justify-normal'>
            <li className='w-36 lg:w-36 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2   '>
              <FaSwimmingPool size={20} className='text-green-700 lg:size-10' />
              <p className='font text-xs lg:text-base text-center '>Swimming Pool</p>
            </li>
            <li className='w-36 lg:w-36 w- flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <TbAirConditioning size={20} className='text-blue-700 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Air Conditioner</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <IoWifi size={20} className='text-amber-900 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Wifi Connection</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <GiBatteryPack size={20} className='text-orange-500 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Power Backup</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <MdOutlineWaterDamage size={20} className='text-yellow-500 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Water Purifier + Gyser</p>
            </li>

          </ul>
          <ul className='my-2 flex-wrap pb-4 grid grid-cols-2 gap-y-3 lg:flex justify-center lg:justify-normal'>
            <li className='w-36 lg:w-36 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2   '>
              <FaKitchenSet size={20} className='text-gray-600 lg:size-10' />
              <p className='font text-xs lg:text-base text-center '>Private Kitchen</p>
            </li>
            <li className='w-36 lg:w-36 w- flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <GiBarbecue size={20} className={`text-${caritem?.vehicle_color}-400 lg:size-10`} />
              <p className='font text-xs lg:text-base text-center'>Barbeque</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <IoIosBonfire size={20} className='text-orange-700 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Bonfire</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <BiCameraMovie size={20} className='text-black lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>Tv / Projector</p>
            </li>
            <li className='w-36 lg:w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <MdOutlineSportsVolleyball size={20} className='text-purple-500 lg:size-10' />
              <p className='font text-xs lg:text-base text-center'>In & Out-Door Games</p>
            </li>

          </ul>
        </div>
        <div className='px-5 lg:px-0'>
          <p className='font-bold text-2xl lg:text-3xl border-l-2 border-red-900 mt-4  '>Property Rules</p>
          <div className='flex flex-wrap flex-col'>
            <ul className='p-4 text-sm font-normaltext-[14px] lg:text-lg leading-6 font-poppins'>
              <li className='list-disc'><p>Check in after 1pm | Check Out before 12pm </p></li>
              <li className='list-disc'><p>Alcohol Consumption Is Allowed</p></li>
              <li className='list-disc'><p>Pets are allowed </p></li>
              <li className='list-disc'><p>Guests are responsible for their safety and belongings</p></li>
              <li className='list-disc'><p>Cooking and Barbequee available on demand</p></li>
              <li className='list-disc'><p>Aadhar photo is compulsory for each & every person</p></li>
              <li className='list-disc'><p>No delay in Checkout We have Another Booking</p></li>
              <li className='list-disc'><p>Any Damage Customer has to Pay</p></li>
              
            </ul>
            <ul className='p-4 text-sm font-normaltext-[14px] lg:text-lg leading-6 font-poppins capitalize'>
              <p className='font-bold text-xl lg:text-2xl  text-gray-500 underline pb-2'>Additional Charges</p>
              <li className='list-disc'><p>Self Cooking Access - 500</p></li>
              <li className='list-disc'><p>barbecue Setup - 500</p></li>
              <li className='list-disc'>bonfire Setup - 500<p></p></li>
              <li className='list-disc'><p>Cleaning charges - 500</p></li>
              <li className='list-disc'><p>extra per person - 500</p></li>
            </ul>

          </div>

        </div>
        <div className='px-5 lg:px-0'>
        <h2 className='font-bold text-2xl lg:text-3xl border-l-2 border-red-900 mb-3 mt-4 ' >Description</h2>
        <p className='font-normal p-1 text-[14px] lg:text-lg leading-6 font-poppins pb-8 lg:w-[50%]'>
          {customData[farmproduct?.toLowerCase()]?.desc}
        </p>
        </div>

      </div>
    </div>
  );
};

export default CarDetails;

