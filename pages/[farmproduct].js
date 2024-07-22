import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { useState } from 'react';
import customData from './components/kk.json';
import { PiCarFill } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

import { FaPeopleLine } from "react-icons/fa6";

import { HiCurrencyRupee } from "react-icons/hi2";
// import farm1 from './images/farmhouse/'
import farm1 from './images/farmhouse/shan.jpg'
import farm2 from './images/farmhouse/cheritanfarmhouse.jpg'
import farm3 from './images/farmhouse/Sakethvanam.jpg'
import farm4 from './images/farmhouse/Urban.jpg'
import farm5 from './images/farmhouse/zozo.jpeg'
import farm6 from './images/farmhouse/shan.jpeg'
import { FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { GiBatteryPack } from "react-icons/gi";
import { MdOutlineWaterDamage } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

const CarDetails = () => {

  const router = useRouter();
  const [caritem, setCarItem] = useState('')
  const { farmproduct } = router.query;

  const customData = {
    "cheritan": {
      farm_name: 'Cheritan',
      price_24_hours: 5900,
      farm_image: farm1,
      weekdays: { oneday: "5900", twoday: "6800" },
      weekends: { oneday: "7900", twoday: "10800" },
      desc: "Cheritan Farmhouse, tucked away in the peaceful middle of the forest, provides a dreamlike haven from the bustling city life. Our farmhouse is set up to provide a perfect balance of leisure and enjoyment, guaranteeing you and your loved ones a memorable stay. Special features of Cheritan Farmhouse include a wonderful garden area, a cool swimming pool, a fully stocked kitchen with dishes and bowls, and a barbeque area for delicious meals. A 43-inch TV, WiFi, a Bluetooth audio system, and access to Netflix, Prime, Hotstar, Aha, and ZEE5 provide plenty of entertainment options. Play games like chess, carroms, shuttle, cricket, and shuttle to make sure everyone has a good time.",

    },
    "saketh vanam": {
      farm_name: 'Saketh Vanam',
      price_24_hours: 13000,
      farm_image: farm2,
      weekdays: { oneday: "13000", twoday: "25000" },
      weekends: { oneday: "18000", twoday: "35000" },
      desc: "Traditionally Farmhouses are simply homes built on agricultural lands to house and protect who owned or worked the land. The term Farmhouse isn't necessarily connected to a particular style identified by a fixed set of features, but a setting for a way of life. This is most likely why its appeal seems to be timeless."
    },
    "srinivasa": {
      farm_name: 'Srinivasa',
      price_24_hours: 13000,
      farm_image: farm3,
      weekdays: { oneday: "13000", twoday: "25000" },
      weekends: { oneday: "18000", twoday: "35000" },
      desc: "SRINIVASA Farmhouse, nestled amidst the natural beauty, provides a serene escape from the city's hustle and bustle. Tailored for both relaxation and fun, our farmhouse guarantees a memorable experience for you and your loved ones. It features a refreshing swimming pool/baby pool, 12 acres of mango trees, a banyan tree, a fish pond, a fully equipped kitchen with bowls and plates, and a barbecue setup for delightful meals. For entertainment, there's a Bluetooth music system, a 100-inch big projector, WiFi, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube. Game enthusiasts can indulge in cricket, shuttle, carroms, and chess, promising endless enjoyment for everyone. "
    },
    "urban": {
      farm_name: 'Urban',
      price_24_hours: 8000,
      farm_image: farm4,
      weekdays: { oneday: "8000", twoday: "15000" },
      weekends: { oneday: "13000", twoday: "25000" },
      desc: "A tranquil haven from the bustle of the city, URBAN Farmhouse is tucked away in the picturesque surroundings. Our farmhouse, designed for your enjoyment and relaxation, ensures that you and your loved ones will have an unforgettable experience. Along with a fish pond, 12 acres of mango and banyan trees, a fully stocked kitchen with dishes and bowls, and a grill area for delicious dinners, it has a refreshing swimming pool and baby pool. There is a 100-inch large projector, WiFi, a Bluetooth audio system, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube for entertainment. Chess, carroms, shuttle, cricket, and shuttle are available for game lovers to enjoy, with guaranteed fun for everybody."
    },
    "zoo zoo": {
      farm_name: 'Zoo Zoo',
      price_24_hours: 8000,
      farm_image: farm5,
      weekdays: { oneday: "8000", twoday: "15000" },
      weekends: { oneday: "13000", twoday: "25000" },
      desc: "The tranquil haven that Zoo Zoo Farmhouse provides from the bustle of the city is located deep inside the natural world. You and your loved ones are guaranteed a pleasant stay at our farmhouse, which is designed to offer the ideal balance of leisure and enjoyment.The Zoo Zoo Farmhouse has unique features such a cool pool, comfortable sit-out areas, a fully stocked kitchen with dishes and bowls, and a grill for delicious dinners. With a 55-inch TV, WiFi, Bluetooth audio system, Aha, ZEE5, YouTube, Netflix, and Prime, there are plenty of entertainment alternatives. Chess, carroms, shuttle, and cricket are available for those who enjoy playing games, so everyone will have a great time."
    },
    "shan": {
      farm_name: 'Shan',
      price_24_hours: 10000,
      farm_image: farm6,
      weekdays: { oneday: "10000", twoday: "19000" },
      weekends: { oneday: "15000", twoday: "29000" },
      desc: "SHAN Farmhouse provides a tranquil getaway from the bustle of the city because it is tucked away in a beautiful natural setting. Our farmhouse is designed to provide you and your loved ones with an unforgettable experience, combining leisure and enjoyment. It has unique features including a cool pool, five acres of mango trees, a fully functional kitchen with dishes and bowls, and a grill for delicious dinners. A 100-inch large projector, Bluetooth audio system, WiFi, and access to Netflix, Prime, Hotstar, Aha, ZEE5, and YouTube are available for amusement. Gamers can play chess, carroms, shuttle, cricket, and shuttle, all of which guarantee hours of fun for all players. "
    }
  }

  // console.log(customData, "jjss");

  return (
    <div className='bg-white text-black'>
      <div className=' lg:px-2 mx-auto lg:mx-36 xl:mx-16 md:p-28 lg:p-4 xs:px-5 sm:pt-44 px-2 py-2'>
        <div className='flex flex-col xs:mt-48 md:mt-20 lg:mt-2 md:flex-row p-2 border-2 border-[#556EE6] rounded-md'>
          <div className="relative md:w-2/3 w-full p-1 xl:pt-6 xs:pt-8 border-1 border-gray-300 h-[434px]">
            <Image
              src={customData[farmproduct?.toLowerCase()]?.farm_image}
              alt="Car"
              style={{ objectFit: "cover" }}
              className="relative"
              fill
            />
          </div>
          <div className='flex flex-col justify-evenly'>
            <div>
              <h2 className='p-1 font-bold font-manrope text-lg lg:pl-20 pt-4 capitalize'>{customData[farmproduct?.toLowerCase()]?.farm_name} from <span className='text-blue-400'> {customData[farmproduct?.toLowerCase()]?.price_24_hours}/day</span>
              </h2>

            </div>
          </div>
        </div>
        <div className='pt-6 lg:hidden'>
          <h2 className='font-semibold text-xl font-manrope pb-2'>Contact Us By</h2>
          <div className='flex justify-start gap-2 lg:gap-5 xl:gap-8 xl:pt-4 pb-2 xs:gap-2 xs:pt-2 text-white'>
            <button className='bg-green-500 rounded-full p-2 lg:p-3'>
              <Link href="https://api.whatsapp.com/send?phone=9666677405" target='_blank'>
                <p className=' flex items-center gap-1 text-sm'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
              </Link>
            </button>
            <button className='bg-blue-500 rounded-full p-2 lg:p-3 lg:px-7'>
              <Link href="tel:9666677405" target='_blank'>
                <p className=' flex items-center gap-1 text-sm'><span><BiPhoneCall className='xl:size-6' /></span> <span>Call Us</span></p>
              </Link>
            </button>
          </div>
        </div>
        <div className='lg:w-3/5'>
          <div className="grid grid-cols-2 gap-2 lg:pt-12 xl:pt-8 pt-4 text-xs
                     font-semibold lg:text-base xs: lg:w-full">
            <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
              <HiCurrencyRupee className="bg-orange-200 rounded-md p-1 text-xs" size={20} />
              <p className="ml-1">Zero Deposit</p>
            </div>
            <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
              <FaPeopleLine className="bg-orange-200 rounded px-[4px]" size={20} />
              <p className="ml-1">Unlimited Persons</p>
            </div>
          </div>
        </div>
        <div className='overview pt-10'>
          <h2 className='font-bold text-2xl border-l-2 border-red-900 mb-4 font-manrope'>Our Amenities</h2>
          <ul className='my-2 flex flex-wrap pb-4 justify-center'>
            <li className='w-36 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2   '>
              <FaSwimmingPool size={30} className='text-green-700' />
              <p className='font text-xs'>Swimming Pool</p>
            </li>
            <li className='w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <TbAirConditioning size={30} className={`text-${caritem?.vehicle_color}-400`} />
              <p className='font text-xs'>Air Conditioner</p>
            </li>
            <li className='w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <IoWifi size={30} className='text-amber-900' />
              <p className='font- text-xs'>Wifi Connection</p>
            </li>
            <li className='w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <GiBatteryPack size={30} className='text-orange-500' />
              <p className='font- text-xs'>Power Backup</p>
            </li>
            <li className='w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <MdOutlineWaterDamage size={30} className='text-yellow-500' />
              <p className='font- text-xs'>Water Purifier + Gycer</p>
            </li>
            <li className='w-36 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <BiCameraMovie size={30} className='text-blue-500' />
              <p className='font- text-xs'>Tv / Projector</p>
            </li>
          </ul>
        </div>
        <h2 className='font-bold text-2xl border-l-2 border-red-900 mb-3 mt-4 font-manrope' >Description</h2>
        <p className='font-light p-1 text-[14px] leading-6 font-jakarta pb-8'>
          {customData[farmproduct?.toLowerCase()]?.desc}
        </p>

      </div>
    </div>
  );
};

export default CarDetails;

