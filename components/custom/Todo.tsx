"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import useAudio from "@/hooks/useAudio";
import "./Todo.css";

type Props = {
  isCompleted: boolean;
  text: string;
  id: string;
};

function Todo(props: Props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const [playing, toggle] = useAudio("/assets/check.mp3");

  const toggleCheckBox = () => {
    setIsCompleted((prevState) => {
      if (prevState === true) {
        return false;
      }
      toggle();
      return true;
    });
  };

  return (
    <span className="flex items-center cursor-pointer" onClick={toggleCheckBox}>
      <Checkbox id={props.id} checked={isCompleted} />
      <label
        htmlFor={props.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2 cursor-pointer relative"
        onClick={toggleCheckBox}
      >
        <div
          className="line"
          style={{
            animation: !isCompleted
              ? "none"
              : "lineStrike 400ms ease-out forwards",
            animationTimingFunction: "cubic-bezier(.1,1.87,1,-0.47)",
          }}
        />
        {props.text}
      </label>
    </span>
  );
}

export default Todo;
