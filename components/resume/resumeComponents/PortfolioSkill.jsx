import React from "react";
import SkillBar from "./professional/SkillBar";

const PortfolioSkill = () => {
  return (
    <div className="lg:flex container mx-auto mt-8 p-4 lg:justify-around items-center ">
      <div>
      <h1 className="text-xl font-bold mb-4 text-red-700">
        Features
      </h1>
      <h1 className="text-white text-2xl">Design Skills</h1>  
      <div className="lg:w-96">
      <SkillBar skill="HTML" percentage={90} />
      <SkillBar skill="CSS" percentage={85} />
      <SkillBar skill="JavaScript" percentage={70} />
      <SkillBar skill="HTML" percentage={40} />
      <SkillBar skill="CSS" percentage={85} />
      <SkillBar skill="JavaScript" percentage={80} />
      <SkillBar skill="HTML" percentage={90} />
      <SkillBar skill="CSS" percentage={85} />
      <SkillBar skill="JavaScript" percentage={10} /> 
     </div>
     </div>

     <div>
     <div>
      <div>
      <h1 className="text-xl font-bold mb-4 text-red-700">
        Features
      </h1>
      <h1 className="text-white text-2xl">Design Skills</h1>
      </div>
      <div>
      <div className="lg:w-96">
      <SkillBar skill="HTML" percentage={10} />
      <SkillBar skill="CSS" percentage={85} />
      <SkillBar skill="JavaScript" percentage={80} />
      <SkillBar skill="HTML" percentage={90} />
      <SkillBar skill="CSS" percentage={85} />
      <SkillBar skill="JavaScript" percentage={80} />
      <SkillBar skill="HTML" percentage={90} />
      <SkillBar skill="CSS" percentage={85} />
      <SkillBar skill="JavaScript" percentage={80} />
      </div>
      </div>
    </div>
     </div>
    </div>
  );
};

export default PortfolioSkill;
