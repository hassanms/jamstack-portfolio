import React, { useEffect, useState } from "react";
import SkillBar from "./professional/SkillBar";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const PortfolioSkill = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}api/resumes`)
      .then((res) => setData(res.data.data[0].attributes.sk[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:flex container mx-auto mt-8 p-4 lg:justify-around items-center ">
      <div>
        <h1 className="text-xl font-bold mb-4 text-[#ff014f]">Features</h1>
        <h1 className=" text-2xl lg:text-4xl font-bold">Design Skills</h1>
        <div className="lg:w-[500px] lg:mt-8">
          <SkillBar skill="HTML" percentage={data?.html} />
          <SkillBar skill="CSS" percentage={data?.css} />
          <SkillBar skill="JavaScript" percentage={data?.javascript} />
          <SkillBar skill="React" percentage={data?.react} />
          <SkillBar skill="Node" percentage={data?.node} />
          <SkillBar skill="NextJs" percentage={data?.nextjs} />
          <SkillBar skill="Python" percentage={data?.python} />
          <SkillBar skill="Tailwind" percentage={data?.tailwind} />
          <SkillBar skill="Django" percentage={data?.django} />
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
              <SkillBar skill="HTML" percentage={data?.html} />
              <SkillBar skill="CSS" percentage={data?.css} />
              <SkillBar skill="JavaScript" percentage={data?.javascript} />
              <SkillBar skill="React" percentage={data?.react} />
              <SkillBar skill="Node" percentage={data?.node} />
              <SkillBar skill="NextJs" percentage={data?.nextjs} />
              <SkillBar skill="Python" percentage={data?.python} />
              <SkillBar skill="Tailwind" percentage={data?.tailwind} />
              <SkillBar skill="Django" percentage={data?.django} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkill;
