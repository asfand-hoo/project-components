import { FaSignal, FaBatteryFull, FaMobileAlt, FaEye } from 'react-icons/fa';

const SecondaryCard = () => {
  return (
    <div className='w-full lg:w-6/12 xl:w-4/12 mb-4 px-4 text-black'>
      <div className='flex flex-col min-w-0 break-words bg-white rounded-2xl mb-6 xl:mb-0 shadow-lg h-full'>
        <div className='flex-auto flex flex-col justify-between h-full'>
          <div className='flex flex-wrap px-4 pt-4'>
            <div className='w-full pr-4 max-w-full flex-grow flex-1 flex items-center'>
              <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-black'></div>
              <div className='font-bold pl-2 uppercase whitespace-nowrap text-sm'>
                Device
              </div>
            </div>
            <div className='w-auto pl-4 flex-initial pt-2 flex items-center'>
              <FaSignal className='text-xl mr-2' />
              <FaBatteryFull className='text-xl' />
            </div>
          </div>

          <div className='flex flex-wrap px-4 pb-4'>
            <div className='relative w-full pr-4 max-w-full flex-grow flex-1 flex flex-col justify-end text-left'>
              <h2 className='text-black font-bold text-4xl'>Fx</h2>
              <span className='uppercase text-xs font-thin text-gray-800'>
                Asfand Yar
              </span>
              <p className='font-bold text-sm uppercase'>Room</p>
            </div>
            <div className='relative w-auto flex-initial pt-2 flex flex-col justify-end'>
              <div className='bg-black text-white font-bold uppercase tracking-wide py-1 px-2 rounded-lg text-center mb-1'>
                <span className='text-xs uppercase font-thin'>Sensor</span>
                <p className='uppercase font-bold tracking-wide text-3xl text-center'>
                  YYYY
                </p>
              </div>
            </div>
          </div>

          <div
            className='rounded-b-2xl pb-4'
            style={{
              background:
                'linear-gradient(180deg, rgba(176,162,162,1) 0%, rgba(219,215,149,1) 3%, rgba(228,227,193,1) 6%, rgba(242,241,210,1) 12%, rgba(245,234,234,1) 100%)',
            }}
          >
            <h2 className='text-sm font-bold text-center pt-8 pb-4 tracking-normal'>
              Sensitivity
            </h2>

            <div className='flex justify-center'>
              <div className='bg-gray-400 rounded-2xl w-16 h-16 flex justify-center items-center'>
                <span className='text-xs font-bold text-white uppercase'>
                  High
                </span>
              </div>
              <div className='bg-black rounded-2xl w-16 h-16 flex justify-center items-center mx-4'>
                <span className='text-xs font-bold text-white uppercase'>
                  Medium
                </span>
              </div>
              <div className='bg-gray-400 rounded-2xl w-16 h-16 flex justify-center items-center'>
                <span className='text-xs font-bold text-white uppercase'>
                  Low
                </span>
              </div>
            </div>

            <h2 className='text-sm font-bold text-center pt-4 pb-2 tracking-normal'>
              Last Activity
            </h2>

            <div className='flex justify-center'>
              <div className='flex items-center'>
                <FaMobileAlt className='text-sm' />
                <span className='text-sm font-normal ml-1 tracking-normal'>
                  YY Hours
                </span>
              </div>
            </div>

            <div className='flex justify-center mt-12'>
              <div className='flex items-center'>
                <FaEye className='text-sm' />
                <span className='text-sm font-normal ml-1 tracking-normal'>
                  YY Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCard;
