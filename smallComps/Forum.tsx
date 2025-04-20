import React from "react";
import SmallBox from "./SmallBox";

type ForumsProps = {
  variant?: string;
  info?: string;
  textSize?: string;
  companyName1?: string;
  companyName2?: string;
  answer?: string;
  upvote?: string;
};

const Forum = ({
  variant,
  info,
  textSize,
  companyName1,
  companyName2,
  answer,
  upvote,
}: ForumsProps) => {
  return (
    <div className="border-2 border-gray-400 p-2 mt-4 rounded-xl">
      <div className="text-2xl font-semibold">
        <h3>{info}</h3>
      </div>
      <div className="flex">
        <div className="flex w-[300px] gap-2 ml-2 mt-1 relative">
          <SmallBox companyName={companyName1} textSize={textSize} />
          <SmallBox companyName={companyName2} textSize={textSize} />
        </div>
        <div className="p-1 w-[200px] absolute right-0">
          <p className="text-md">
            {answer} answerd {upvote} upvotes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forum;
