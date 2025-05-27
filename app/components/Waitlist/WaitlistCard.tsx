import { sendWaitlistEmail } from "../../services/api";

const WaitlistCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    sendWaitlistEmail(email);
  };
  return (
    <>
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl max-w-md mx-auto font-[system-ui] p-8 py-9 mt-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Join the Waitlist
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
          Be among the first to experience the Aivon.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
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

          <button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer">
            Join Waitlist
          </button>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          We&apos;ll notify you when Aivon is ready. No spam, ever.
        </p>
      </div>
    </>
  );
};

export default WaitlistCard;
