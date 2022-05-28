import React from 'react';
import { PlantObservation } from '../models/observation';
import { ViewRecord } from './ViewRecord';

interface IListRecordsProps {
  observations: PlantObservation[];
}

export function ListRecords (props: IListRecordsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
      {
        props.observations.map(iter => <ViewRecord observation={ iter } key={ iter.id } />)
      }
    </div>
  );
}
