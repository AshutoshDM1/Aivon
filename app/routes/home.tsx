import { InteractiveGridPattern } from "~/components/magic-ui/interactive-grid-pattern";
import type { Route } from "./+types/home";
import SplineComponent from "~/components/Spline";

export function meta({}: Route.MetaArgs) {
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
      <SplineComponent />
      <div className="min-h-screen relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section */}
            <div className="mt-12">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Aivon
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                The future of note-taking is here. Experience Open Source Notion
                AI with the power of Lotion.
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

            {/* Waitlist Form */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 md:p-12 mt-42 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Join the Waitlist
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Be among the first to experience the next generation of
                intelligent note-taking.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Join Waitlist
                </button>
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                We'll notify you when Aivon is ready. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
