import NormalBox from "@/smallComps/NormalBox";
import React from "react";
import { FaAmazon, FaGoogle } from "react-icons/fa";
import CompanyCard from "@/conts/CompanyCard";
import DashCompanyCard from "@/conts/DashCompanyCard";
import { SiIntel } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const DashBoard = () => {
  return (
    <section className="my-4">
      <div>
        <h1 className="text-4xl font-bold ml-10 p-4">Dashboard</h1>
      </div>
      <div className="p-2 flex justify-around w-[1500px]">
        <NormalBox
          variant="flex border-gray-400 border-2 w-1/4 justify-center text-xl rounded-xl font-semibold p-1 hover:bg-blue-100 transition cursor-pointer hover:scale-95 transition-all"
          text="My Saved Companies"
        />
        <NormalBox
          variant="flex border-gray-400 border-2 w-1/4 justify-center text-xl rounded-xl font-semibold p-1 hover:bg-blue-100 transition cursor-pointer hover:scale-95 transition-all"
          text="My Submissions"
        />
        <NormalBox
          variant="flex border-gray-400 border-2 w-1/4 justify-center text-xl rounded-xl font-semibold p-1 hover:bg-blue-100 transition cursor-pointer hover:scale-95 transition-all"
          text="Placement Tracker"
        />
      </div>
      <div className="flex w-1/4 mx-16 my-2 mt-4 text-xl font-semibold p-2">
        <h3>My Saved Companies</h3>
      </div>
      <div className="flex flex-col relative">
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
        <div className="absolute top-[-50px] right-[450px] flex justify-start">
          <div className="flex text-xl font-semibold w-[300px] justify-start">
            <h1>Placement Tracker</h1>
          </div>
        </div>
        <div className="absolute top-[0px] right-[150px] border-2 border-gray-400 w-[600px] px-4 py-4 rounded-xl">
          <h3 className="text-lg">Applied</h3>
        </div>
        <div className="absolute top-[120px] right-[-450px] flex w-[1200px] flex-col border-2 border-yellow-400">
          <div className="text-xl font-semibold">
            <h3>My Submissions</h3>
          </div>
          <div>
            <DashCompanyCard
              companyName="Google"
              icon={FaGoogle}
              jobRole="Data Scientist"
              Date="Date Submitted Mar 5, 2024"
            />
            <DashCompanyCard
              companyName="Apple"
              icon={FaApple}
              jobRole="System Engineer"
              Date="Date Submitted Feb 12, 2024"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
