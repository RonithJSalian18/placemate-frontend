import React from "react";
import { Button } from "@/components/ui/button";

const InfoPage = () => {
  return (
    <section className="mx-10 my-6">
      <div className="flex m-8 p-4 items-center">
        <div className="flex  w-full items-center">
          <h1 className="text-4xl font-bold hover:scale-95 transition-all">
            PLACEMATE
          </h1>
        </div>
        <div className="flex w-full items-center justify-end gap-1">
          <button className="bg-white text-lg text-black rounded-xl p-1 w-[90px] ml-4  hover:bg-blue-600 hover:text-white hover:scale-95 transition-all">
            Login
          </button>
          <button className="bg-blue-600 text-lg text-white rounded-xl p-1 w-[90px] ml-4  hover:scale-95 transition-all">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex text-4xl font-bold mx-8 mt-12">
        <h2>Microsoft</h2>
      </div>
      <div className="p-4 bg-white flex justify-between w-[800px] ml-6 mt-5">
        <p className="underline-animation">Overview</p>
        <p className="underline-animation">Interview Process</p>
        <p className="underline-animation">Roles Offered</p>
        <p className="underline-animation">Experiences</p>
      </div>
    </section>
  );
};

export default InfoPage;
