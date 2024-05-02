import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import csharpImg from "@/public/csharp-winform-button-click-code.png";
import capstoneImg from "@/public/Screen Shot 2024-01-02 at 2.27.33 PM.png";
import websiteImg from "@/public/weatherapp.png";
//import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  { 
    title: "Graduated UWB",
    location: "Bothell, WA",
    description:
      "Graduated from the University of Washington Bothell with a BS in Computer Science and Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Operations Engineer",
    location: "Bellevue, WA",
    description:
      "I worked as a operations engineer for Affirma Consulting for 10 months. Did some web dev and worked on internal tools. Also worked on business intelligence tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Weather App",
    description:
      "Web App built using Next.js, Tailwind CSS and TypeScript. Used OpenWeatherMap APIs to gather weather data and display current and future forcast. ",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: websiteImg,
    projectURL: "https://oscar-weather-app.vercel.app/",
  },
  {
    title: "Invoice Generator",
    description:
    "Internal tool used by accounting to create invoices. Created a GUI for users and used a SQL Server database to retrieve invoice data using stored procedures.",
    tags: ["Visual Studio", "C#", ".NET Framework", "SQL", "MSSQL"],
    imageUrl: csharpImg,
    projectURL: "",
  },
  {
    title: "Capstone",
    description:
      "Faculty research project done collaboratively with a graduate student where we developed a web service for cataloging machine learning inference results.",
    tags: ["Python", "Flask", "MySQL", "AWS (S3)"],
    imageUrl: capstoneImg,
    projectURL: "https://uwb-stem.github.io/winter-2021/computer-software-systems/abstracts/oscar-morales.html",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Git",
  "Tailwind",
  "C#",
  "ASP.NET",
  ".NET FRAMEWORK",
  "SQL",
  "Azure DevOps",
  "AWS",
  "Python",
  "Framer Motion",
] as const;