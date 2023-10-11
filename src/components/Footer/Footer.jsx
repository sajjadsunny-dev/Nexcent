import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';

function Footer() {
   return (
      <>
         <section className="py-16 bg-[#263238]">
            <div className="max-w-customContainer mx-auto px-2.5 grid grid-cols-12 gap-6">
               <div className="col-span-3">
                  <img src="public/footerLogo.png" alt="footerLogo.png" />
                  <p className="font-inter text-sm text-[#F5F7FA] mt-10 mb-2">Copyright © 2020 Nexcent ltd.</p>
                  <p className="font-inter text-sm text-[#F5F7FA]">All rights reserved</p>
                  <div className="flex mt-10">
                     <a className="w-8 h-8 bg-[#3C464C] flex justify-center items-center rounded-full mr-4 text-lg text-[#F5F7FA]" href="#">
                        <BsInstagram className="" />
                     </a>
                     <a className="w-8 h-8 bg-[#3C464C] flex justify-center items-center rounded-full mr-4 text-lg text-[#F5F7FA]" href="#">
                        <BiWorld className="" />
                     </a>
                     <a className="w-8 h-8 bg-[#3C464C] flex justify-center items-center rounded-full mr-4 text-lg text-[#F5F7FA]" href="#">
                        <BsTwitter className="" />
                     </a>
                     <a className="w-8 h-8 bg-[#3C464C] flex justify-center items-center rounded-full text-lg text-[#F5F7FA]" href="#">
                        <AiFillYoutube className="" />
                     </a>
                  </div>
               </div>
               <div className="col-span-2"></div>
               <div className="col-span-2">
                  <h5 className="font-inter text-lg font-semibold text-white mb-6">Company</h5>
                  <div className="flex flex-col">
                     <a className="font-inter text-sm text-background mb-3" href="">About us</a>
                     <a className="font-inter text-sm text-background mb-3" href="">Blog</a>
                     <a className="font-inter text-sm text-background mb-3" href="">Contact us</a>
                     <a className="font-inter text-sm text-background mb-3" href="">Pricing</a>
                     <a className="font-inter text-sm text-background" href="">Testimonials</a>
                  </div>
               </div>
               <div className="col-span-2">
                  <h5 className="font-inter text-lg font-semibold text-white mb-6">Support</h5>
                  <div className="flex flex-col">
                     <a className="font-inter text-sm text-background mb-3" href="">Help center</a>
                     <a className="font-inter text-sm text-background mb-3" href="">Terms of service</a>
                     <a className="font-inter text-sm text-background mb-3" href="">Legal</a>
                     <a className="font-inter text-sm text-background mb-3" href="">Privacy policy</a>
                     <a className="font-inter text-sm text-background" href="">Status</a>
                  </div>
               </div>
               <div className="col-span-3">
                  <h5 className="font-inter text-lg font-semibold text-white mb-6">Stay up to date</h5>
                  <form className="relative">
                     <input className="focus:outline-none py-2.5 pl-3 pr-9 w-full font-inter text-sm text-[#D9DBE1] rounded-lg bg-[#FFFFFF33]" type="text" placeholder="Your email address" />
                     <div className="absolute top-1/2 right-[12px] translate-y-[-50%] text-white">
                        <FiSend className="text-xl" />
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}

export default Footer