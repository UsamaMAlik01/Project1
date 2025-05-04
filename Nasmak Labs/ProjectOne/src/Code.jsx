<div className="flex h-screen sm:flex-col md:flex-row lg:flex-row">
  {/* Sidebar */}
  <div className=" lg:w-[220px] md:w-[88px] sm:w-full sm:h-[62px] sm:flex-shrink-0 md:h-screen lg:h-screen">
    <Sidebar />
  </div>

  <div className="flex flex-col flex-1">
    {/* Topbar */}
    <div className=" md:h-[60px]   lg:h-[60px] lg:w-[95%] md:w-[98%] md:ml-[1%] lg:ml-[3%] mt-[1%] rounded-lg sm:h-[1%]  '  ">
      <TopBar />
    </div>

    {/* Main Content */}
    <div className="flex-1 bg-amber-700 ">
      <div className="bg-blue-400 md:h-[1052px] lg:w-[95%] md:w-[98%]  lg:ml-[3%] md:ml-[1%] mt-[1%] grid md:grid-cols-3 grid-cols-1 gap-2 grid-flowp-row-dense h-screen w-[100%] "> 
       <div className=' bg-white md:col-span-2 '   >
        <MergedBox1 />
       </div>
       <div className=' bg-black md:row-span-3  '>

       </div>
       <div className=' bg-gray-600 md:col-span-2 '>

       </div>
       <div className=' bg-red-500 md:col-span-2 '>

       </div>


      </div>
      <div>
        <Footer />
      </div>
    </div>
  </div>
</div>