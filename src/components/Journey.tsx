import FourthYear from './FourthYear';
import SecondYear from './SecondYear';
import firstYear from '/2021.png';
import thirdYear from '/2023.png';
const Journey = () => {
  return ( 
    <>
      <div className='flex flex-wrap justify-center items-center py-[200px]'>
        <p className='fz-0-20 font-bold max-w-[600px] cp100'>My journey into the world of programming and graphic design began with a curious fascination for technology and creativity. Initially, I dabbled in basic HTML and CSS, gradually building simple web pages. The sense of accomplishment from seeing my code come to life fueled my desire to learn more. I soon ventured into JavaScript, where 
        I encountered both challenges and triumphs, each teaching me the value of persistence and problem-solving.</p>
        <img className='cp100' src={firstYear} alt="" />
      </div>
      <SecondYear />
      <div className='flex flex-wrap-reverse justify-center items-center py-[200px]'>
        <p className='fz-0-20 font-bold max-w-[600px] cp'>My journey into the world of programming and graphic design began with a curious fascination for technology and creativity. Initially, I dabbled in basic HTML and CSS, gradually building simple web pages. The sense of accomplishment from seeing my code come to life fueled my desire to learn more. I soon ventured into JavaScript, where 
          I encountered both challenges and triummax-w-[600px]phs, each teaching me the value of persistence and problem-solving.</p>
        <img className='cp100' src={thirdYear} alt="" />
      </div>
      <FourthYear />
    </>
   );
}
 
export default Journey;