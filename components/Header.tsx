import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex justify-between px-10 py-5 max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
        <Link href="/">
          <img className='w-44 object-contain cursor-pointer' src="https://i.ibb.co/VQpFqLw/logo.png" alt="" />
        </Link>
        <div className='hidden items-center md:inline-flex space-x-5'>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className='text-white px-4 py-1 bg-blue-600 rounded-full'>Follw</h3>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-blue-700'>
        <h3>Sign in</h3>
        <h3 className='border px-4 py-1 rounded-full border-blue-600'>Get Started</h3>
      </div>

    </header>
  );
};

export default Header;