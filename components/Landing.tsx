import SearchBar from "@/conts/SearchBar";
import React from "react";

const Landing = () => {
  return (
    <section className="mx-10 my-6">
      <div className="flex p-2 h-auto w-[1024] justify-between items-center">
        <div>
          <h4 className="font-bold px-4 py-2 text-4xl">PLACEMATE</h4>
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
      <SearchBar />
    </section>
  );
};

export default Landing;
