import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkCall from "../LinkCall";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { BsStarFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

import skfarm1 from "../../images/saketh/1.webp"
import skfarm2 from "../../images/saketh/2.webp"
import skfarm3 from "../../images/saketh/3.webp"

import shfarm1 from "../../images/shan/1.webp"
import shfarm2 from "../../images/shan/2.webp"
import shfarm3 from "../../images/shan/3.webp"

import srfarm1 from "../../images/srinivasa/1.webp"
import srfarm2 from "../../images/srinivasa/2.webp"
import srfarm3 from "../../images/srinivasa/3.webp"

import zfarm1 from "../../images/zoozoo/1.webp"
import zfarm2 from "../../images/zoozoo/2.webp"
import zfarm3 from "../../images/zoozoo/3.webp"

import ty1 from '../../images/tyb/1.webp'
import ty2 from '../../images/tyb/2.webp'
import ty3 from '../../images/tyb/3.webp'

import a1 from '../../images/a1/1.webp'
import a2 from '../../images/a1/2.webp'
import a3 from '../../images/a1/3.webp'

import alsafa1 from '../../images/alsafa/1.webp'
import alsafa2 from '../../images/alsafa/2.webp'
import alsafa3 from '../../images/alsafa/3.webp'

import courtyard1 from '../../images/courtyard/1.webp'
import courtyard2 from '../../images/courtyard/2.webp'
import courtyard3 from '../../images/courtyard/3.webp'

import holiday1 from '../../images/holiday/1.webp'
import holiday2 from '../../images/holiday/2.webp'
import holiday3 from '../../images/holiday/3.webp'

import nbr1 from '../../images/nbr/1.webp'
import nbr2 from '../../images/nbr/2.webp'
import nbr3 from '../../images/nbr/3.webp'

import pleasant1 from '../../images/pleasant/1.webp'
import pleasant2 from '../../images/pleasant/2.webp'
import pleasant3 from '../../images/pleasant/3.webp'

import serinity1 from '../../images/serinity/1.webp'
import serinity2 from '../../images/serinity/2.webp'
import serinity3 from '../../images/serinity/3.webp'

import sp1 from '../../images/sp/1.webp'
import sp2 from '../../images/sp/2.webp'
import sp3 from '../../images/sp/3.webp'

import taksh1 from '../../images/taksh/1.webp'
import taksh2 from '../../images/taksh/2.webp'
import taksh3 from '../../images/taksh/3.webp'

import starbh1 from '../../images/starbh/1.webp'
import starbh2 from '../../images/starbh/2.webp'
import starbh3 from '../../images/starbh/3.webp'

import starling1 from '../../images/starling/1.webp'
import starling2 from '../../images/starling/2.webp'
import starling3 from '../../images/starling/3.webp'

import rajes1 from '../../images/rajes/1.webp'
import rajes2 from '../../images/rajes/2.webp'
import rajes3 from '../../images/rajes/3.webp'

import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FarmProductLPage = ({ count }) => {
    const [mobileC,setMobileC] = useState(false)
    useEffect(()=>{

        if(window.innerWidth<700)
        {
            setMobileC(true);
        }
    },[])
    const router = useRouter();
    const [autoPlay, setAutoPlay] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setAutoPlay(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setAutoPlay(false);
    }, []);
    const filteredData = [
        {
            farm_name: "Saketh Vanam",
            price_24_hours: 13000,
            farm_image: { c1: skfarm1, c2: skfarm2, c3: skfarm3, },
            weekdays: { oneday: "10000", twoday: "25000" },
            weekends: { oneday: "12000", twoday: "35000" },
        },
        {
            farm_name: "Srinivasa",
            price_24_hours: 13000,
            farm_image: { c1: srfarm1, c2: srfarm2, c3: srfarm3, },
            weekdays: { oneday: "15000", twoday: "25000" },
            weekends: { oneday: "17000", twoday: "35000" },
        },
        {
            farm_name: "Zoo Zoo",
            price_24_hours: 8000,
            farm_image: { c1: zfarm1, c2: zfarm2, c3: zfarm3, },
            weekdays: { oneday: "8000", twoday: "15000" },
            weekends: { oneday: "10000", twoday: "25000" },
        },
        {
            farm_name: "Shan",
            price_24_hours: 10000,
            farm_image: { c1: shfarm1, c2: shfarm2, c3: shfarm3, },
            weekdays: { oneday: "10000", twoday: "19000" },
            weekends: { oneday: "12000", twoday: "29000" },
        },
        // {
        //     farm_name: "Sravan",
        //     price_24_hours: 17000,
        //     farm_image: { c1: srvf1, c2: srvf2, c3: srvf3, },
        //     weekdays: { oneday: "17000", twoday: "34000" },
        //     weekends: { oneday: "17000", twoday: "34000" },
        // },
        {
            farm_name: "TYB",
            farm_image: { c1: ty1, c2: ty2, c3: ty3, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "12000", twoday: "24000" },
        },
        {
            farm_name: "AL Haadi",
            farm_image: { c1: a1, c2: a2, c3: a3, },
            weekdays: { oneday: "15000", twoday: "20000" },
            weekends: { oneday: "17000", twoday: "24000" },
        },
        {
            farm_name: "Alsafa",
            farm_image: { c1: alsafa1, c2: alsafa2, c3: alsafa3, },
            weekdays: { oneday: "13000", twoday: "20000" },
            weekends: { oneday: "15000", twoday: "24000" },
        },
        {
            farm_name: "CourtYard",
            farm_image: { c1: courtyard1, c2: courtyard2, c3: courtyard3, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "12000", twoday: "24000" },
        },
        {
            farm_name: "Holiday",
            farm_image: { c1: holiday1, c2: holiday2, c3: holiday3, },
            weekdays: { oneday: "8000", twoday: "20000" },
            weekends: { oneday: "10000", twoday: "24000" },
        },
        {
            farm_name: "NBR",
            farm_image: { c1: nbr1, c2: nbr2, c3: nbr3, },
            weekdays: { oneday: "8000", twoday: "20000" },
            weekends: { oneday: "10000", twoday: "24000" },
        },
        {
            farm_name: "Pleasant View",
            farm_image: { c1: pleasant1, c2: pleasant2, c3: pleasant3, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "12000", twoday: "24000" },
        },
        {
            farm_name: "Serenity",
            farm_image: { c1: serinity1, c2: serinity2, c3: serinity3, },
            weekdays: { oneday: "8000", twoday: "20000" },
            weekends: { oneday: "9000", twoday: "24000" },
        },
        {
            farm_name: "SP Farmhouse",
            farm_image: { c1: sp1, c2: sp2, c3: sp3, },
            weekdays: { oneday: "12000", twoday: "24000" },
            weekends: { oneday: "15000", twoday: "3000" },
        },
        {
            farm_name: "Takshvi",
            farm_image: { c1: taksh1, c2: taksh2, c3: taksh3, },
            weekdays: { oneday: "10000", twoday: "20000" },
            weekends: { oneday: "12000", twoday: "24000" },
        },
        {
            farm_name: "Star Lingam",
            farm_image: { c1: starling1, c2: starling2, c3: starling3, },
            weekdays: { oneday: "15000", twoday: "20000" },
            weekends: { oneday: "17000", twoday: "24000" },
        },
        {
            farm_name: "Star Bhima",
            farm_image: { c1: starbh1, c2: starbh2, c3: starbh3, },
            weekdays: { oneday: "15000", twoday: "20000" },
            weekends: { oneday: "17000", twoday: "24000" },
        },
        {
            farm_name: "Rajeswari",
            farm_image: { c1: rajes1, c2: rajes2, c3: rajes3, },
            weekdays: { oneday: "15000", twoday: "20000" },
            weekends: { oneday: "17000", twoday: "24000" },
        },
    ];
    return (
        <div>
            <div className="text-sm pl-4 py-4 md:px-20 lg:py-16 text-black">
                <p className="font-semibold md:text-xl lg:text-5xl font-poppins">
                    Farm Houses In Hyderbad
                </p>
                <p className="md:py-4 lg:text-2xl lg:pb-4 mont-text">
                    Get Very Low prices Compared To Others
                </p>
            </div>
            <div>
                <div className="flex flex-wrap gap-x-8 gap-y-8 lg:items-start justify-center lg:pl-12 items-center">
                    {filteredData?.slice(0, count ? filteredData?.length : mobileC?4:6).map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:w-[400px] w-[97%] md:w-80 h-full">
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative crsldetails rounded-lg overflow-hidden cursor-pointer">
                                    <Carousel
                                        autoPlay={autoPlay}
                                        interval={2000}
                                        infiniteLoop={true}
                                        showThumbs={false}
                                        showStatus={false}
                                        showArrows={true}
                                        transitionTime={1000}
                                    >
                                        <div onClick={(e) => LinkCall(e, `/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)} href={`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`}>
                                            <Image src={item.farm_image.c1}></Image>
                                        </div>
                                        <div onClick={(e) => LinkCall(e, `/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)} href={`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`}>
                                            <Image src={item.farm_image.c2}></Image>
                                        </div>
                                        <div onClick={(e) => LinkCall(e, `/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)} href={`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`}>
                                            <Image src={item.farm_image.c3}></Image>
                                        </div>
                                    </Carousel>
                                </div>
                                <div className="px-2 flex flex-col gap-4 p-1">
                                    <div className="flex items-baseline justify-between px-2">
                                        <div>
                                            <Link onClick={(e) => LinkCall(e, `/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)} href={`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`}>
                                                <p className="text-gray-900 font-medium text-sm lg:text-md opacity-75 font-Montserrat">Dozzy Farm House</p>
                                            </Link>
                                            <Link onClick={(e) => LinkCall(e, `/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)} href={`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`}>
                                                <p className=" text-[#556EE6] font-semibold text-2xl hover:text-red-600 w-fit">
                                                    {item.farm_name}
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <BsStarFill className="text-[#FFD700]" />
                                            <p className="text-black">4.4</p>
                                        </div>
                                    </div>
                                    <div className="font-normal text-sm">
                                        <div className="flex items-baseline justify-between px-2">
                                            <p className="text-black">Mon-Thu</p>
                                            <p className="text-[#556EE6]">₹ {item.weekdays.oneday} /Day</p>
                                        </div>
                                        <div className="flex items-baseline justify-between px-2">
                                            <p className="text-black">Fri-Sun</p>
                                            <p className="text-[#556EE6]">₹ {item.weekends.oneday} /Day</p>
                                        </div>
                                    </div>
                                    <div className="text-black flex justify-center font-semibold">
                                        For Booking
                                    </div>
                                    <div className="flex justify-between gap-1 text-white ">
                                        <ul className="text-black flex w-full justify-between gap-5">
                                            <li className="bg-green-500 w-full p-2 rounded-bl-md text-center text-white border-[1px] border-black">
                                                {" "}
                                                <Link
                                                    onClick={(e) => LinkCall(e, "https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking.")}
                                                    href="https://api.whatsapp.com/send?phone=+9666655973&text=Hi%0AI%20am%20looking%20for%20a%20farmhouse%20booking."
                                                    target="_blank"
                                                >
                                                    <p className=" flex gap-1 text-sm justify-center">
                                                        <span>
                                                            <FaWhatsapp size={20} />
                                                        </span>{" "}
                                                        <span>Whatsapp</span>
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="bg-blue-500 w-full p-2 rounded-br-md text-white border-[1px] border-black">
                                                {" "}
                                                <Link onClick={(e) => LinkCall(e, "tel:9666655973")} href="tel:9666655973" target="_blank">
                                                    <p className=" flex gap-1 text-sm justify-center">
                                                        <span>
                                                            <BiPhoneCall size={20} />
                                                        </span>{" "}
                                                        <span>Call Us</span>
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className={`${count?.length ? 'hidden' : 'block'} text-center px-6 pb-10 pt-8`}>
                <button className="bg-[#4508a6] text-xl font-bold text-white w-full lg:w-96 py-4 rounded-full">
                    <Link
                        onClick={(e) => LinkCall(e, "/explore-all-farmhouses-in-hyderabad")}
                        href="/explore-all-farmhouses-in-hyderabad"
                    >View all farm houses</Link>
                </button>
            </div>
        </div>
    );
};

export default FarmProductLPage;
