import React, { useEffect, useState } from "react";
import SkillBar from "./professional/SkillBar";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const PortfolioSkill = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}api/resumes`)
      .then((res) => {
        const responseData = res.data.data[0].attributes.sk[0];
        const dataArray = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ key, value: responseData[key] });
          }
        }
        setData(dataArray);
        // console.log(dataArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:flex container mx-auto mt-8 p-4 lg:justify-around items-center ">
      <div>
        <h1 className="text-xl font-bold mb-4 text-red-700">Features</h1>
        <h1 className=" text-2xl">Design Skills</h1>
        <div className="lg:w-96">
          <SkillBar skill="HTML" percentage={data[0]?.value} />
          <SkillBar skill="CSS" percentage={data[1]?.value} />
          <SkillBar skill="JavaScript" percentage={data[2]?.value} />
          <SkillBar skill="React" percentage={data[3]?.value} />
          <SkillBar skill="Node" percentage={data[4]?.value} />
          <SkillBar skill="NextJs" percentage={data[5]?.value} />
          <SkillBar skill="Python" percentage={data[6]?.value} />
          <SkillBar skill="Tailwind" percentage={data[7]?.value} />
          <SkillBar skill="Django" percentage={data[8]?.value} />
        </div>
      </div>
      <div>
        <div>
          <div>
            <h1 className="text-xl font-bold mb-4 text-red-700">Features</h1>
            <h1 className=" text-2xl">Design Skills</h1>
          </div>
          <div>
            <div className="lg:w-96">
              <SkillBar skill="HTML" percentage={data[0]?.value} />
              <SkillBar skill="CSS" percentage={data[1]?.value} />
              <SkillBar skill="JavaScript" percentage={data[2]?.value} />
              <SkillBar skill="React" percentage={data[3]?.value} />
              <SkillBar skill="Node" percentage={data[4]?.value} />
              <SkillBar skill="NextJs" percentage={data[5]?.value} />
              <SkillBar skill="Python" percentage={data[6]?.value} />
              <SkillBar skill="Tailwind" percentage={data[7]?.value} />
              <SkillBar skill="Django" percentage={data[8]?.value} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkill;
