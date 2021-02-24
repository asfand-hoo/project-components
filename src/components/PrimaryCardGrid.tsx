import React from 'react';
import { DeviceDataType } from '../App';
import PrimaryCard from './PrimaryCard';

type Props = {
  data: DeviceDataType[];
};

const PrimaryCardGrid: React.FC<Props> = ({ data }) => {
  return (
    <>
      {/* flex flex-wrap items-stretch */}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-10'>
        {data.map((item) => (
          <PrimaryCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default PrimaryCardGrid;
