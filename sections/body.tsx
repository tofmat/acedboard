import TextHeading from "@/components/textHeading";
import Image from "next/image";
import React from "react";
import Image1 from "@/assets/images/image1.png";
import Image2 from "@/assets/images/image2.png";
import Image3 from "@/assets/images/image3.png";
import Image4 from "@/assets/images/image4.png";
import Image5 from "@/assets/images/image5.png";
const Body = () => {
  return (
    <div className="flex flex-col gap-8 [&_p]:text-[#74757A] [&_p]:text-lg">
      <div id="section1">
        <TextHeading text={"What is a Project ?"} />
        <p>
          In Acedboard, a project is the second level in the organizational
          unit. A project is a group of tasks and or people working together for
          a specific goal, outcome within a set time. Each person has their own
          role or collaborates on shared tasks to achieve success. Projects can
          be of any size or complexity, from building a small tree-house to
          large-scale construction initiatives spanning years. Once you have
          created your first workspace you can find projects in the left side of
          your screen, click the three dots beside the project icon to view more
          options.
        </p>
        <Image src={Image1} alt="image" className="mt-5" />
      </div>

      <div id="section2">
        <TextHeading text={"Creating a New Project"} />
        <p>
          Once you have selected the three dots, select the new project option
          to get started.
        </p>
        <Image src={Image1} alt="image" className="mt-5" />
      </div>

      <div id="section3">
        <TextHeading text={"Naming your projects and Select View Modes"} />
        <p>
          After choosing the 'New Project' option, proceed to define the project
          name. Optionally, you can provide additional details by inputting a
          description for more context.
        </p>
        <Image src={Image2} alt="image" className="my-5" />
        <p>
          On inputting the project name and description, you can go on to select
          your desired view from the array of view modes available to see
          different details of your project. You need to select at least one
          view to proceed.
          <br /> <br />
          After creating a project, you have the flexibility to build a
          well-organized structure by adding tasks, folders, groups, subgroups,
          to-do lists, and other smaller units to enhance the overall
          organization and structure of your project.
        </p>
        <Image src={Image2} alt="image" className="mt-5" />
      </div>

      <div id="section4">
        <TextHeading text={"Simple project Operations"} />
        <p>
          You have the flexibility to execute basic actions such as renaming
          your project, copying the project link for easy sharing with team
          members or relevant parties who may not be directly involved in the
          project.
        </p>
        <Image src={Image2} alt="image" className="mt-5" />
      </div>

      <div id="section5">
        <TextHeading text={"Adding members to a project"} />
        <p>
          To add members to your projects, click on the three dots next to the
          project name and select 'Add People.' Choose individuals from the list
          within your workspace to include them in the project.
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {" "}
          <Image src={Image3} alt="image" />
          <Image src={Image3} alt="image" />
        </div>
      </div>

      <div id="section6">
        <TextHeading text={"Archiving a project."} />
        <p>
          After successfully finishing your project, you have the option to
          archive closed projects for record-keeping or store them securely in
          the cloud for future reference. This helps in organizing your
          workspace by prioritizing projects that require immediate attention
          while keeping a neat and accessible record of completed endeavors.
          <br />
          <br />
          To archive a project, select the 3 dots beside the project name and
          then select the archive icon.
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {" "}
          <Image src={Image3} alt="image" />
          <Image src={Image3} alt="image" />
        </div>
      </div>

      <div id="section7">
        <TextHeading text={"Viewing Archived Projects"} />
        <p>
          To access archived projects, simply go to the left sidebar where your
          projects are listed. Click on the three dots, and then choose 'Show
          Archived' to view all archived projects. You can repeat this process
          to toggle between showing and hiding archived projects.
        </p>
        <div className="grid grid-cols-3 gap-4 my-5">
          <Image src={Image3} alt="image" />
          <Image src={Image3} alt="image" />
          <Image src={Image3} alt="image" />
        </div>
        <p>
          For your projects, you can also view <br /> Tasks: This shows further
          subdivision of each aspect of the project broken down into smaller
          segments.
        </p>
        <Image src={Image5} alt="image" className="my-5" />
        <p>
          Files: This view consolidates all files related to your current
          project, contributed by various users, providing a centralized
          location for easy access to all project-related files.
        </p>
        <Image src={Image5} alt="image" className="my-5" />
        <p>
          Dashboard: The Dashboard provides a visual representation of your task
          statistics, offering insights based on various parameters such as
          statuses, priorities, tags, and assignees..
        </p>
        <Image src={Image5} alt="image" className="my-5" />
        <p>
          Automation : In Acedboard, Automations are predefined instructions or
          actions designed to execute automatically when specific conditions are
          met, streamlining your workflow and enhancing efficiency. You can
          easily manage all your automations within your projects or create new
          ones to tailor your processes.
        </p>
        <Image src={Image5} alt="image" className="my-5" />{" "}
        <p>
          Notifications: You can view all your notifications and how other users
          interact with you in this portion of your project.
        </p>
        <Image src={Image5} alt="image" className="my-5" />
        <p>
          Applications & Widgets: Explore various applications and additional
          widgets here, with the current inclusion being the timesheet tool.
          Expect the addition of more applications over time.
        </p>
        <Image src={Image5} alt="image" className="my-5" />
        <p>
          Task Timer: This feature allows you to be able to allocate time spent
          on task in your project.
        </p>
        <Image src={Image5} alt="image" className="my-5" />
      </div>

      <div id="section8">
        <TextHeading text={"Leaving & Deleting a Project"} />
        <p>
          Leaving a project: After fulfilling your role in a project, you have
          the option to leave. Keep in mind that once you leave, access to
          project files and the ability to make changes will no longer be
          available, unless you are re-added by an Admin or the project owner.
        </p>
        <Image src={Image1} alt="image" className="mt-5" />
      </div>

      <div id="section9">
        <TextHeading text={"Deleting a Project"} />
        <p>
          After successfully completing a project or determining its lack of
          viability, you have the option to delete it, relocating it to the
          trash bin. Exercise caution, as once a project is permanently deleted
          from the trash bin, restoration is not possible.
        </p>
        <Image src={Image1} alt="image" className="mt-5" />
      </div>
    </div>
  );
};

export default Body;
