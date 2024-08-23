import React from "react";
import ThreeDCardDemo from "@/app/components2/projectCard";
import style from "@/app/common.module.css";

const myProjects = () => {
  return (
    <div className={style.projectdiv}>
      <ThreeDCardDemo />;
    </div>
  );
};

export default myProjects;
