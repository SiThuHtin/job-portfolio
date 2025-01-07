"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/component/ui/3d-card";
import style from '@/app/common.module.css'
const ThreeDCardDemo = ({title,desc}) => {
  const redirectTobma = () => {
    window.location.href = "https://www.bmahq.org";
  };
  return (
    <div className={style.card}>
      <CardContainer className="inter-var">
        <CardBody className="rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {desc}
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={50}
              className="px-5 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold "
            >
              See More
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};
export default ThreeDCardDemo;
