import React,{useState} from 'react';
import { motion, useScroll,useSpring } from "framer-motion";

const Value = () => {
  const { scrollY } = useScroll();
  const scaleX = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 1,

  });
  const textScaleX = useSpring(scrollY, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.01,
    
  });
  const[prog,setProg] = useState(scaleX.current)
  scaleX.onChange((current, value) => {setProg(current)})

  
  return (
    <>
      <div  className="h-[220vh] mt-20 w-full relative flex justify-center">
        <div className="sticky top-[2.5rem] w-[90%] h-[90vh]">
          <motion.div className="z-10 top-0 absolute rounded-[3rem] w-full h-full bg-[url('../public/Tags.svg')] bg-repeat-space" style={{backgroundPositionX:(-textScaleX.current+2000).toString()+'px'}}/>
          <motion.div className="z-0 absolute rounded-[3rem] w-full h-full bg-[url('../public/Bg.png')] " style={{backgroundPositionX:(scaleX.current+500).toString()+'px'}}/>
        </div>
      </div>
    </>
  );
}

export default Value