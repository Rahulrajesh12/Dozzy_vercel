import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import farm1 from "../../images/farmhouse/shan.jpg";
import farm2 from "../../images/farmhouse/cheritanfarmhouse.jpg";
import farm3 from "../../images/farmhouse/Sakethvanam.jpg";
import farm4 from "../../images/farmhouse/Urban.jpg";
import farm5 from "../../images/farmhouse/zozo.jpeg";
import farm6 from "../../images/farmhouse/shan.jpeg";
const FarmProductLPage = () => {

    const filteredData = [
        {
            farm_name: "Cheritan",
            price_24_hours: 5900,
            farm_image: farm1,
            weekdays: { oneday: "5900", twoday: "6800" },
            weekends: { oneday: "7900", twoday: "10800" },
        },
        {
            farm_name: "Saketh Vanam",
            price_24_hours: 13000,
            farm_image: farm2,
            weekdays: { oneday: "13000", twoday: "25000" },
            weekends: { oneday: "18000", twoday: "35000" },
        },
        {
            farm_name: "Srinivasa",
            price_24_hours: 13000,
            farm_image: farm3,
            weekdays: { oneday: "13000", twoday: "25000" },
            weekends: { oneday: "18000", twoday: "35000" },
        },
        {
            farm_name: "Urban",
            price_24_hours: 8000,
            farm_image: farm4,
            weekdays: { oneday: "8000", twoday: "15000" },
            weekends: { oneday: "13000", twoday: "25000" },
        },
        {
            farm_name: "Zoo Zoo",
            price_24_hours: 8000,
            farm_image: farm5,
            weekdays: { oneday: "8000", twoday: "15000" },
            weekends: { oneday: "13000", twoday: "25000" },
        },
        {
            farm_name: "Shan",
            price_24_hours: 10000,
            farm_image: farm6,
            weekdays: { oneday: "10000", twoday: "19000" },
            weekends: { oneday: "15000", twoday: "29000" },
        },
    ];

    return (
        <div>
            <div className="text-sm pl-4 py-4 md:px-12 lg:py-16">
                <p className="font-bold md:text-xl lg:text-5xl font-poppins">
                    Farm Houses In Hyderbad
                </p>
                <p className="md:py-4 lg:text-2xl lg:pb-4">
                    Get Very Low prices Compared To Others
                </p>
            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 items-center xs:justify-center">
                    {filteredData?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:w-[454px] w-[97%] md:w-80 h-full lg:hover:scale-105">
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
                                    <div className="flex items-baseline justify-between px-2">
                                        <Link href={`/${item.farm_name.toLowerCase()}`}>
                                            <p className="text-[#556EE6] font-bold text-sm">Dozzy Farm House</p>
                                        </Link>
                                        <Link href={`/${item.farm_name.toLowerCase()}`}>
                                            <p className="text-gray-700 cursor-pointer font-semibold text-xl hover:text-red-600 w-fit">
                                                {item.farm_name}
                                            </p>
                                        </Link>
                                    </div>

                                    <div className="font-semibold">
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
                                                <Link href="tel:9666677405" target="_blank">
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
