import ProfileIcon from "@/conts/ProfileIcon";
import SearchBar from "@/conts/SearchBar";
import React from "react";

const NavBar = () => {
  return (
    <section className="flex m-8 p-4 items-center">
      <div className="flex  w-full items-center">
        <h1 className="text-4xl font-bold hover:scale-95 transition-all">
          PLACEMATE
        </h1>
      </div>
      <div className="flex w-full items-center justify-end gap-5">
        <SearchBar
          div_variant="bg-white w-[300px] rounded-2xl h-10 p-2 flex items-center border-2 border-gray-300"
          input_variant="bg-transparent h-4 text-lg w-full ml-5 border-none focus: outline-none"
          placeholder="Search..."
        />
        <ProfileIcon
          viewBox="0 0 24 24"
          height="50px"
          width="50px"
          className="hover:scale-95 transition-all"
        />
      </div>
    </section>
  );
};

export default NavBar;
