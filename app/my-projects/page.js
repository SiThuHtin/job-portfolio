"use client";
import React from "react";
import ThreeDCardDemo from "@/app/components2/projectCard";
import style from "@/app/common.module.css";

// ...existing code...
const cardData = [
  {
    title: "Burma Medical Association",
    desc: "I made this with Wordpress and custom css",
    image:
      "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/bma_dvypky.png",
    func: function () {
      window.open("https://www.bmahq.org/", "_blank");
    },
  },
  {
    title: "Fours Rivers ACTS Foundation",
    desc: "I made this with Wordpress and custom css",
    image:
      "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/4rivers_eb2cxh.png",
    func: function () {
      window.open("https://www.4rivers-acts.org/", "_blank");
    },
  },
  {
    title: "Health Information System Working Group",
    desc: "I made this with Wordpress and custom css",
    image:
      "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/hiswg_fu9cc8.png",
    func: function () {
      window.open("https://www.hiswg.org/", "_blank");
    },
  },
    {
    title: "Shun & Ye Wedding",
    desc: "I made this with Next.js",
    image:
      "https://res.cloudinary.com/dznkec5x0/image/upload/v1768719152/Screenshot_from_2026-01-18_13-52-02_movgha.png",
    func: function () {
      window.open("https://wedding-invitation-ys.vercel.app/", "_blank");
    },
  }
];
// ...existing code...
// ...existing code...
const myProjects = () => {
  return (
    <div className="pt-20"> {/* Add this class for top padding */}
      {/* About Me Section as Card */}
      <div className="flex justify-center my-8">
        <div className="w-full mx-4 md:mx-16 bg-black/60 backdrop-blur-lg border-4 border-white/20 rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold mb-3 text-white text-center">
            About Me
          </h1>
          <p className="text-lg text-gray-200 text-center md:text-left tracking-wide leading-relaxed">
            I am an IT System Admin and Website Developer with over 3 years of
            experience in managing and maintaining IT infrastructure, ensuring
            seamless operations and optimal performance. I have a strong
            background in web development, specializing in creating responsive
            and user-friendly websites.
          </p>
        </div>
      </div>
      {/* Beautiful Divider */}
            <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="mx-6 text-gray-400 uppercase tracking-widest text-sm font-semibold select-none">
          My Web Developing Projects
        </span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="mx-6 text-gray-400 uppercase tracking-widest text-sm font-semibold select-none">
          My Web Developing Projects
        </span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      {/* Projects Section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
          {cardData.map((data) => (
            <div onClick={data.func} key={data.title}>
              <ThreeDCardDemo
                title={data.title}
                desc={data.desc}
                image={data.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// ...existing code...

export default myProjects;
