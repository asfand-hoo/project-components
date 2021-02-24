import React from 'react';

type Props = {
  label: string;
};

const TurnOnButton: React.FC<Props> = ({ label }) => {
  return (
    <div>
      <div className='bg-black text-white font-bold uppercase tracking-wide px-4 py-3 rounded-lg'>
        {label}
      </div>
    </div>
  );
};

export default TurnOnButton;
