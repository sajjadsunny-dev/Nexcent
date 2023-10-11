import { FaArrowRightLong } from 'react-icons/fa6';

const Demo = () => {
   return (
      <>
         <section className="py-8">
            <div className="max-w-customContainer mx-auto px-2.5">
               <div className="w-[880px] mx-auto flex flex-col items-center">
                  <h2 className="font-inter text-[64px] text-[#263238] leading-[76px] font-semibold text-center">Pellentesque suscipit fringilla libero eu.</h2>
                  <button className="font-inter text-base font-medium text-white py-3.5 px-8 mt-8 bg-themeColor rounded duration-300 hover:bg-[#0A790D] flex items-center">Get a Demo<FaArrowRightLong className="text-lg ml-3" /></button>

               </div>
            </div>
         </section>
      </>
   )
}

export default Demo