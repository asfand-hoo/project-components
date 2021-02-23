import React from 'react';
import { DeviceDataType } from '../App';
import PrimaryCard from './PrimaryCard';

type Props = {
  data: DeviceDataType[];
};

const PrimaryCardGrid: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className='flex flex-wrap'>
        {data.map((item) => (
          <PrimaryCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default PrimaryCardGrid;
