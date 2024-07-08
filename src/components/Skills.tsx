import Lottie from "lottie-react";
import uxui from '../animations/uxui.json';
import networking from '../animations/networking.json';
import webdev from '../animations/webdev.json';
import graphic from '../animations/graphic.json';
const Skills = () => {
  return ( 
    <div className=''>
          <h1 className='fz-33 text-center py-[50px] font-bold'>What am i good at ?</h1>
          <div className='grid grid-cols-1  lg:grid-cols-2 justify-items-center gap-20'>
            <div className='flex flex-col w-[400px] '>
              <Lottie className='h-[300px] p-[50px]' animationData={uxui} />
              <div className='fz-25 text-nowrap text-white text-center px-[100px] py-[30px] bg-[var(--main-color)]'> UX and UI</div>
            </div>
            <div className='flex  flex-col w-[400px]'>
              <Lottie className='h-[300px] p-[50px]' animationData={graphic} />
              <div className='fz-25 text-nowrap text-white text-center px-[100px] py-[30px] bg-[var(--main-color)]'> Graphic design</div>
            </div>
            <div className='flex flex-col w-[400px] '>
              <Lottie className='h-[300px] p-[50px]' animationData={networking} />
              <div className='fz-25 text-nowrap text-white text-center px-[100px] py-[30px] bg-[var(--main-color)]'>Networking</div>
            </div>
            <div className='flex flex-col w-[400px]'>
              <Lottie className='h-[300px] p-[50px]' animationData={webdev} />
              <div className='fz-25 text-nowrap text-white text-center px-[100px] py-[30px] bg-[var(--main-color)]'>Web development</div>
            </div>
          </div>
          <h1 className='fz-33 text-center py-[50px] pt-[100px] font-bold'>my journey</h1>
        </div>
   );
}
 
export default Skills;