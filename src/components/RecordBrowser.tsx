import React from 'react';
import { Filter } from './Filter';
import { ListRecords } from './ListRecords';

export function RecordBrowser () {
  return (
    <div >
      <Filter />
      <ListRecords />
    </div>
  );
}
