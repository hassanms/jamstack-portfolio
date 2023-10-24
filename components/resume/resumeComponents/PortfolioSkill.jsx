import React, { useEffect, useState } from "react";
import SkillBar from "./professional/SkillBar";
import { resume } from "@/data";

const PortfolioSkill = () => {
  return (
    <div className="lg:flex container mx-auto mt-8 p-4 lg:justify-around items-center ">
      <div>
        <h1 className="text-xl font-bold mb-4 text-[#ff014f]">Features</h1>
        <h1 className=" text-2xl lg:text-4xl font-bold">Design Skills</h1>
        <div className="lg:w-[500px] lg:mt-8">
          <SkillBar
            skill="HTML"
            percentage={resume[0]?.attributes.sk[0].html}
          />
          <SkillBar skill="CSS" percentage={resume[0]?.attributes.sk[0].css} />
          <SkillBar
            skill="JavaScript"
            percentage={resume[0]?.attributes.sk[0].javascript}
          />
          <SkillBar
            skill="React"
            percentage={resume[0]?.attributes.sk[0].react}
          />
          <SkillBar
            skill="Node"
            percentage={resume[0]?.attributes.sk[0].node}
          />
          <SkillBar
            skill="NextJs"
            percentage={resume[0]?.attributes.sk[0].nextjs}
          />
          <SkillBar
            skill="Python"
            percentage={resume[0]?.attributes.sk[0].python}
          />
          <SkillBar
            skill="Tailwind"
            percentage={resume[0]?.attributes.sk[0].tailwind}
          />
          <SkillBar
            skill="Django"
            percentage={resume[0]?.attributes.sk[0].django}
          />
        </div>
      </div>
      <div>
        <div>
          <div>
            <h1 className="text-xl font-bold mb-4 text-[#ff014f]">Features</h1>
            <h1 className=" text-2xl lg:text-4xl font-bold">Design Skills</h1>
          </div>
          <div>
            <div className="lg:w-[500px] lg:mt-8">
              <SkillBar
                skill="HTML"
                percentage={resume[0]?.attributes.sk[0].html}
              />
              <SkillBar
                skill="CSS"
                percentage={resume[0]?.attributes.sk[0].css}
              />
              <SkillBar
                skill="JavaScript"
                percentage={resume[0]?.attributes.sk[0].javascript}
              />
              <SkillBar
                skill="React"
                percentage={resume[0]?.attributes.sk[0].react}
              />
              <SkillBar
                skill="Node"
                percentage={resume[0]?.attributes.sk[0].node}
              />
              <SkillBar
                skill="NextJs"
                percentage={resume[0]?.attributes.sk[0].nextjs}
              />
              <SkillBar
                skill="Python"
                percentage={resume[0]?.attributes.sk[0].python}
              />
              <SkillBar
                skill="Tailwind"
                percentage={resume[0]?.attributes.sk[0].tailwind}
              />
              <SkillBar
                skill="Django"
                percentage={resume[0]?.attributes.sk[0].django}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkill;
