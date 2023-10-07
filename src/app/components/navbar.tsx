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
      className="min-w-[300px] bg-gray-50 p-5 space-y-2"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <div className="flex flex-col">
        {navItems.map((d) => (
          <>
            <Tooltip
              id={d.tooltip.id}
              style={{ padding: "0px 5px" }}
              classNameArrow="tooltip-arrow-no-tail"
            />
            <button
              className="flex gap-2 rounded py-1 hover:bg-gray-500/10"
              key={d.name}
              data-tooltip-id={d.tooltip.id}
              data-tooltip-content={d.tooltip.content}
              data-tooltip-place="right"
              data-tooltip-delay-show={400}
            >
              <span className={d.color}>{d.icon}</span>
              <p>{d.name}</p>
            </button>
          </>
        ))}
      </div>
      <div className="flex justify-between items-center p-1 bg-gray-200 rounded">
        <button className="font-semibold">Projects</button>
        <div
          className={clsx(mouseEnter ? "animate-fadein" : "animate-fadeout")}
        >
          <button className="p-2 rounded hover:bg-gray-100">
            <AiOutlinePlus />
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
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
    </nav>
  );
};

export default NavBar;
