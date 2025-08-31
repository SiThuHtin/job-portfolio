"use client";
import React from "react";
import ThreeDCardDemo from "@/app/components2/projectCard";
import style from "@/app/common.module.css";

// ...existing code...
const cardData = [
  {
    title: "Burma Medical Association",
    desc: "I made this with Wordpress and custom css",
    image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/bma_dvypky.png",
    func: function () {
      window.open("https://www.bmahq.org/", "_blank");
    }
  },
  {
    title: "Fours Rivers ACTS Foundation",
    desc: "I made this with Wordpress and custom css",
    image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/4rivers_eb2cxh.png",
    func: function () {
      window.open("https://www.4rivers-acts.org/", "_blank");
    }
  },
  {
    title: "Health Information System Working Group",
    desc: "I made this with Wordpress and custom css",
    image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/hiswg_fu9cc8.png",
    func: function () {
      window.open("https://www.hiswg.org/", "_blank");
    }
  }
];
// ...existing code...
const myProjects = () => {
  return (
    <div className={style.gridContainer}>
 
      {
        cardData.map((data)=>{
          return(
            <div onClick={data.func}>
               <ThreeDCardDemo title={data.title} desc={data.desc} image={data.image}/>
            </div>
           
          )
        })
      }
    </div>
  );
};

export default myProjects;
