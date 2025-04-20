import Forum from "@/smallComps/Forum";
import SmallBox from "@/smallComps/SmallBox";
import React from "react";

const CommunityForum = () => {
  return (
    <section className="mx-8 my-4">
      <div className="text-3xl font-bold p-2">
        <h1>Community Forum</h1>
      </div>
      <div className="p-2 flex w-[350px] gap-2 ">
        <SmallBox companyName="All" textSize="text-lg font-semibold" />
        <SmallBox companyName="Amazon" textSize="text-lg font-semibold" />
        <SmallBox companyName="Google" textSize="text-lg font-semibold" />
      </div>
      <Forum
        companyName1="Amazon"
        companyName2="Interview"
        info="Tips for Amazon SDE interview"
        answer="2"
        upvote="10"
      />
      <Forum
        companyName1="Google"
        companyName2="Technical"
        info="Technical questions for Google"
        answer="5"
        upvote="25"
      />
      <Forum
        companyName1="TCS"
        companyName2="Work Culture"
        info="Work Culture at TCS"
        answer="3"
        upvote="8"
      />
      <Forum
        companyName1="Placements"
        companyName2="Advice"
        info="Advice on campus placement"
        answer="6"
        upvote="15"
      />
    </section>
  );
};

export default CommunityForum;
