import NormalBox from "@/smallComps/NormalBox";
import React from "react";
import { FaAmazon } from "react-icons/fa";
import CompanyCard from "@/conts/CompanyCard";
import DashCompanyCard from "@/conts/DashCompanyCard";
import { SiIntel } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const DashBoard = () => {
  return (
    <section className="my-4">
      <div>
        <h1 className="text-4xl font-bold ml-10 p-4">Dashboard</h1>
      </div>
      <div className="p-2 flex justify-around w-[1500px]">
        <NormalBox
          variant="flex border-gray-400 border-2 w-1/4 justify-center text-xl rounded-xl font-semibold p-1 hover:bg-blue-100 transition cursor-pointer"
          text="My Saved Companies"
        />
        <NormalBox
          variant="flex border-gray-400 border-2 w-1/4 justify-center text-xl rounded-xl font-semibold p-1 hover:bg-blue-100 transition cursor-pointer"
          text="My Submissions"
        />
        <NormalBox
          variant="flex border-gray-400 border-2 w-1/4 justify-center text-xl rounded-xl font-semibold p-1 hover:bg-blue-100 transition cursor-pointer"
          text="Placement Tracker"
        />
      </div>
      <div className="flex w-1/4 mx-16 my-2 mt-4 text-xl font-semibold p-2">
        <h3>My Saved Companies</h3>
      </div>
      <DashCompanyCard
        companyName="Intel"
        icon={SiIntel}
        jobRole="Software Engineer"
        Date="Date Saved. Apr 20, 2024"
      />
      <DashCompanyCard
        companyName="Amazon"
        icon={FaAmazon}
        jobRole="Software Development Engineer"
        Date="Date Saved. Apr 15, 2024"
      />
      <DashCompanyCard
        companyName="Apple"
        icon={FaApple}
        jobRole="Analyst"
        Date="Date Saved. Apr 10, 2024"
      />
    </section>
  );
};

export default DashBoard;
