import React from 'react';
import { Search, Bell } from 'lucide-react';

export const TopBar = () => {
  return (
    <>
      {/* Desktop Top Bar */}
      <div className="hidden lg:flex w-[95%] items-center h-[60px] px-6 py-3  rounded-lg shadow-sm  my-2">
        <div className="flex items-center w-[40%] 
       h-[36px] px-[10px] gap-[10px] border border-[#DBDADE] rounded-lg">
          <Search size={20} className="text-[#A4A6B3]" />
          <input 
            type="text" 
            placeholder="Search" 
            className="flex-1 h-full outline-none text-sm placeholder-[#A4A6B3]"
          />
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-4 ml-[50px]">
          <Bell size={26} className="text-[#363740]" />
          <div className="flex items-center gap-3">
          <div className="flex flex-col items-start justify-center mr-2">
      <span className="text-black text-md font-bold">Puma Official Store</span>
      <span className="text-black text-sm ">Change Seller</span>
      </div>
            
            <img src="src/assets/status.png" className="w-[48px] h-[48px] rounded-full" alt="Profile" />
          </div>
        </div>
      </div>

      {/* Tablet Top Bar */}
      <div className="hidden md:flex justify-between lg:hidden items-center w-[95%] h-[60px] px-6 py-3 bg-black rounded-lg shadow-sm ml-6 mb-2">
        <div className="flex items-center w-[40%] h-[36px] px-[10px] gap-[10px] border border-[#DBDADE] rounded-lg">
          <Search size={20} className="text-[#A4A6B3]" />
          <input 
            type="text" 
            placeholder="Search" 
            className="flex-1 h-full outline-none text-sm placeholder-[#A4A6B3]"
          />
        </div>
        <div className="flex items-center gap-4 ">
          <Bell size={26} className="text-[#363740]" />
          <div className="flex items-center gap-3">
          <div className="flex flex-col items-start justify-center mr-2">
      <span className="text-black text-md font-bold wrap">Puma Official Store</span>
      <span className="text-black text-sm text-left">Change Seller</span>
      </div>
            <img src="src/assets/status.png" className="w-[48px] h-[48px] rounded-full" alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};