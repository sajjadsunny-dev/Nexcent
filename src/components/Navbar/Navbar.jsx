

const Navbar = () => {
   return (
      <>
         <nav className="py-[22px] bg-background fixed w-full z-50">
            <div className="max-w-customContainer mx-auto p-2.5 flex justify-between items-center">
               <a href="#">
                  <img src="public/Logo.png" alt="Logo" />
               </a>
               <ul className="flex">
                  <li><a className="font-inter text-base font-medium leading-[24px] text-navItems p-1.5 mr-9" href="#">Home</a></li>
                  <li><a className="font-inter text-base font-normal leading-[24px] text-navItems p-1.5 mr-9" href="#">Service</a></li>
                  <li><a className="font-inter text-base font-normal leading-[24px] text-navItems p-1.5 mr-9" href="#">Feature</a></li>
                  <li><a className="font-inter text-base font-normal leading-[24px] text-navItems p-1.5 mr-9" href="#">Product</a></li>
                  <li><a className="font-inter text-base font-normal leading-[24px] text-navItems p-1.5 mr-9" href="#">Testimonial</a></li>
                  <li><a className="font-inter text-base font-normal leading-[24px] text-navItems p-1.5" href="#">FAQ</a></li>
               </ul>
               <div className="">
                  <button className="font-inter text-sm font-medium text-navItems px-5 py-2.5 hover:bg-themeColor border-[1px] border-solid border-transparent duration-200 ease-linear hover:border-black hover:text-white rounded-md mr-3.5">Login</button>
                  <button className="font-inter text-sm font-medium text-navItems px-5 py-2.5 hover:bg-themeColor border-[1px] border-solid border-transparent duration-200 ease-linear hover:border-black hover:text-white rounded-md">Sign up</button>
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navbar