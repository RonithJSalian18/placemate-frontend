import React from "react";

type SmallBoxProps = {
  variant?: string;
  companyName?: string;
  textSize?: string;
};

const SmallBox = ({ variant, companyName, textSize }: SmallBoxProps) => {
  return (
    <div className="w-1/2 border-2 border-gray-400 flex justify-center rounded-xl cursor-pointer hover:scale-95 transition-all">
      <p className={textSize}>{companyName}</p>
    </div>
  );
};

export default SmallBox;
