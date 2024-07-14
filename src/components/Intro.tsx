import { motion } from "framer-motion";
import img from '/main.png';

const animations = {
  hidden :{
    opacity : 0 ,
},
  visible:{
    opacity : 1,
    transition:{ staggerChildren : 0.05}
  }
}
const Intro = () => {
  return ( 

    <div className='flex flex-col justify-between h-[101vh] mb-[100px]'>
    <div>
      <h1 className='cp pt-[50px]   font-bold fz-25'>alicoder.</h1>
    </div>
    <div className='flex lg:flex-row flex-col items-center lg:justify-center   '>
      <img src={img} alt="" className=' h-[220px] lg:h-[440px] lg:p-0 cp mb-[50px] object-contain' />
      <div className='flex flex-col cml100 justify-center cp'>
        <h1 className='fz-0-33 font-bold'>
          <motion.span
            variants={animations}
            initial="hidden"
            animate="visible"
            >
            {"ali fahmi omar".split("").map(l=><motion.span 
            variants={animations}
            >{l}</motion.span>)}
          </motion.span>
        </h1>
        <h2 className='fz-0-33 py-[10px] lg:py-[40px]  font-bold'>
          <motion.span
            variants={animations}
            initial="hidden"
            animate="visible"
            >
            {"Full Stack web developer".split("").map(l=>(
              <motion.span
                variants={animations}
              >{l}</motion.span>
            ))}
            </motion.span>
        </h2>
        <h2 className='fz-8-20 max-w-[330px] font-bold'>
            <motion.span
              variants={animations}
              initial="hidden"
              animate="visible"
            >

              {
                "I help people build there dream business ideas so how can i help you ".split("")
                .map(l=>{
                  return <motion.span
                    variants={animations}
                    >{l}</motion.span>
                })
              }
            </motion.span>
              
        </h2>
        
      </div>
      
    </div>
    <div className='flex justify-center'>
      <h1 className='fz-33 py-[50px]  font-bold'>brief about me</h1>
    </div>
  </div>
   );
}
 
export default Intro;