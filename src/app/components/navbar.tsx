"use client";
import { useState } from "react";
import clsx from "clsx";
import {
  InboxIcon,
  TodayIcon,
  AiOutlinePlus,
  BsChevronDown,
  FiltersAndLabelsIcon,
} from "@/misc/icons";
import { Tooltip } from "react-tooltip";
const navItems = [
  {
    name: "Inbox",
    icon: <InboxIcon />,
    color: "text-blue-700",
    tooltip: { id: "inbox", content: "Go to Inbox" },
  },
  {
    name: "Today",
    icon: <TodayIcon />,
    color: "text-green-700",
    tooltip: { id: "today", content: "Go to Today" },
  },
  {
    name: "Upcoming",
    icon: <InboxIcon />,
    color: "text-purple-700",
    tooltip: { id: "upcoming", content: "Go to Upcoming" },
  },
  {
    name: "Filters & Labels",
    icon: <FiltersAndLabelsIcon />,
    color: "text-orange-700",
    tooltip: { id: "filtersandlabels", content: "Go to Filters & Labels" },
  },
];

const demoProjects = [
  { title: "Welcome", tasks: 3 },
  { title: "Try Boards", tasks: 9 },
];

const Project = ({
  project,
}: {
  project: { title: string; tasks: number };
}) => {
  return (
    <button
      key={project.title}
      className="flex items-center justify-between rounded p-2 hover:bg-gray-500/10"
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
        <p>{project.title}</p>
      </div>
      <p className="text-sm text-gray-400">{project.tasks}</p>
    </button>
  );
};

const NavBar = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(true);

  const handleMouseOver = () => {
    setMouseEnter((prev) => !prev);
  };

  const handleProjectsOpen = () => {
    setProjectsOpen((prev) => !prev);
  };

  return (
    <nav
      className="min-w-[300px] bg-gray-50 pt-8 p-6 space-y-2"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <div className="flex flex-col">
        {navItems.map((navItem) => (
          <button key={navItem.name}>
            <Tooltip
              id={navItem.tooltip.id}
              style={{ padding: "0px 5px" }}
              classNameArrow="tooltip-arrow-no-tail"
            />
            <div
              className="flex gap-2 rounded py-2 hover:bg-gray-500/10"
              data-tooltip-id={navItem.tooltip.id}
              data-tooltip-content={navItem.tooltip.content}
              data-tooltip-place="right"
              data-tooltip-delay-show={400}
            >
              <span className={navItem.color}>{navItem.icon}</span>
              <p>{navItem.name}</p>
            </div>
          </button>
        ))}
      </div>
      <div>
        <div className="w-full flex justify-between items-center pl-1 py-1 bg-gray-200/50 rounded">
          <p className="font-semibold">Projects</p>
          <div
            className={clsx(mouseEnter ? "animate-fadein" : "animate-fadeout")}
          >
            <button className="p-2 rounded hover:bg-white/50">
              <AiOutlinePlus />
            </button>
            <button className="p-2 rounded hover:bg-white/50">
              <BsChevronDown
                className={clsx(
                  "transition-transform duration-300",
                  !projectsOpen && "rotate-90"
                )}
                onClick={handleProjectsOpen}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          {demoProjects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
