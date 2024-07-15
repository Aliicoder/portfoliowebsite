import { motion, useInView } from 'framer-motion';
import fourthYear from '/2024.png';
import { useRef } from 'react';
const FourthYear = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once: true});
  return ( 
    <>
      <div ref={ref} className='toLeftClip flex-wrap relative flex justify-center items-center py-[200px]'>
        <motion.div 
          initial={{x:"-100%"}}
          animate={isInView?{x:"0%"}:{}}
          transition={{type:"tween"}}
          className='z-[-1] absolute w-full h-full bg-[var(--main-color)] '>
        </motion.div>
        <img className='cp100' src={fourthYear} alt="" />
        <p className='fz-0-20 font-bold max-w-[600px] text-white cp'> full-stack development began with a 
          fascination for how websites functioned behind the scenes. Initially, I focused on front-end development, 
          mastering HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces. However, 
          I soon realized that to fully bring my web projects to life, I needed to understand the backend as well. 
          This led me to explore server-side technologies like Node.js and Express.js. I delved into database 
          management with MongoDB, learning how to design and interact with databases to store and retrieve data 
          efficiently. Embracing the full-stack mindset, I integrated technologies like Docker for containerization 
          and AWS EC2 for deployment, ensuring my applications were robust and scalable. .</p>
      </div>
    </>
   );
}
 
export default FourthYear;