import React from 'react';
import { PlantObservation } from '../models/observation';

interface IViewRecordProps {
  observation: PlantObservation;
}

export function ViewRecord (props: IViewRecordProps) {
  const imagePath = 'url(/logo192.png)';
  return (
    <div className='rounded border-2 border-gray-200 hover:shadow-lg flex flex-col px-2 py-3 font-mono'>
      <div className='h-48 bg-no-repeat bg-contain bg-center' style={{ backgroundImage: imagePath }}></div>
      <div className='flex flex-col pt-3'>
        <div className='flex flex-nowrap justify-between gap-x-2'>
          <div className='text-gray-500'>Plant</div>
          <div className='font-bold'>{ props.observation.type }</div>
        </div>
        <div className='flex flex-nowrap justify-between gap-x-2'>
          <div className='text-gray-500'>Date</div>
          <div className='font-bold text-right'>{ props.observation.date }</div>
        </div>
        <div className='flex flex-nowrap justify-between gap-x-2'>
          <div className='text-gray-500'>Bud Quality</div>
          <div className='font-bold text-right'>{ props.observation.budQuality }</div>
        </div>
        <div className='flex flex-nowrap justify-between gap-x-2'>
          <div className='text-gray-500'>Stem Quality</div>
          <div className='font-bold text-right'>{ props.observation.stemQuality }</div>
        </div>
        <div className='flex flex-nowrap justify-between gap-x-2'>
          <div className='text-gray-500'>Leaf Quality</div>
          <div className='font-bold text-right'>{ props.observation.leafQuality }</div>
        </div>
        <div className='flex flex-nowrap justify-between gap-x-2'>
          <div className='text-gray-500'>Overall Quality</div>
          <div className='font-bold text-right'>{ props.observation.overallQuality }</div>
        </div>
      </div>
    </div>
  )
}
