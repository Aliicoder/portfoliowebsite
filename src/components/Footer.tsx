const Footer = () => {
  return ( 
    <div className='grid place-items-center'>
    <div>
      <div className=' flex flex-col mx-auto items-center mt-[60px] border-solid border-black border w-fit'>
          <a className='text-[20px] font-bold  w-fit 
          translate-x-[-10px] translate-y-[-10px] transition-all
          hover:translate-x-[0px] hover:translate-y-[0px]
          bg-[var(--main-color)] text-white py-[14px] px-[20px] ' 
          href="">download cv</a>
      </div>
      <h1 className='text-center font-bold pt-[100px] pb-[10px]'>alifahmiofficialacc@gmail.com</h1>
      <h1 className='text-center font-bold py-[10px]'>+91 6366313672</h1>
      <h1 className='text-center font-bold '> </h1>
    </div>
  </div>
   );
}
 
export default Footer;