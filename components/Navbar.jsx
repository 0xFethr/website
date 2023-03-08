import React from 'react'
import Link from 'next/link'
function Navbar({state}) {
  console.log(state)
  return (
    <div className='w-[40%] h-[5%] items-center pl-4 top-10 z-50 fixed bg-secondary rounded-full  text-[black] font-thin flex justify-between'>
        <Link className='w-1/4' href={'#hero'}>What?</Link>
        <Link className='w-1/4' href={'#social'}>Why?</Link>
        <Link className='w-1/4' href={'#value'}>How?</Link>
        <Link className='bg-main rounded-full w-1/4 text-secondary text-center h-full flex items-center justify-center ' href={'https://fethr.vercel.app/'}>Start</Link>
    </div>
  )
}

export default Navbar