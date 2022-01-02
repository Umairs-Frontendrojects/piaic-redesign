import React from "react";

const CallToAction = () => {
  return (
    <aside className="p-12 bg-gray-900 sm:p-16 lg:p-24">
      <div className="max-w-xl mx-auto text-center">
        <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Join the next tech revolution today!
        </p>

        <form className="mt-8 sm:flex">
          <div className="sm:flex-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-between w-full px-5 py-3 mt-4 font-medium text-white bg-green-600 rounded-lg sm:w-auto sm:mt-0 sm:ml-4 hover:bg-green-500"
          >
            Sign up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-4 h-4 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </aside>
  );
};

export default CallToAction;
