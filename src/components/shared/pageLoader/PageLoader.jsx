const PageLoader = () => {
  return (
    <div className='absolute inset-0 bg-teal-500 h-screen w-full flex justify-center items-center '>
      <div className='relative w-[200px] h-[200px] border-4 border-t-0 border-teal-950  rounded-full flex justify-center items-center '>
        <img className='w-[80%]' src='./heart.svg' alt='' />

        <div className='absolute w-[190px] h-[190px] duration-300 inset-2 animate-spin-slow  border-2 border-b-0  border-teal-900 rounded-full'></div>
        <div className='absolute w-[180px] h-[180px]  duration-300 inset-2 animate-spin-slow  border-2 border-t-0 border-teal-800 rounded-full'></div>
      </div>
    </div>
  );
};

export default PageLoader;
