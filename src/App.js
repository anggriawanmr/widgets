import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is Front-End Javascript Framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite libraries among engineer",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return <Search />;
};
