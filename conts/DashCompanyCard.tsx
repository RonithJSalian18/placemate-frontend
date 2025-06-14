import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

type DashCompanyCardProps = {
  companyName?: string;
  icon?: IconType;
  description?: string;
  img?: string;
  jobRole?: string;
  Date?: string;
};

const DashCompanyCard = ({
  companyName,
  icon: Icon,
  description,
  img,
  jobRole,
  Date,
}: DashCompanyCardProps) => {
  return (
    <section className="w-1/2">
      <div className="border-2 border-gray-400 w-1/2 mx-16 p-4 my-2 rounded-xl flex items-center gap-5 hover:scale-95 transition-all">
        <div className="text-6xl">{Icon && <Icon className="" />}</div>
        <div className="flex flex-col p-2">
          <h4 className="text-2xl font-semibold">{companyName}</h4>
          <p>{jobRole}</p>
          <p>{Date}</p>
        </div>
      </div>
    </section>
  );
};

export default DashCompanyCard;
