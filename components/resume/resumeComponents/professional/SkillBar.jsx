import React from "react";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <div className="text-sm">{skill}</div>
        <div className="text-sm">{percentage}%</div>
      </div>
      <div className="relative mt-2 h-2 bg-black rounded">
        <div
          className="absolute increase top-0 left-0 h-2 bg-red-700 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
