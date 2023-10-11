import { FaArrowRightLong } from 'react-icons/fa6';

const Customers = () => {
   return (
      <>
         <section className="py-8 bg-background">
            <div className="max-w-customContainer mx-auto px-2.5 grid grid-cols-12 gap-6">
               <div className="col-span-4">
                  <img className="rounded-lg shadow-customers" src="/customers.jpg" alt="customers.jpg" />
               </div>
               <div className="col-span-8 pl-10 flex flex-col justify-center">
                  <p className="font-inter text-sm text-paragraph">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                  <h5 className="font-inter text-xl text-themeColor font-semibold mt-4 mb-2">Tim Smith</h5>
                  <h6 className="font-inter text-base text-[#89939E]">British Dragon Boat Racing Association</h6>

                  <div className="flex items-center justify-between mt-8">
                     <img src="/clients/Logo.png" alt="Logo.png" />
                     <img src="/clients/Logo-1.png" alt="Logo-1.png" />
                     <img src="/clients/Logo-2.png" alt="Logo-2.png" />
                     <img src="/clients/Logo-3.png" alt="Logo-3.png" />
                     <img src="/clients/Logo-4.png" alt="Logo-4.png" />
                     <img src="/clients/Logo-5.png" alt="Logo-5.png" />
                     <div className="flex items-center cursor-pointer">
                        <h4 className="font-inter text-xl text-themeColor font-semibold mr-3">Meet all customers</h4>
                        <FaArrowRightLong className="text-lg text-themeColor" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Customers