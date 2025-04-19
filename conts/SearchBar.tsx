import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-1/4 mx-auto flex items-center border-2 border-gray-300 bg-white px-4 py-2 rounded-3xl">
      <Search className="h-5 w-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search for companies"
        className="ml-3 w-full border-none bg-transparent focus:outline-none focus:ring-0 text-sm text-gray-700 placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchBar;
