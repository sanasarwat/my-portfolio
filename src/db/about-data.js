import React from "react";
import api from "../assets/icons/api.svg";
import computer from "../assets/icons/computer.svg";
import algo from "../assets/icons/algo.svg";
import puzzle from "../assets/icons/puzzle.svg";
import repair from "../assets/icons/repair.svg";
import ux from "../assets/icons/ux.svg";

export const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about: [
      "I can build a beautiful and scalable SPA using",
      <strong key={1}> HTML, CSS</strong>,
      " and ",
      <strong key={1}>React.js</strong>,
    ],
  },
  {
    icon: repair,
    title: "Backend  Development",
    about: [
      "handle database, server, Api using",
      <strong key={1}> NodeJs </strong>,
      " and ",
      <strong> MongoDB </strong>,
    ],
  },
  {
    icon: api,
    title: "API Development",
    about: [
      "I can develop robust REST API/Restful API using",
      <strong key={1}> Node,Express-rest-api </strong>,
    ],
  },
  {
    icon: algo,
    title: "Competitive Coder",
    about: "a daily problem solver in HackerRank and Leetcode",
  },
  {
    icon: ux,
    title: "UI/UX designer",
    about: [
      "minimalistic user interface designer using",
      <strong> Figma </strong>,
      " and ",
      <strong> PSD </strong>,
    ],
  },

  {
    icon: puzzle,
    title: "Graphics Designer",
    about: [
      "Digital art and character design in free time using",
      <strong> Adobe Photoshop </strong>,
      " and ",
      <strong> Illustrator </strong>,
    ],
  },
];
