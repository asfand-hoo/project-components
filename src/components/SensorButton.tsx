import React from 'react';

type Props = {
  label: { sensor: string; value: string };
};

const SensorButton: React.FC<Props> = ({ label }) => {
  return (
    <div className='bg-black text-white font-bold uppercase tracking-wide py-1 px-2 rounded-lg text-center mb-1'>
      <span className='text-xs uppercase font-thin'>{label.sensor}</span>
      <p className='uppercase font-bold tracking-wide text-3xl text-center pl-2'>
        {label.value}
      </p>
    </div>
  );
};

export default SensorButton;
