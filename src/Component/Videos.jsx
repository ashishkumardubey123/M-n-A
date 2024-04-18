import React from 'react';

const videoExamples = [
  {
    thumbnailUrl: 'https://example.com/thumbnail1.jpg',
    title: 'DION ABOUT LUXURY STORIES',
    playUrl: 'https://example.com/video1.mp4',
  },
  {
    thumbnailUrl: 'https://example.com/thumbnail2.jpg',
    title: 'JOHNNY DEPP HBIS EX WIFE',
    playUrl: 'https://example.com/video2.mp4',
  },
  {
    thumbnailUrl: 'https://example.com/thumbnail3.jpg',
    title: 'MOTORCYCLE VIDEO',
    playUrl: 'https://example.com/video3.mp4',
  },
  {
    thumbnailUrl: 'https://example.com/thumbnail4.jpg',
    title: 'ACTOR INTERVIEW',
    playUrl: 'https://example.com/video4.mp4',
  },
];

const ShortFormVideoExamples = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Short-Form Video Example Edits:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videoExamples.map((video, index) => (
          <div key={index} className="relative">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a
                href={video.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                Play
              </a>
            </div>
            <p className="text-sm mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortFormVideoExamples;