import WaitlistCard from "~/components/Waitlist/WaitlistCard";
import SplineComponent from "~/components/Waitlist/Spline";
import { BackgroundLines } from "~/components/ui/background-lines";

export function meta() {
  return [
    { title: "Aivon" },
    {
      name: "description",
      content: "Welcome to Aivon a Notion AI with Lotion",
    },
  ];
}

export default function Home() {
  return (
    <>
      <BackgroundLines className="absolute z-[10] overflow-hidden ">
        <SplineComponent />
        <div className="min-h-screen relative z-10 font-[monospace] px-2">
          <div className="container mx-auto px-4 pt-12 pb-4 sm:pb-14">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mt-12">
                <div className="flex items-center gap-1 justify-center">
                  <img
                    src="/favicon.png"
                    alt="Aivon"
                    className="w-12 h-12 mb-5"
                  />
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                    ivon
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto backdrop-blur-sm ">
                  The future of note-taking is here. Experience Open Source
                  Notion AI with the power of Lotion.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    AI-Powered
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    Smart Organization
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    Collaborative
                  </span>
                </div>
              </div>
            </div>
          </div>
          <WaitlistCard />
        </div>
      </BackgroundLines>
    </>
  );
}
