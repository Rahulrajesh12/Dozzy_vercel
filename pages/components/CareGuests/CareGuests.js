import React from 'react'
import Image from 'next/image'
import steps from '../../images/steps.svg'
import { SlCalender } from "react-icons/sl";
import { MdOutlineFindReplace } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { GiConfirmed } from "react-icons/gi";


const CareGuests = () => {
    return (
        <div>
            <div className='pl-4 py-4 md:px-12'>
                <div className='md:py-6'>
                    <p className='font-bold pb-4 md:text-2xl lg:text-4xl lg:py-8'>How We Care About Our Guests</p>
                    <ul className='flex justify-center gap-2 lg:justify-normal lg:gap-16'>
                        <li className='w-[30%] lg:w-[22%] border-2 border-gray-200 rounded-md p-1 lg:p-3'><p className='font-semibold md:text-base text-[10px] text-[#556EE6] lg:text-2xl'>Zero Deposit</p>
                            <p className='text-[8px] md:text-xs lg:text-xl'>Dozzy Didn't Collect Any Amount For Security Deposit</p>
                        </li>
                        <li className='w-[30%] lg:w-[22%] border-2 border-gray-200 rounded-md p-1 lg:p-3'><p className='font-semibold md:text-base text-[10px] text-[#556EE6] lg:text-2xl'>Unlimited Persons </p>
                            <p className='text-[8px] md:text-xs lg:text-xl'>Dozzy Will Kept Any People Limit, You Can Enjoy With Unlimited Persons </p>
                        </li>
                        <li className='w-[30%] lg:w-[22%] border-2 border-gray-200 rounded-md p-1 lg:p-3'><p className='font-semibold md:text-base text-[10px] text-[#556EE6] lg:text-2xl'>Heavy Discounts </p>
                            <p className='text-[8px] md:text-xs lg:text-xl'>Dozzy Provide Heavy Discounts For Weekend & Weekdays Also</p>
                        </li>
                    </ul>
                </div>

                <div className='py-6'>
                    <p className='font-bold pb-3 lg:text-4xl lg:py-8'>Book With Just 3 Easy Steps</p>
                    <div className='flex items-center'>
                        <div className='w-[50%] h-24 lg:w-[50%] lg:h-80 rounded-lg relative'>

                            <Image
                                src={steps}
                                alt='steps'
                                // width={170}
                                // height={100}
                                fill
                                objectFit='cover'
                                className='rounded-lg'
                            />
                        </div>
                        <ul className='pl-2 lg:pl-10 flex flex-col lg:gap-5'>
                            <li className='flex items-center text-xs gap-2 p-1'><SlCalender className='bg-[#556EE6] text-white p-1 w-8 h-7 rounded lg:w-16 lg:h-14' /><div> <p className='font-bold text-[8px] lg:text-xl'>Pick Date</p> <p className='text-[8px] leading-3 lg:text-base'>Pick Your Plan Dates In With Our User Friendly Interface</p></div></li>
                            <li className='flex items-center text-xs gap-2 p-1'><MdOutlineFindReplace className='bg-[#556EE6] text-white p-1 w-8 h-7 rounded lg:w-16 lg:h-14' /><div> <p className='font-bold text-[8px] lg:text-xl'>Choose Place & Pay</p> <p className='text-[8px] leading-3 lg:text-base'>Pick Your Place And Pay Its That Simple As It Its</p></div></li>
                            <li className='flex items-center text-xs gap-2 p-1'><GiConfirmed className='bg-[#556EE6] text-white p-1 w-8 h-7 rounded lg:w-16 lg:h-14' /><div> <p className='font-bold text-[8px] lg:text-xl'>Booking Confirmed</p> <p className='text-[8px] leading-3 lg:text-base'>Congrats Your Booking Confirmed</p></div></li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CareGuests