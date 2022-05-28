import React from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export function Navbar () {
  return (
    <div className='flex flex-row justify-between	border-b-2 sticky top-0 bg-white text-center py-2'>
      <div className='w-10'></div>
      <div className='text-2xl font-bold font-mono'><Link to='/'>Plant Monitor</Link></div>
      <div className='w-10 pr-3'>
        <Link to='/create'>
          <HiOutlinePlusCircle className='text-3xl cursor-pointer' />
        </Link>
      </div>
    </div>
  );
}
