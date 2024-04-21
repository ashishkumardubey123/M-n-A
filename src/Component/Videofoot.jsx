import React from "react";

function Videofoot() {
  return (

    <div> 
    <div className=" bg-white text-[#333] p-8 flex flex-col  mx-auto  w-full  border-[3px] border-black   mt-8  overflow-hidden md:max-w-2xl">

      <div className=" flex flex-col  items-center  ">
        <h2 className="text-4xl pb-8  text-[#333] font-bold ">Who is it for?</h2>
   
        <p className="text-black text-sm w-full pb- font-semibold text-center mb-6">
        Content creators, coaches, realtors, podcasters, influencers, vloggers, entrepreneurs and e-commerce brands
        making videos on TikTok, Instagram Reels & YouTube Shorts.
      </p>
      <button className="inline-flex items-center justify-center px-4 py-2 bg-[#3d405b] text-white font-medium text-base rounded-md transition duration-500 hover:bg-[#2d2f44] hover:shadow-lg focus:outline-none  focus:ring-offset-gray-100 focus:ring-[#3d405b] mb-2">
  <span className="relative">  ORDER EDITS </span>
  <span className="ml-2 transition-all duration-500 hover:translate-x-1">»</span>
</button>
      </div>
    </div>

    <div className="flex md:max-w-2xl flex-col md:flex-row border-[3px] border-black   mt-8   mx-auto justify-center bg-gray-100 p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-sm font-bold mb-4">WIN THE BATTLE FOR ATTENTION</h2>
        <h1 className="text-4xl font-bold mb-6">Captivate Your Audience 👀</h1>
        <ul className="list-disc list-inside mb-6">
          <li>👁️ Eye Catching Visuals</li>
          <li>😀 Emojis, GIFs, Images</li>
          <li>🎥 Video Stabilization</li>
          <li>🎵 Trending Music + Foley Sounds Effects</li>
          <li>🔥 Trending Content</li>
          <li>🖋️ Subtitling • Captions</li>
          <li>✂️ Trimming • Cut the Fluff</li>
          <li>🔍 Zooms • Pans • Cuts • Transitions</li>
          <li>💥 Call To Action Enhancement</li>
        </ul>
        <p className="mb-6">
          Our edits follow the "Alex Hormozi" style format for proven success. If you require a different style please message us or book a call before ordering.
        </p>
      </div>
     
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Repurpose Longform Content</h2>
        <p className="mb-4">
          Repurpose new or existing longform content ie podcasts or YouTube Videos into clips for TikTok Reels or YouTube Shorts. Each clip produced counts as 1 monthly edit credit.
        </p>
        <h3 className="text-xl font-bold mb-4">Grow Faster With A CTA</h3>
        <p className="mb-6">
          Whether your goal is growing subscribers, bookings appointments or selling products, we ensure every video pushes your audience toward that outcome.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ORDER EDITS
        </button>
      </div>
        
       
    </div>

    </div>
 
  );
}

export default Videofoot;
