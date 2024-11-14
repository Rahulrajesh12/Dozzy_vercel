import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiPhoneCall } from 'react-icons/fi';

const Header = () => {
  const router = useRouter();

  const handleLogoClick = (e) => {
    if (router.pathname === '/') {
      e.preventDefault(); // Prevent default behavior of link if on homepage
      router.reload(); // Reload the homepage
    }
  };

  return (
    <div className='font-bold text-lg px-5 md:px-12 lg:px-20 py-4 flex justify-between items-center'>
      {/* Link with reload functionality */}
      <Link href={'/'} passHref>
        <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <h2 className='text-3xl lg:text-5xl text-[#556EE6]'>Dozzy</h2>
        </div>
      </Link>

      {/* For booking help */}
      <div className='py-2 text-black'>
        <p className='lg:pb- lg:text-3xl text-sm text-[#556EE6]'>For Booking help</p>
        <Link
          onClick={(e) => e.preventDefault()} // Ensure the default behavior is prevented
          className='lg:text-3xl lg:pt-2 pt-1 font-bold text-sm flex items-center gap-1 lg:gap-2'
          href="tel:9666655973"
          target='_blank'
        >
          <span><FiPhoneCall className='size-3 lg:size-6' /></span>96666-559-73
        </Link>
      </div>
    </div>
  );
};

export default Header;
