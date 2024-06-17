import React from "react";
import works1 from "../assets/works1.png";
import works2 from "../assets/works2.png";
import works3 from "../assets/works3.png";
export default function Works() {
  return (
    <div>
      <div className=" mx-60">
        <div className="my-8">
          <h1 className="text-center text-3xl">How it Works</h1>
          <p className="text-center text-xl">Our works are the best</p>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="bg-white rounded-lg p-4 shadow-xl">
            <img className="shadow-lg" src={works1} alt={works1} />
            <p className="py-2 font-bold">Select your portfolio</p>
            <p className="text-sm">
              Choose a treasury portfoliotailored to your finances, iquidity
              horizon, goals and risk profiles
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-xl">
            <img className="shadow-lg" src={works2} alt={works2} />
            <p className="py-2 font-bold">Select your portfolio</p>
            <p className="text-sm">
              Choose a treasury portfoliotailored to your finances, iquidity
              horizon, goals and risk profiles
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-xl">
            <img className="shadow-lg" src={works3} alt={works3} />
            <p className="py-2 font-bold">Select your portfolio</p>
            <p className="text-sm">
              Choose a treasury portfoliotailored to your finances, iquidity
              horizon, goals and risk profiles
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="py-2 text-4xl pt-20">
            Want to know how much
            <br />
            you can earn with us?
          </p>
          <p className="text-md">
            Enter your business metrices, and we'll send you an
            <br />
            estimate of your potential earnings with Vesto.*
          </p>
        </div>
        <div className="flex justify-center items-center my-16">
      <div className="w-[40rem] p-8 bg-[#0B3721] rounded-lg shadow-2xl text-white">
        {/* Your content here */}
        <h1 className="text-xl text-left">Company cash balance</h1>
        <p className="mt-4 text-2xl text-left">$0.00</p>
        <div className="w-full border-t border-gray-300 pt-12 opacity-30"></div>
        <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Tell me the number of years"
          className="p-2 w-2/3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 bg-opacity-20"
        />
        <button
          className="p-2 w-1/3 bg-blue-500 text-white rounded-md   hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calculate my estimate
        </button>
      </div>
      </div>
    </div>
      </div>
    </div>
  );
}
