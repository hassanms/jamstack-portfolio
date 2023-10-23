"use client";
import React, { useState, useEffect } from "react";

const WordChangeAnimation = () => {
  const words = ["Professional coder", "Designer", "Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto mt-3">
      <div className="text-2xl lg:text-5xl font-bold md:text-3xl text-white">
        {words[currentWordIndex]}
      </div>
    </div>
  );
};

export default WordChangeAnimation;
