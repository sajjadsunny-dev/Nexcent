
const Achievements = () => {
   return (
      <>
         <section className="py-16 bg-background">
            <div className="max-w-customContainer mx-auto px-2.5 flex justify-between">
               <div className="w-[540px]">
                  <h5 className="font-inter text-4xl font-semibold text-titleText leading-[44px] w-[408px]">Helping a local <span className="text-themeColor">business reinvent itself</span></h5>
                  <p className="font-inter text-base text-paragraph mt-2">We reached here with our hard work and dedication</p>
               </div>

               <div className="w-[540px]">
                  <div className="flex gap-x-[30px] mb-[40px]">
                     <div className="w-1/2 flex items-center">
                        <img src="/clientIcons/clientsCount.png" alt="clientsCount.png" />
                        <div className="ml-4">
                           <h6 className="font-inter text-[28px] font-bold text-titleText leading-[36px]">2,245,341</h6>
                           <p className="font-inter text-base text-paragraph">Members</p>
                        </div>
                     </div>

                     <div className="w-1/2 flex items-center">
                        <img src="/clientIcons/clientsCount2.png" alt="clientsCount2.png" />
                        <div className="ml-4">
                           <h6 className="font-inter text-[28px] font-bold text-titleText leading-[36px]">46,328</h6>
                           <p className="font-inter text-base text-paragraph">Clubs</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-x-[30px]">
                     <div className="w-1/2 flex items-center">
                        <img src="/clientIcons/clientsCount3.png" alt="clientsCount3.png" />
                        <div className="ml-4">
                           <h6 className="font-inter text-[28px] font-bold text-titleText leading-[36px]">828,867</h6>
                           <p className="font-inter text-base text-paragraph">Event Bookings</p>
                        </div>
                     </div>

                     <div className="w-1/2 flex items-center">
                        <img src="/clientIcons/clientsCount4.png" alt="clientsCount4.png" />
                        <div className="ml-4">
                           <h6 className="font-inter text-[28px] font-bold text-titleText leading-[36px]">1,926,436</h6>
                           <p className="font-inter text-base text-paragraph">Payments</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Achievements