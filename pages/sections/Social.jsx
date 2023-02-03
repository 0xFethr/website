import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';
function Social() {

  const boxVariant = {
    visible: { opacity: 1,transition: { duration: .65 } },
    hidden: { opacity: 0.5,transition: { duration: .65 }  },
  }

  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    if (inView1) {
        control1.start('visible')
    } else {
        control1.start('hidden')
    }
    if (inView2) {
      control2.start('visible')
    } else {
        control2.start('hidden')
    }
    if (inView3) {
      control3.start('visible')
    } else {
        control3.start('hidden')
    }
}, [control1,control2,control3,inView1,inView2,inView3])

  return (
    <>
      <div id="social" className="h-full w-full flex justify-center gap-10 relative">
        
        <div className='relative top-0 width-[60%] height-[62vh] mt-[2vh] p-10 flex justify-between '>
          <div className='sticky h-[20%] top-[8rem]'>
            <Image src={'/news.jpg'}
                  className=' relative bg-[green] rounded-[20%] z-10 grayscale'
                  width={300}
                  height={100}/>
            <div className="absolute z-10 ml-10 top-20 -right-5">
                <Image  src={'/logo.svg'}
                        width={150}
                        height={500}
                        className='backdrop '
                        alt={'Feather'}/>
            </div>   
            <div className="absolute z-10 ml-10 top-0 -right-20">
                <Image  src={'/logo.svg'}
                        width={250}
                        height={250}
                        alt={'Feather'}/>
            </div>   
          </div>
        </div>
        
        <div className='font-Gazapacho italic font-[1000] text-6xl leading-[80%] tracking-wider text-left gap-20 flex flex-col pt-10 w-[40%] overflow-hidden '>
          <motion.h1 variants={boxVariant}
                      initial="hidden"
                      animate={control3}>Adani Group acquired NDTV by buying a company backed by the television network's founders.</motion.h1>
          <div ref={ref3}></div>
          <motion.h1  variants={boxVariant}
                      initial="hidden"
                      animate={control1}>Youtube channels blocked by govt for spreading fake news</motion.h1>
          <div ref={ref1}></div>
          <motion.h1 variants={boxVariant}
                      initial="hidden"
                      animate={control2}>News channels are beccoming advertisment house for the government</motion.h1>
          <div ref={ref2}></div>
        </div>
        <div className="absolute z-0 -bottom-20 right-0 ">
                <Image  src={'/purpleOrb.svg'}
                        width={500}
                        height={500}
                        alt={'Feather'}/>
        </div>
        <div className="absolute z-0 -top-20 -left-20">
                <Image  src={'/orangeOrb.svg'}
                        width={500}
                        height={500}
                        alt={'Feather'}/>
        </div>
      </div>
    </>
  )
}

export default Social