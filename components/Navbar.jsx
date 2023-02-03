import React from 'react'
import Link from 'next/link'
function Navbar({state}) {
  console.log(state)
  return (
    <div className='w-[40%] pl-4 top-10 z-50 fixed bg-secondary rounded-full  text-[black] font-thin flex justify-between'>
        <Link href={'#hero'}>What?</Link>
        <Link href={'#social'}>Why?</Link>
        <Link href={'#value'}>How?</Link>
        <Link className='bg-main rounded-full w-1/4 text-secondary text-center h-full' href={'#CTA'}>Start</Link>:
    </div>
  )
}

export default Navbar