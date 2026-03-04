import React from 'react'

const Header = () => {
  return (
    <>
    <div className='h-20 w-full flex justify-between items-center'>
        <div className='w-auto h-auto'>
            <h1 className='font-extrabold font-["Times"] text-4xl'>Entre<span className='text-[#D4800A]'>Skills</span>Hub</h1>
        </div>
        <div className='md:flex justify-between items-center gap-3 hidden '>
            <p className='font-semibold hover:cursor-pointer hover:text-[#D4800A]'>How it works</p>
             <p className='font-semibold hover:cursor-pointer hover:text-[#D4800A]'>Business Ideas</p>
              <p className='font-semibold hover:cursor-pointer hover:text-[#D4800A]'>Mentor</p>
               <p className='font-semibold hover:cursor-pointer hover:text-[#D4800A]'>Resources</p>
        </div>
        <span className='w-28  h-12 rounded-full bg-[#2C1810] px-4 py-2 hover:cursor-pointer flex items-center justify-center'>
            <button className='text-white hover:cursor-pointer'>Get Started</button>
        </span>
    </div>
     <div className='w-full  md:hidden flex justify-center items-center bg-[#D4800A] text-white'>
      <div className='w-11/12 flex justify-between items-center gap-2 '>
            <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A]  gap-0 '>How it works</span>
             <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A] '>Business Ideas</span>
              <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A] '>Mentor</span>
               <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A] '>Resources</span>
        </div>
        </div>
    </>
  )
}

export default Header