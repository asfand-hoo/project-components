import React from 'react';
import { DeviceDataType } from '../App';
import { FaBatteryFull, FaSignal } from 'react-icons/fa';

type Props = {
  item: DeviceDataType;
};

const PrimaryCard: React.FC<Props> = ({ item }) => {
  return (
    <div className='w-full lg:w-6/12 xl:w-4/12 px-4'>
      <div className='relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg'>
        <div className='flex-auto p-4'>
          <div className='flex flex-wrap pb-2'>
            {/* Left Col */}
            <div className='relative w-full pr-4 max-w-full flex-grow flex-1 flex items-center'>
              <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-black'></div>
              <div className='font-bold pl-2 uppercase whitespace-nowrap'>
                {item.title}
              </div>
            </div>
            <div className='relative w-auto pl-4 flex-initial pt-2 flex items-center'>
              <FaSignal className='text-xl' />
              <FaBatteryFull className='text-xl ml-3' />
            </div>
          </div>
          <div className='flex flex-wrap pt-2'>
            <div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
              <h2 className='text-black font-bold text-4xl'>{`F${item.floor}`}</h2>
              <span className='uppercase text-xs text-gray-800'>
                {item.roomOwner}
              </span>
              <p className='font-bold text-sm uppercase'>{item.room}</p>
            </div>
            <div className='relative w-auto flex-initial pt-2 flex flex-col justify-end '>
              <div>
                <div className='bg-black text-white font-bold uppercase tracking-wide px-6 py-3 rounded'>
                  Turn On
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
