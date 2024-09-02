import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const sections = [
  {
    title: "Projects",
    sections: [
      { title: "What is a Project ?", href: "#section1" },
      { title: "Creating a New Project", href: "#section2" },
      {
        title: "Naming your projects and Select View Modes",
        href: "#section3",
      },
      { title: "Simple project Operations", href: "#section4" },
      { title: "Adding members to a project", href: "#section5" },
      { title: "Archiving a Product", href: "#section6" },
      { title: "Viewing archived Products", href: "#section7" },
      { title: "Leaving & Deleting a Project", href: "#section8" },
      { title: "Deleting a Project", href: "#section9" },
    ],
  },
  { title: "Workspace", sections: [] },
  { title: "Task priority?", sections: [] },
  { title: "Files", sections: [] },
];

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-full bg-white rounded-[11px] shadow-lg p-4">
      <h2 className="text-lg md:text-xl font-medium mb-4 text-[#0E0E0E]">
        Articles in this section
      </h2>
      <div className="flex flex-col gap-4">
        {sections.map((item, index) => (
          <div key={index}>
            <button
              className={`w-full flex justify-between items-center bg-white py-2 px-4 rounded-lg shadow text-lg`}
              onClick={() => toggleAccordion(index)}
            >
              <p className="font-medium bg-clip-text text-transparent bg-text-gradient">
                {item.title}
              </p>

              <span>
                {activeIndex === index ? (
                  <ChevronUpIcon className="size-4" />
                ) : (
                  <ChevronDownIcon className="size-4" />
                )}
              </span>
            </button>

            {/* Content */}
            {activeIndex === index && (
              <div className="p-3">
                <ul className="text-[#141414] flex flex-col gap-4 text-base">
                  {item.sections.map((el, idx) => (
                    <li key={idx} className="flex gap-2 ">
                      <span>•</span>{" "}
                      <span>
                        <a href={el.href}>{el.title}</a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
