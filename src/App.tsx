import { useState, useEffect } from 'react';

import './App.css';
import PrimaryCardGrid from './components/PrimaryCardGrid';

// Types
export type DeviceDataType = {
  id: number;
  title: string;
  floor: number;
  roomOwner: string;
  room: string;
};

function App() {
  const response: DeviceDataType[] = [
    {
      id: 1,
      title: 'Temp & Humidity',
      floor: 2,
      roomOwner: 'Asfand Yar',
      room: 'Bedroom',
    },
    {
      id: 2,
      title: 'LED Light',
      floor: 1,
      roomOwner: 'Asfand Yar',
      room: 'TV Lounge',
    },
    {
      id: 3,
      title: 'LED Light',
      floor: 2,
      roomOwner: 'Asfand Yar',
      room: 'TV Lounge',
    },
  ];

  const [data, setData] = useState([] as DeviceDataType[]);
  useEffect(() => {
    setData(response);
  }, []);

  return (
    <div className='bg-blue-900 min-h-screen'>
      <h2 className='text-4xl text-blue-200 font-bold tracking-wide text-center py-4'>
        React Components
      </h2>
      <div className='w-4/5 m-auto'>
        <PrimaryCardGrid data={data} />
      </div>
    </div>
  );
}

export default App;
