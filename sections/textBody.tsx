import React from "react";
import TextHeading from "../components/textHeading";

const TextBody = () => {
  return (
    <main className="">
      <TextHeading text={"What is a Project ?"} />
      <p className="font-medium text-[#74757A]">
        In Acedboard, a project is the second level in the organizational unit.
        A project is a group of tasks and or people working together for a
        specific goal, outcome within a set time. Each person has their own role
        or collaborates on shared tasks to achieve success. Projects can be of
        any size or complexity, from building a small tree-house to large-scale
        construction initiatives spanning years. Once you have created your
        first workspace you can find projects in the left side of your screen,
        click the three dots beside the project icon to view more options.
      </p>
    </main>
  );
};

export default TextBody;
