import React from 'react';

export function Filter() {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
  }

  return (
    <div className='flex flex-row justify-center my-2'>
      <label className='text-lg font-mono'>
        Filter:
        <select onChange={ (event) => handleChange(event) } className='ml-2 border-2 rounded h-8 w-28'>
          <option value=''>All</option>
          <option value='arugula'>Arugula</option>
          <option value='kale'>Kale</option>
          <option value='basil'>Basil</option>
        </select>
      </label>
    </div>
  );
}
