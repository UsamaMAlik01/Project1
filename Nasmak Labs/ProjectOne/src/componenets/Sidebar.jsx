import React, { useState } from 'react';
import { LayoutDashboard, Package, ShoppingCart, BarChart2, Settings, Shield, Wrench, HelpCircle, Search, Menu, Bell } from 'lucide-react';

export const Sidebar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('');

  const buttons = [
    { icon: <LayoutDashboard className="w-5 h-5" />, text: "Overview", id: 'overview' },
    { icon: <Package className="w-5 h-5" />, text: "Products", id: 'products' },
    { icon: <ShoppingCart className="w-5 h-5" />, text: "Orders", id: 'orders' },
    { icon: <BarChart2 className="w-5 h-5" />, text: "Reports", id: 'reports' },
    { icon: <Settings className="w-5 h-5" />, text: "Settings", id: 'settings' },
    { icon: <Shield className="w-5 h-5" />, text: "Administration", id: 'administration' },
    { icon: <Wrench className="w-5 h-5" />, text: "Maintenance", id: 'maintenance' },
    { icon: <HelpCircle className="w-5 h-5" />, text: "Help", id: 'help' }
  ];

  return (
    <>
<nav className="lg:hidden md:hidden fixed top-0 left-0 right-0 h-16 bg-[#363740] z-50 flex items-center justify-between px-4 border-b border-[#DBDADE]/10">
  <div className="flex items-center gap-2">
  <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-1">
      <Menu className="w-[24px] h-[24px] text-white" />
    </button>
    <button className="p-1">
      <Search className="w-[24px] h-[24px] text-white" />
    </button>
  </div>
  {isMobileOpen && (
    <div className="absolute top-16 left-4 w-56 bg-[#363740] shadow-lg rounded-md overflow-hidden">
      {buttons.map(btn => (
        <button
          key={btn.id}
          className={`flex items-center w-full h-12 px-4 gap-3 text-[#DBDADE] hover:bg-[#3E4049] ${activeButton === btn.id ? 'bg-[#3E4049] border-l-4 border-[#A4A6B3]' : ''}`}
          onClick={() => {
            setActiveButton(btn.id);
            setIsMobileOpen(false);
          }}
        >
          {btn.icon}
          <span className="text-sm">{btn.text}</span>
        </button>
      ))}
    </div>
  )}
  <div className="flex items-center gap-3">
    <div>
    <div className="absolute left-1/2 transform -translate-x-1/2">
    <button className="p-1">
      <Bell className="w-6 h-6 text-white" />
    </button>
  </div>
      <div className="flex flex-col items-start justify-center mr-2">
      <span className="text-white text-md font-bold">Puma Official Store</span>
      <span className="text-white text-sm text-right">Change Seller</span>
      </div>
    
    </div>
    <img 
      src="src/assets/status.png" 
      className="w-[48px] rounded-full mr-2" 
      alt="Profile"
    />
  </div>
</nav>

<aside className="hidden md:block lg:hidden fixed left-0 top-0 h-screen w-[88px] bg-[#363740] z-40 pt-4">
  <div className=" border-b border-[#DBDADE]/10 w-full h-[60px] flex justify-center items-center hover:bg-[#3E4049] mb-[40%]">
    <button><Menu className="w-[24px] h-[24px] text-white" /></button>
  </div>
  {buttons.map(btn => (
    <button
      key={btn.id}
      className={`flex flex-col items-center justify-center w-full h-[60px] text-[#DBDADE] hover:bg-[#3E4049] ${activeButton === btn.id ? 'bg-[#3E4049] border-l-4 border-[#A4A6B3]' : ''}`}
      onClick={() => setActiveButton(btn.id)}
    >
      {btn.icon}
    </button>
  ))}
</aside>

<aside className="hidden lg:block fixed left-0 top-0 h-screen w-[255px] bg-[#363740] z-40">
  <div className="p-6 border-b border-[#DBDADE]/10 flex justify-center items-center mb-[40%] hover:bg-[#3E4049]">
    <button><Menu className="w-[24px] h-[24px] text-white" /></button>
    <img src="src/assets/logo.png" className="w-[120px] h-[22px] ml-3" alt="Logo" />
  </div>
  <nav className="pt-4 space-y-1 px-3">
    {buttons.map(btn => (
      <button
        key={btn.id}
        className={`flex items-center w-full h-12 gap-3 text-[#DBDADE] hover:bg-[#3E4049] ${activeButton === btn.id ? 'bg-[#3E4049] border-l-4 border-[#A4A6B3]' : ''}`}
        onClick={() => setActiveButton(btn.id)}
      >
        <div className="flex items-center justify-between w-full h-12 px-3">
          <div className='flex justify-center items-center gap-3'>{btn.icon}
          <span className="text-md">{btn.text}</span></div>
          <div><img src="src/assets/chevron.png" className="w-5 h-5" alt="Chevron" /></div>
        </div>
      </button>
    ))}
  </nav>
</aside>
</>
  );
};
