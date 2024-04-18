import React from "react";

const Hero = () => {
  return (
    <div className=" z-40 pb-[54px] pt-28 md:h-screen flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
    <div className="max-w-xl space-y-6">
        <div className="">
          <div className="  font-semibold	">
            <div className="text-5xl font-bold leading-tight">
              <h1>
                Done For You
                <br />
                Short-Form Video Editing!
              </h1>
              <h2>
                <span className="text-2xl" style={{ color: "#e09900" }}>
                  Content Creators Get Your Time Back 😌
                </span>
              </h2>
            </div>

            <p className="pt-3  font-semibold     ">
              We edit videos, write scripts, manage posting &amp; runs ads for
              Tiktok, Instagram Reels &amp; YouTube Shorts.
            </p>
            <p>
              <strong>Stop wasting time </strong>on unreliable editors, editing
              apps &amp; AI.
            </p>
          </div>
        </div>
        <div className="et_pb_module et_pb_divider_0 et_pb_space et_pb_divider_hidden">
          <div className="et_pb_divider_internal"></div>
        </div>
        <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper  et_pb_module ">
          <a
            className="et_pb_button et_pb_button_0 et_pb_bg_layout_light"
            href="https://shortformvideo.co/pricing/"
          >
          
            <button className="bg-black text-white py-3 px-6 rounded-md">   GET EDITS </button>
          </a>
        </div>
      </div>

      <div className="mt-8 lg:mt-0 lg:ml-8 relative">
      <div className="  border-8 border-yellow-400 rounded">
      <iframe
            loading="lazy"
            className="rounded-lg"
              height="400"
              
            title="ShortFormVideo-verticall"
            src="https://player.vimeo.com/video/855991217?dnt=1&amp;app_id=122963"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            name="fitvid0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;






