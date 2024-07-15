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
        <p className='fz-0-20 font-bold max-w-[600px] text-white cp'>front-end development began with a curiosity 
          for how web pages came to life in the browser. I started with the basics, learning HTML to structure 
          content, CSS to style it, and JavaScript to add interactivity. The immediate visual feedback from these 
          languages fueled my passion and drove me to deepen my knowledge. I explored various CSS frameworks like 
          Bootstrap and Tailwind CSS to streamline my design process and ensure responsive layouts. Discovering 
          React.js was a game-changer, as it allowed me to build dynamic, component-based user interfaces efficiently.
        </p>
      </div>
    </>
   );
}
 
export default SecondYear;