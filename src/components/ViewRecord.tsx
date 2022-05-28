import React from 'react';

export function ViewRecord () {
  const imagePath = 'url(/logo192.png)';
  return (
    <div className='rounded border-2 border-gray-200 hover:shadow-lg flex flex-col px-2 py-3 font-mono'>
      <div className='h-48 bg-no-repeat bg-contain bg-center' style={{ backgroundImage: imagePath }}></div>
      <div className='flex flex-col pt-3'>
        <div className='flex flex-nowrap justify-between gap-x-2'>
          <div className='text-gray-500'>Plant</div>
          <div className='font-bold'>Arugula</div>
        </div>
        <div className='flex flex-nowrap justify-between gap-x-2'>
          <div className='text-gray-500'>Date</div>
          <div className='font-bold text-right'>2022-05-28 14:00:00</div>
        </div>
      </div>
    </div>
  )
}
