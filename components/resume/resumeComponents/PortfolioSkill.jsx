import axios from "axios";
import React, { useEffect, useState } from "react";
import SkillBar from "./professional/SkillBar";

const PortfolioSkill = () => {
  
  const [data , setData] = useState({})
  useEffect(()=>{
    axios
    .get("http://localhost:8082/api/resume-skillbars")
    .then((res)=>setData(res.data.data[0].attributes.sk[0]))
    .catch((err)=>console.log(err))
  },[])

  return (
    <div className="lg:flex container mx-auto mt-8 p-4 lg:justify-around items-center ">
      <div>
        <h1 className="text-xl font-bold mb-4 text-red-700">Features</h1>
        <h1 className="text-white text-2xl">Design Skills</h1>
        <div className="lg:w-96">
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
            <h1 className="text-xl font-bold mb-4 text-red-700">Features</h1>
            <h1 className="text-white text-2xl">Design Skills</h1>
          </div>
          <div>
            <div className="lg:w-96">
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
