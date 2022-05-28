import React from 'react';

export interface IFilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export function Filter(props: IFilterProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    props.setFilter(event.target.value);
  }

  return (
    <div className='flex flex-row justify-center my-2'>
      <label className='text-lg font-mono'>
        Filter:
        <select value={ props.filter } onChange={ (event) => handleChange(event) } className='ml-2 border-2 rounded h-8 w-28'>
          <option value='all'>All</option>
          <option value='arugula'>Arugula</option>
          <option value='kale'>Kale</option>
          <option value='basil'>Basil</option>
        </select>
      </label>
    </div>
  );
}
