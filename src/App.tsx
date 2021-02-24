import { useState, useEffect } from 'react';

import './App.css';
import PrimaryCardGrid from './components/PrimaryCardGrid';
import SecondaryCard from './components/SecondaryCard';

// Types
export type DeviceDataType = {
  id: number;
  title: string;
  floor: number;
  roomOwner: string;
  room: string;
  DeviceType: string;
  battery: number;
  signalStrength: number;
  buttonLabel: string | { sensor: string; value: string }[];
};

function App() {
  const response: DeviceDataType[] = [
    {
      id: 1,
      title: 'Temp & Humidity',
      floor: 2,
      roomOwner: 'Asfand Yar',
      room: 'Bedroom',
      DeviceType: 'Sensor',
      battery: 20,
      signalStrength: 80,
      buttonLabel: [
        {
          sensor: 'Sensor',
          value: 'YYYY',
        },
      ],
    },
    {
      id: 2,
      title: 'LED Light',
      floor: 1,
      roomOwner: 'Asfand Yar',
      room: 'TV Lounge',
      DeviceType: 'Toggle',
      battery: 50,
      signalStrength: 60,
      buttonLabel: 'Turn On',
    },
    {
      id: 3,
      title: 'Temp & Humidity',
      floor: 2,
      roomOwner: 'Asfand Yar',
      room: 'Garage',
      DeviceType: 'Sensor',
      battery: 90,
      signalStrength: 30,
      buttonLabel: [
        {
          sensor: 'Humidity',
          value: '20%',
        },
        {
          sensor: 'Temp',
          value: '32\u00b0',
        },
      ],
    },
    {
      id: 4,
      title: 'LED Light',
      floor: 1,
      roomOwner: 'Asfand Yar',
      room: 'Basement',
      DeviceType: 'Toggle',
      battery: 50,
      signalStrength: 60,
      buttonLabel: 'Turn On',
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
      <div className='mt-10'></div>
      <div className='w-4/5 m-auto'>
        <h2 className='text-4xl text-blue-200 font-bold tracking-wide text-center py-4'>
          Secondary Card
          <SecondaryCard />
        </h2>
      </div>
    </div>
  );
}

export default App;
