import { FaArrowRightLong } from 'react-icons/fa6';

const Updates = () => {
   return (
      <>
         <section className="pt-12 pb-40">
            <div className="max-w-customContainer mx-auto px-2.5">
               <h2 className="font-inter text-4xl text-titleText font-semibold text-center leading-[44px] w-[542px] mx-auto">Caring is the new marketing</h2>
               <p className="font-inter text-base text-paragraph text-center mt-2 mb-4 w-[628px] mx-auto">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
               </p>

               <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-1 relative">
                     <img className="rounded-lg" src="/updates/image1.jpg" alt="image1.jpg" />

                     <div className="p-4 bg-white rounded-lg w-fit absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[45%] shadow-customers">
                        <h5 className="font-inter text-xl text-titleText font-semibold text-center mb-4 w-[285px]">Creating Streamlined Safeguarding Processes with OneRen</h5>
                        <a className="font-inter text-xl text-themeColor py-2 font-semibold text-center flex justify-center items-center" href="#">Readmore<FaArrowRightLong className="text-lg ml-3" /></a>
                     </div>
                  </div>

                  <div className="col-span-1 relative">
                     <img className="rounded-lg" src="/updates/image2.jpg" alt="image2.jpg" />

                     <div className="p-4 bg-white rounded-lg w-fit absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[45%] shadow-customers">
                        <h5 className="font-inter text-xl text-titleText font-semibold text-center mb-4 w-[285px]">What are your safeguarding responsibilities and how can you manage them?</h5>
                        <a className="font-inter text-xl text-themeColor py-2 font-semibold text-center flex justify-center items-center" href="#">Readmore<FaArrowRightLong className="text-lg ml-3" /></a>
                     </div>
                  </div>

                  <div className="col-span-1 relative">
                     <img className="rounded-lg" src="/updates/image3.jpg" alt="image3.jpg" />

                     <div className="p-4 bg-white rounded-lg w-fit absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[45%] shadow-customers">
                        <h5 className="font-inter text-xl text-titleText font-semibold text-center mb-4 w-[285px]">Revamping the Membership Model with Triathlon Australia</h5>
                        <a className="font-inter text-xl text-themeColor py-2 font-semibold text-center flex justify-center items-center" href="#">Readmore<FaArrowRightLong className="text-lg ml-3" /></a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Updates