import React from 'react';
import { PlantObservation } from '../models/observation';
import { Filter } from './Filter';
import { ListRecords } from './ListRecords';

export interface IRecordBrowserProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  observations: PlantObservation[];
}

export function RecordBrowser (props: IRecordBrowserProps) {
  return (
    <div >
      <Filter filter={ props.filter } setFilter={ props.setFilter } />
      <ListRecords observations={ props.observations } />
    </div>
  );
}
