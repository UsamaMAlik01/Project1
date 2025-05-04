import React from 'react';

export const Footer = () => {
  return (
    <footer className={`
      w-[95%] /* Desktop width */ 
      h-[48px]     /* Fixed height */
      px-6         /* Horizontal padding */
      border-t border-[#979797] /* Top border */
      flex items-center justify-between
      mx-auto      /* Center on desktop */
      mt-6         /* Top margin */
      
    `}>
      {/* Left Links - About */}
      <div className={`
        flex items-center justify-around
        w-[95%] /* Desktop width */
        h-[24px]    /* Fixed height */
        gap-[10px]   /* Space between items */
      
      `}>
          <div className={`
  flex items-center justify-right
  w-[50%] /* Desktop width */
  h-[24px]    /* Fixed height */
  gap-[10px]   /* Space between items */
  
`}>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    About Zalora Singapour
  </a>
  </div>
  <div className={`
  flex items-center justify-end
  w-[70%]
  lg:w-[50%] /* Desktop width minus sidebar */
  md:w-[50%]  /* Tablet width minus sidebar */
  h-[24px]     /* Fixed height */
  gap-[16px]   /* Space between items */
  
`}>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    Terms & Conditions
  </a>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    FAQ
  </a>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    Contact Us
  </a>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    Seller Labs
  </a>
  </div>
  
  </div>

    </footer>
  );
};


{/* Right Links */}
<div className={`
  flex items-center justify-end
  w-[50%]
  h-[24px]     /* Fixed height */
  gap-[16px]   /* Space between items */
`}>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    Terms & Conditions
  </a>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    FAQ
  </a>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    Contact Us
  </a>
  <a href="#" className="text-[15px] font-normal leading-[22px] text-[#4A4B53] hover:underline">
    Seller Labs
  </a>
</div>