

const Community = () => {
   return (
      <>
         <section className="py-[42px]">
            <div className="max-w-customContainer mx-auto px-2.5">
               <h2 className="font-inter text-4xl text-titleText font-semibold text-center leading-[44px] mb-2 w-[542px] mx-auto">Manage your entire community in a single system</h2>
               <p className="font-inter text-base text-paragraph text-center">Who is Nextcent suitable for?
               </p>

               <div className="flex justify-between items-center mt-4">
                  <div className="w-[300px] rounded-lg shadow-clientCards p-6">
                     <img className="mx-auto" src="public/community/icon-2.png" alt="" />
                     <h4 className="font-inter text-[28px] text-titleText font-bold leading-[36px] text-center mb-2 mt-4">Membership Organisations</h4>
                     <p className="font-inter text-sm text-paragraph text-center">Our membership management software provides full automation of membership renewals and payments</p>
                  </div>

                  <div className="w-[300px] rounded-lg shadow-clientCards p-6">
                     <img className="mx-auto" src="public/community/icon-1.png" alt="" />
                     <h4 className="font-inter text-[28px] text-titleText font-bold leading-[36px] text-center mb-2 mt-4">National Associations</h4>
                     <p className="font-inter text-sm text-paragraph text-center">Our membership management software provides full automation of membership renewals and payments</p>
                  </div>

                  <div className="w-[300px] rounded-lg shadow-clientCards p-6">
                     <img className="mx-auto" src="public/community/icon.png" alt="" />
                     <h4 className="font-inter text-[28px] text-titleText font-bold leading-[36px] text-center mb-2 mt-4 w-[80%] mx-auto">Clubs And Groups</h4>
                     <p className="font-inter text-sm text-paragraph text-center">Our membership management software provides full automation of membership renewals and payments</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Community