"use client";
import React from "react";
import ThreeDCardDemo from "@/app/components2/projectCard";
import style from "@/app/common.module.css";

const cardData =[
  {title :"Burma Medical Association",
    desc:"I made this with Wordpress and custom css",
    func: function (){
      alert("Hello BMA")
    }
  },
  {title :"Fours Rivers ACTS Foundation",
    desc:"I made this with Wordpress and custom css",
    func: function (){
      alert("Hello 4rivers")
    }
  },
  {title :"Health Information System Working Group",
    desc:"I made this with Wordpress and custom css",
    func: function (){
      alert("Hello HISWG")
    }
  }
]
const myProjects = () => {
  return (
    <div className={style.gridContainer}>
      {/* <div onClick={() => alert("Hello")}>
      <ThreeDCardDemo title={cardData[0].title} />
      </div>
      
      <div onClick={() => alert("Hello2")}>
      <ThreeDCardDemo title={cardData[1].title} />
      </div>
      <div onClick={() => alert("Hello3")}>
      <ThreeDCardDemo title={cardData[2].title} />
      </div> */}
      {
        cardData.map((data)=>{
          return(
            <div onClick={data.func}>
               <ThreeDCardDemo title={data.title} desc={data.desc}/>
            </div>
           
          )
        })
      }
    </div>
  );
};

export default myProjects;
