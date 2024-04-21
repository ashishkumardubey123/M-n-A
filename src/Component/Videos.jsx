import React from "react";

const videoExamples = [
  {
    thumbnailUrl:
      "https://i.vimeocdn.com/video/1567232649-d5e30aaa0cf7932c4967c3da5a4e4ada7726e6b47ba55dc215df65d564f3b799-d?mw=200&mh=356&q=70",

    playUrl:
      "https://shortformvideo.co/wp-content/uploads/2022/10/3-things-you-didn-t-know-about-luxury-stores-ytshorts.savetube.me_.mp4?_=2",
  },
  {
    thumbnailUrl:
      "https://i.vimeocdn.com/video/1567232995-ed4beeb0c1c66f76101e89284d98e659cc32713e26a506ee390811a7ac97cc1d-d?mw=200&mh=356&q=70",

    playUrl:
      "https://shortformvideo.co/wp-content/uploads/2022/11/11-blind-buy-worthy-mens-fragrances-in-15-seconds-ytshorts.savetube.me_.mp4?_=3",
  },
  {
    thumbnailUrl:
      "https://i.vimeocdn.com/video/1567234381-1e0dc999747420f556f20f9df185b8614822ea15b4e5e543efe4219d56844e9c-d?mw=200&mh=356&q=70",

    playUrl:
      "https://shortformvideo.co/wp-content/uploads/2022/11/accept-all-your-heroes-are-full-of-sh-t-ytshorts.savetube.me_.mp4?_=1",
  },
  {
    thumbnailUrl:
      "https://i.vimeocdn.com/video/1567233987-43608af64a12ca09b7dd10f54b5c50d3bec3cab8d527be3d69228c8bc5ef0355-d?mw=200&mh=355&q=70  ",

    playUrl:
      "https://shortformvideo.co/wp-content/uploads/2022/10/3-things-you-didn-t-know-about-luxury-stores-ytshorts.savetube.me_.mp4?_=2",
  },
];

const ShortFormVideoExamples = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center p-8 ">
      <h2 className="text-5xl  lg:pb-10 font-bold mb-11">
        Short-Form <span style={{ color: "#e09900" }}> Video Example</span>{" "}
        Edits:
      </h2>
      <div className="grid grid-cols-1 w-2/3  mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {videoExamples.map((video, index) => (
          <div key={index} className="relative">
            <img
              src={video.thumbnailUrl}
              className="w-full h-auto rounded-lg"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* <iframe
                src={video.playUrl}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                frameborder="0"
              ></iframe> */}


              <iframe
                loading="lazy"
             
                className="w-full  rounded-lg"
                height="300"
                // title="ShortFormVideo-verticall"
                src={video.playUrl}
                frameborder="0"
                name="fitvid0"
              ></iframe>
  
            </div>
            <p className="text-sm mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortFormVideoExamples;
