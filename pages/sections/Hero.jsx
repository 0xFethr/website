import React, { useEffect, useState, useRef } from 'react';
import {useScroll, useSpring } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
function Hero() {
  const ring = useRef(null)
  const body = useRef(null)

  useEffect(() => {
      sessionStorage.removeItem('guests')

      body.current?.addEventListener('mousemove', (e) => {
          ring.current.style.left = e.clientX + 'px'
          ring.current.style.top = e.clientY + 'px'
      })
      body.current?.addEventListener('mouseleave',(e) => {
          ring.current.style.opacity='0'; 
      })
      body.current?.addEventListener('mouseenter',(e) => {
          ring.current.style.opacity = '1' 
      })
  }, [])
  
  const { scrollY } = useScroll();
  const translateY = useSpring(scrollY, {
      stiffness: 80,
      damping: 30,
      restDelta: 0.01,
      
    });
  const[prog,setProg] = useState(translateY.current)
  translateY.onChange((current, value) => {setProg(current)})
  
  const router = useRouter();

  return (
    <>
      <div className="ring" 
           ref={ring}></div>
      <div id='hero' 
           className='hero w-screen h-screen flex items-center justify-center relative' 
           ref={body}>
          <ul className=' font-Gazapacho italic font-[1000] text-8xl leading-[80%] tracking-widest text-center '>
              <li className='relative z-5'>Latest News</li>
              <li className='relative z-20'>Delivered with</li>
              <li className='relative z-20'>Authenticity</li>
          </ul> 
          
          <div className="absolute z-10 ml-20 mb-10">
              <Image  src={'/logo.svg'}
                      width={160}
                      height={550}
                      className='backdrop '
                      style={{transform:'translateY('+(translateY.current/12).toString()+'px)'}} 
                      alt={'Feather'}/>
          </div>   
          <div className="absolute z-10 ml-10">
              <Image  src={'/logo.svg'}
                      width={300}
                      height={300}
                      style={{transform:'translateY('+(translateY.current/12).toString()+'px)'}} 
                      alt={'Feather'}/>
          </div>      
          <div className="absolute z-0 animate-spin-slow">
              <Image  src={'/orb.svg'}
                      width={200}
                      height={200}
                      style={{transform:'translateY('+(translateY.current/12).toString()+'px)'}} 
                      alt={'Feather'}/>
          </div>
          <div className="absolute z-0 right-0 bottom-0">
              <Image  src={'/fether.svg'}
                      width={250}
                      height={200}
                      alt={'Feather'}/>
          </div>
      </div>
    </>
  )
}

export default Hero