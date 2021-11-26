import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  {
    label: "The color of red",
    value: "red",
  },
  {
    label: "The color of green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropDown] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowDropDown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>

      {showDropdown ? (
        <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
      ) : null}
    </div>
  );
};
