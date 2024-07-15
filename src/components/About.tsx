import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const animations = {
  hidden :{
    opacity : 0 ,
},
  visible:{
    opacity : 1,
    transition:{ staggerChildren : 0.01}
  }
}
const about = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once: true});
  useEffect(() =>{
    console.log(isInView)
  },[isInView]);
  return ( 
    <div ref={ref} className='fz-0-33 relative flex justify-center items-center 
    h-[100vh]  toRightClip text-white'>
     <motion.div 
       initial={{x:"100%"}}
       animate={isInView?{x:"0%"}:{}}
       transition={{type:"tween"}}
       className='z-[-1] absolute w-full h-full bg-[var(--main-color)] '>
  
      </motion.div>
     <p className='fz-0-20 font-bold  text-white cp'>
     <motion.span
       variants={animations}
       initial="hidden"
       animate="visible"
       >
       {`skilled web developer 
       and graphic designer. With a keen eye for detail 
       and a passion for creating visually appealing and 
       functional websites, Ali combines technical expertise 
       with artistic flair. His work seamlessly blends aesthetics with 
       user-friendly design, ensuring a high-quality user experience. Ali's 
       proficiency in both web development and graphic 
       design allows him to deliver
        comprehensive solutions, from concept to execution, 
        catering to a wide range of digital needs.`.split("")
        .map(l=>{
         return <motion.span
           variants={animations}
         >{l}</motion.span>
        })}
     </motion.span>
     </p>

   </div>
   );
}
 
export default about;