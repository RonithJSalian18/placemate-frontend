import React from "react";
import { Search } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

const Landing = () => {
  return (
    <section className="mx-10 my-6">
      <div className="flex p-2 h-auto w-[1024] justify-between items-center">
        <div className="flex justify-start items-center">
          <FaLocationDot className="text-4xl" />
          <h4 className="font-bold px-2 py-2 text-4xl">PLACEMATE</h4>
        </div>

        <div className="flex gap-4 px-4 py-2">
          <p className="text-2xl">Explore Companies</p>
          <p className="text-2xl">Join the community</p>
        </div>
      </div>

      <div className="flex max-w-[700px] flex-wrap h-auto mt-8 mb-4">
        <h3 className="text-6xl font-bold">
          Crack Your Dream Job with Placemate
        </h3>
        <p className="mt-5 text-2xl">
          Get insights into top companies, interview tips and real student
          experiences.
        </p>
      </div>

      <div className="bg-white w-1/2 rounded-2xl h-auto p-4 flex items-center border-2 border-gray-300">
        <Search />
        <input
          type="text"
          placeholder="Search for companies"
          className="bg-transparent h-4 text-lg w-full ml-5 border-none focus: outline-none"
        />
      </div>
    </section>
  );
};

export default Landing;
