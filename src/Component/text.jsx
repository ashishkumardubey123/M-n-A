**
 * v0 by Vercel.
 * @see https://v0.dev/t/jQW2T9tG3wk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-white p-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-6">
          <h1 className="text-6xl font-bold leading-tight">
            Done For You
            <br />
            Short-Form Video Editing!
          </h1>
          <p className="text-3xl">
            Content Creators Get Your Time Back
            <span aria-label="smiling face" role="img">
              😊
            </span>
          </p>
          <p className="text-lg">
            We edit videos, write scripts, manage posting & runs ads for Tiktok, Instagram Reels & YouTube Shorts.
          </p>
          <p className="text-lg font-semibold">Stop wasting time on unreliable editors, editing apps & AI.</p>
          <Button className="bg-black text-white py-3 px-6 rounded-md">GET EDITS</Button>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 relative">
          <div className="border-8 border-yellow-400 rounded-lg">
            <img
              alt="Video Editing"
              className="rounded-lg"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlayIcon className="text-white w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  )
}

