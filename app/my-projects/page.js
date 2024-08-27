"use client";
import React from "react";
import ThreeDCardDemo from "@/app/components2/projectCard";
import style from "@/app/common.module.css";

const myProjects = () => {
  return (
    <div className={style.gridContainer}>
      <ThreeDCardDemo onClick={() => alert("Hello")} />
      <ThreeDCardDemo />
      <ThreeDCardDemo />
    </div>
  );
};

export default myProjects;
