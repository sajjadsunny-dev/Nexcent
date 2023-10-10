

const Banner = () => {
   return (
      <>
         <section className="h-screen bg-background">
            <div className="h-full max-w-customContainer mx-auto px-2.5 relative">
               <div className="h-full flex justify-between items-center">
                  <div className="w-[657px]">
                     <h1 className="font-inter text-[64px] leading-[76px] font-semibold text-titleText">Lessons and insights <span className="text-themeColor">from 8 years</span></h1>
                     <p className="font-inter text-base text-paragraph mt-4 mb-8">Where to grow your business as a photographer: site or social media?</p>
                     <button className="font-inter text-base font-medium text-white py-3.5 px-8 bg-themeColor rounded duration-300 hover:bg-[#0A790D]">Register</button>
                  </div>
                  <div className="">
                     <img src="public/bannerVector.png" alt="bannerVector.png" />
                  </div>
               </div>
               <div className="absolute bottom-[20px] left-1/2 translate-x-[-50%] flex">
                  <div className="w-3 h-3 bg-themeColor rounded-full mr-2 cursor-pointer"></div>
                  <div className="w-3 h-3 bg-themeColor opacity-30 rounded-full mr-2 cursor-pointer"></div>
                  <div className="w-3 h-3 bg-themeColor opacity-30 rounded-full cursor-pointer"></div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Banner