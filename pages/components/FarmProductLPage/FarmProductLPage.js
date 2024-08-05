import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsStarFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import cfarm1 from "../../images/cheritan/1.webp"
import cfarm2 from "../../images/cheritan/2.webp"
import cfarm3 from "../../images/cheritan/4.webp"

import skfarm1 from "../../images/saketh/1.webp"
import skfarm2 from "../../images/saketh/2.webp"
import skfarm3 from "../../images/saketh/3.webp"

import shfarm1 from "../../images/shan/1.webp"
import shfarm2 from "../../images/shan/2.webp"
import shfarm3 from "../../images/shan/3.webp"

import srfarm1 from "../../images/srinivasa/1.webp"
import srfarm2 from "../../images/srinivasa/2.webp"
import srfarm3 from "../../images/srinivasa/3.webp"

import ufarm1 from "../../images/urban/1.webp"
import ufarm2 from "../../images/urban/2.webp"
import ufarm3 from "../../images/urban/3.webp"

import zfarm1 from "../../images/zoozoo/1.webp"
import zfarm2 from "../../images/zoozoo/2.webp"
import zfarm3 from "../../images/zoozoo/3.webp"


import { Carousel } from "react-responsive-carousel";
const FarmProductLPage = () => {
    const router = useRouter();

    const filteredData = [
        {
            farm_name: "Cheritan",
            price_24_hours: 5900,
            farm_image: { c1: cfarm1, c2: cfarm2, c3: cfarm3, },
            weekdays: { oneday: "5900", twoday: "6800" },
            weekends: { oneday: "7900", twoday: "10800" },
        },
        {
            farm_name: "Saketh Vanam",
            price_24_hours: 13000,
            farm_image: { c1: skfarm1, c2: skfarm2, c3: skfarm3, },
            weekdays: { oneday: "13000", twoday: "25000" },
            weekends: { oneday: "18000", twoday: "35000" },
        },
        {
            farm_name: "Srinivasa",
            price_24_hours: 13000,
            farm_image: { c1: srfarm1, c2: srfarm2, c3: srfarm3, },
            weekdays: { oneday: "13000", twoday: "25000" },
            weekends: { oneday: "18000", twoday: "35000" },
        },
        {
            farm_name: "Urban",
            price_24_hours: 8000,
            farm_image: { c1: ufarm1, c2: ufarm2, c3: ufarm3, },
            weekdays: { oneday: "8000", twoday: "15000" },
            weekends: { oneday: "13000", twoday: "25000" },
        },
        {
            farm_name: "Zoo Zoo",
            price_24_hours: 8000,
            farm_image: { c1: zfarm1, c2: zfarm2, c3: zfarm3, },
            weekdays: { oneday: "8000", twoday: "15000" },
            weekends: { oneday: "13000", twoday: "25000" },
        },
        {
            farm_name: "Shan",
            price_24_hours: 10000,
            farm_image: { c1: shfarm1, c2: shfarm2, c3: shfarm3, },
            weekdays: { oneday: "10000", twoday: "19000" },
            weekends: { oneday: "15000", twoday: "29000" },
        },
    ];
    const handleImageClick = (url) => {

        router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
    };
    return (
        <div>
            <div className="text-sm pl-4 py-4 md:px-12 lg:py-16">
                <p className="font-semibold md:text-xl lg:text-5xl font-poppins">
                    Farm Houses In Hyderbad
                </p>
                <p className="md:py-4 lg:text-2xl lg:pb-4 mont-text">
                    Get Very Low prices Compared To Others
                </p>
            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 items-center xs:justify-center">
                    {filteredData?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:w-[454px] w-[97%] md:w-80 h-full lg:hover:scale-105">
                                {/* <Link href={`/${item.farm_name.toLowerCase()}`}> */}
                                <div className="relative crsldetails rounded-lg overflow-hidden">
                                    <Carousel
                                        showThumbs={false}
                                        showArrows={true}
                                        showStatus={false}
                                        showIndicators={false}
                                        infiniteLoop={true}
                                        autoPlay={true}
                                        interval={5000}
                                        stopOnHover={true}
                                    >
                                        <div onClick={() => {
                                            router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                                        }}>
                                            <Image src={item.farm_image.c1}></Image>
                                        </div>
                                        <div onClick={() => {
                                            router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                                        }}>
                                            <Image src={item.farm_image.c2}></Image>
                                        </div>
                                        <div onClick={() => {
                                            router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                                        }}>
                                            <Image src={item.farm_image.c3}></Image>
                                        </div>

                                    </Carousel>

                                </div>

                                <div className="px-2 flex flex-col gap-4 p-1">
                                    <div className="flex items-baseline justify-between px-2">
                                        <div>
                                            <Link href={`/${item.farm_name.toLowerCase()}`}>
                                                <p className="text-gray-700 font-medium text-sm lg:text-md opacity-75 font-Montserrat">Dozzy Farm House</p>
                                            </Link>
                                            <Link href={`/${item.farm_name.toLowerCase()}`}>
                                                <p className=" text-[#556EE6] cursor-pointer font-semibold text-2xl hover:text-red-600 w-fit">
                                                    {item.farm_name}
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <BsStarFill className="text-[#FFD700]" />
                                            <p>4.4</p>
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
                                        <ul className="text-black flex w-full justify-between gap-3">
                                            <li className="bg-green-500 w-full p-2 rounded-bl-md text-center text-white border-[1px] border-black">
                                                {" "}
                                                <Link
                                                    href="https://api.whatsapp.com/send?phone=+9111911162text=Hi%0AI%20am%20looking%20for%20a%farmhouse%20booking."
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
                                                <Link href="tel:9111911162" target="_blank">
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
        </div>
    );
};

export default FarmProductLPage;
