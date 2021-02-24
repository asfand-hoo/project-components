import React from 'react';
import { DeviceDataType } from '../App';
import {
  FaBatteryFull,
  FaSignal,
  FaBatteryQuarter,
  FaBatteryHalf,
  FaBatteryThreeQuarters,
  FaExclamationCircle,
} from 'react-icons/fa';
import TurnOnButton from './TurnOnButton';
import ButtonGrid from './ButtonGrid';

type Props = {
  item: DeviceDataType;
};

const PrimaryCard: React.FC<Props> = ({ item }) => {
  return (
    <div className='mb-4'>
      <div className='flex flex-col min-w-0 break-words bg-white rounded-2xl mb-6 xl:mb-0 shadow-lg h-full'>
        <div className='flex-auto p-4 flex flex-col justify-between h-full'>
          <div className='flex flex-wrap'>
            {/* Left Col */}
            <div className='w-full pr-4 max-w-full flex-grow flex-1 flex items-center'>
              <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-black'></div>
              <div className='font-bold pl-2 uppercase whitespace-nowrap'>
                {item.title}
              </div>
            </div>
            <div className='w-auto pl-4 flex-initial pt-2 flex items-center'>
              {item.signalStrength < 50 ? (
                <FaExclamationCircle className='text-xl mr-2' />
              ) : (
                <FaSignal className='text-xl mr-2' />
              )}
              {item.battery <= 20 ? (
                <FaBatteryQuarter className='text-xl' />
              ) : item.battery <= 50 && item.battery > 20 ? (
                <FaBatteryHalf className='text-xl' />
              ) : (
                <FaBatteryThreeQuarters className='text-xl' />
              )}
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='relative w-full pr-4 max-w-full flex-grow flex-1 flex flex-col justify-end'>
              <h2 className='text-black font-bold text-4xl'>{`F${item.floor}`}</h2>
              <span className='uppercase text-xs text-gray-800'>
                {item.roomOwner}
              </span>
              <p className='font-bold text-sm uppercase'>{item.room}</p>
            </div>
            <div className='relative w-auto flex-initial pt-2 flex flex-col justify-end'>
              {item.DeviceType === 'Toggle' ? (
                <TurnOnButton label={item.buttonLabel as string} />
              ) : (
                <ButtonGrid
                  labels={
                    item.buttonLabel as { sensor: string; value: string }[]
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
