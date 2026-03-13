import React from 'react'

const Footer = () => {
  return (
     <footer className='w-full h-20 '>
    <div className=' w-full flex md:justify-between items-center md:px-8 justify-center flex-col md:flex-row'>
        <div className='w-auto h-auto'>
            <h1 className='font-extrabold font-["Times"] text-4xl'>Entre<span className='text-[#D4800A]'>Skills</span>Hub</h1>
        </div>
        <div className='md:flex justify-between items-center '>
            © 2026 EntreSkill Hub · All rights reserved
        </div>
        <div className='w-auto h-12 rounded-full flex justify-between items-center gap-2 px-4 py-2 hover:cursor-pointer '>
         <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A]  gap-0 '>Privacy</span>
             <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A] '>Terms</span>
              <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A] '>Contact</span>
        </div>
    </div>
     <div className='w-full  md:hidden flex justify-center items-center  text-white'>
      <div className='w-11/12 flex justify-center items-center gap-2 '>
            <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A]  gap-0 '>Privacy</span>
             <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A] '>Terms</span>
              <span className='font-semibold hover:cursor-pointer hover:text-[#D4800A] '>Contact</span>
        </div>
        </div>
    </footer>
  )
}

export default Footer