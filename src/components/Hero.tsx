import { Search, ArrowRight } from "lucide-react";
import blur from "../assets/blur.svg";


export default function Hero() {

  return (
    <>
      <div className="bg-[#0d0e11] w-screen flex flex-col pt-36 items-center px-4 text-white min-h-screen">
        <div className="w-full mb-8 relative">
          {/* Header content */}
          <div className="flex items-center justify-center">
            <div className="border border-gray-600 rounded-full p-2 px-4 mb-4">
              <p className="flex items-center">
                The best job seekers
                <span className="text-purple-700 flex items-center ml-2">
                  | Explore <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </p>
            </div>
          </div>

          <h1 className="text-4xl text-pretty font-sans font-medium mb-2 text-center">
            We know the way to <br /> success.
          </h1>

          <p className="text-4xl font-sans font-medium text-[#848484] mb-4 text-center">
            Find and become a professional.
          </p>
          <p className="text-[18px] font-sans font-medium mb-6 text-center">
            A successful business needs a qualified team of people.
          </p>

          {/* SVG background */}
          <div className="absolute top-[300px] left-0 w-full">
            <img src={blur} alt="Background" className="w-full" />
          </div>

          {/* Search input */}
          <div className="relative mt-7 z-10">
            <input
              type="text"
              placeholder="Job title"
              className="w-full bg-[#1c1929] text-white rounded-full py-4 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-800 rounded-full px-6 py-2 flex items-center font-medium">
              Find Jobs
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

