"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/component/ui/3d-card";
import style from '@/app/common.module.css'
const getOptimizedImageUrl = (url) => {
  if (!url) return '';
  const driveRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(driveRegex);
  if (match && match[1]) {
    return `https://drive.google.com/uc?id=${match[1]}`;
  }
  return url;
};

const ThreeDCardDemo = ({ title, desc, image }) => {
  const transformedImage = getOptimizedImageUrl(image);
  return (
    <div className={style.card}>
      <CardContainer className="inter-var">
        <CardBody className="rounded-xl p-4 md:p-6 border">
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
              src={transformedImage}
              height={1000}
              width={1000}
              className="w-full h-48 md:h-60 object-contain bg-white/5 rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mt-8 md:mt-20">
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
