// import React from 'react'
// import Link from 'next/link';
// import { FiPhoneCall } from "react-icons/fi";
// import LinkCall from '../LinkCall';
// const Header = () => {
//   return (
//     <div className='font-bold text-lg px-5 md:px-12 lg:px-20 py-4 flex justify-between items-center'>
//       <Link href={'/'}><h2 className='text-3xl lg:text-5xl text-[#556EE6]'>Dozzy</h2></Link>
//       <div>
//         <div className=' py-2 text-black'>
//           <p className='lg:pb- lg:text-3xl text-sm  text-[#556EE6]'>For Booking help</p>
//           <Link onClick={(e) => LinkCall(e,"tel:9666655973")} className='lg:text-3xl lg:pt-2 pt-1 font-bold text-sm flex items-center gap-1 lg:gap-2' href="tel:9666655973" target='_blank'><span><FiPhoneCall className='size-3 lg:size-6' /></span>96666-559-73<span></span></Link>
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header;







import React from 'react';
import Link from 'next/link';
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  const handlePhoneClick = (e, phoneNumber) => {
    e.preventDefault(); // Prevent default link behavior
    gtag_report_conversion(phoneNumber); // Call the Google Analytics function
  };

  return (
    <div className='font-bold text-lg px-5 md:px-12 lg:px-20 py-4 flex justify-between items-center'>
      <Link href={'/'}>
        <h2 className='text-3xl lg:text-5xl text-[#556EE6]'>Dozzy</h2>
      </Link>
      <div>
        <div className='py-2 text-black'>
          <p className='lg:pb- lg:text-3xl text-sm text-[#556EE6]'>For Booking help</p>
          <Link 
            onClick={(e) => handlePhoneClick(e, "tel:9666655973")} 
            className='lg:text-3xl lg:pt-2 pt-1 font-bold text-sm flex items-center gap-1 lg:gap-2' 
            href="tel:9666655973" 
            target='_blank'
          >
            <span><FiPhoneCall className='size-3 lg:size-6' /></span>96666-559-73
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default Header;
