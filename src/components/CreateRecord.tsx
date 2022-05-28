import React from 'react';
import { Link } from 'react-router-dom';

export function CreateRecord () {
  return (
    <div className='p-2'>
      <div className='text-lg'>Create record</div>
      <div>
        <Link to='/'>Return to main</Link>
      </div>
    </div>
  );
}
