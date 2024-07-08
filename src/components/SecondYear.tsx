import { motion, useInView } from 'framer-motion';
import secondYear from '/2022.png';
import { useRef } from 'react';
const SecondYear = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once: true});
  return ( 
    <>
      <div ref={ref} className='toLeftClip flex-wrap  relative flex justify-center items-center py-[200px]'>
      <motion.div 
       initial={{x:"-100%"}}
       animate={isInView?{x:"0%"}:{}}
       transition={{type:"tween"}}
       className='z-[-1] absolute w-full h-full bg-[var(--main-color)] '>
  
      </motion.div>
        <img className='cp100' src={secondYear} alt="" />
        <p className='fz-0-20 font-bold max-w-[600px] text-white cp'>My journey into the world of programming and graphic design began with a curious fascination for technology and creativity. Initially, I dabbled in basic HTML and CSS, gradually building simple web pages. The sense of accomplishment from seeing my code come to life fueled my desire to learn more. I soon ventured into JavaScript, where 
          I encountered both challenges and triumphs, each teaching me the value of persistence and problem-solving.
        </p>
      </div>
    </>
   );
}
 
export default SecondYear;