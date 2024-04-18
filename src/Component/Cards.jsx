import React from 'react';
 
export  const Cards = () => {
  return (
    <div className="bg-white flex   flex-col p-8 rounded-lg shadow-md">
      <h2 className="text-5xl mx-auto font-bold mb-12">How it works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-32  ">
  <div className="p-6 border-4 border-black  rounded-lg">
    <h3 className="text-3xl font-bold mb-2">01. Place Order</h3>
    <p className="text-gray-600">
      Select a video editing package. Payment is made through a secure Stripe gateway. You will receive a confirmation email with on-boarding details.
    </p>
  </div>
  <div className="p-6 border-4 border-black  rounded-lg">
    <h3 className="text-3xl font-bold mb-2">02. Upload Footage</h3>
    <p className="text-gray-600">
      Upload footage to google drive folder or provide the live URL of long-form content.
    </p>
  </div>
  <div className="p-6 border-4 border-black  rounded-lg">
    <h3 className="text-3xl font-bold mb-2">03. Receive Edited Videos</h3>
    <p className="text-gray-600">
      Average 48 hours TAT per video. Notification when available for download. Easily submit revision requests. Videos posted for you if requested.
    </p>
  </div>
</div>
      <div className=" text-black p-8 flex flex-col  mx-auto  w-4/5  border-[5px] border-black  rounded-lg mt-8">
        <h3 className="text-sm font-bold mx-auto mb-2">SHORT-FORM VIDEO EDITING</h3>
        <h2 className="  text-6xl font-bold mx-auto mb-7">Remove The Bottleneck</h2>
        <p className="text-lg block font-medium text-center px-10 ">
          It can take up-to 60 minutes to edit a single video. Let our professional TikTok &
          Reels video editors handle the workload so you can focus on sales &
          growth.
        </p>
      </div>
    </div>
  );
};