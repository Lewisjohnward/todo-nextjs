"use client";
import { SetStateAction, useState } from "react";
import clsx from "clsx";
import {
  InboxIcon,
  TodayIcon,
  AiOutlinePlus,
  BsChevronDown,
  FiltersAndLabelsIcon,
  AiOutlineEllipsis,
} from "@/misc/icons";
import { Tooltip } from "react-tooltip";
import Link from "next/link";

const path = "/home";

const navItems = [
  {
    name: "Inbox",
    icon: <InboxIcon />,
    color: "text-blue-700",
    tooltip: { id: "inbox", content: "Go to Inbox" },
    href: `${path}/inbox`,
  },
  {
    name: "Today",
    icon: <TodayIcon />,
    color: "text-green-700",
    tooltip: { id: "today", content: "Go to Today" },
    href: `${path}/today`,
  },
  {
    name: "Upcoming",
    icon: <InboxIcon />,
    color: "text-purple-700",
    tooltip: { id: "upcoming", content: "Go to Upcoming" },
    href: `${path}/upcoming`,
  },
  {
    name: "Filters & Labels",
    icon: <FiltersAndLabelsIcon />,
    color: "text-orange-700",
    tooltip: { id: "filtersandlabels", content: "Go to Filters & Labels" },
    href: `${path}/filters-labels`,
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
  const [menuIconVisible, setMenuIconVisible] = useState(false);
  const handleMouseOver = () => {
    setMenuIconVisible((prev) => !prev);
  };
  return (
    <>
      <Tooltip
        id={project.title}
        style={{ padding: "2px 5px" }}
        classNameArrow="tooltip-arrow-no-tail"
      />

      <div
        className="flex items-center justify-between rounded cursor-pointer hover:bg-gray-500/10"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        <div
          key={project.title}
          data-tooltip-id={project.title}
          data-tooltip-content={project.title}
          data-tooltip-place="bottom"
          data-tooltip-delay-show={400}
          className="flex items-center gap-3 p-2 w-full"
        >
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <button className="text-sm">{project.title}</button>
        </div>
        <Tooltip
          id="ellipsis"
          style={{ padding: "2px 5px" }}
          classNameArrow="tooltip-arrow-no-tail"
        />
        {menuIconVisible ? (
          <AiOutlineEllipsis
            data-tooltip-id="ellipsis"
            data-tooltip-content="More project actions"
            data-tooltip-place="top"
            data-tooltip-delay-show={400}
            className="animate-fadein text-xl text-gray-400"
          />
        ) : (
          <p className="text-sm text-gray-400">{project.tasks}</p>
        )}
      </div>
    </>
  );
};

const NavBar = ({ navVisible }: { navVisible: boolean }) => {
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
      className={clsx(
        "fixed z-50 h-full bg-gray-50 space-y-2 transition-all duration-300",
        navVisible ? "left-0" : "-left-[300px]"
      )}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <div className="w-[300px] p-6">
        <div className="flex flex-col">
          {navItems.map((navItem) => (
            <>
              <Tooltip
                id={navItem.tooltip.id}
                style={{ padding: "0px 5px" }}
                classNameArrow="tooltip-arrow-no-tail"
              />
              <div
                key={navItem.name}
                className="hover:bg-gray-500/10 cursor-pointer rounded"
                data-tooltip-id={navItem.tooltip.id}
                data-tooltip-content={navItem.tooltip.content}
                data-tooltip-place="right"
                data-tooltip-delay-show={400}
              >
                <Link href={navItem.href} className="flex gap-2 py-1 px-1">
                  <span className={navItem.color}>{navItem.icon}</span>
                  <p className="text-sm">{navItem.name}</p>
                </Link>
              </div>
            </>
          ))}
        </div>
        <div>
          <div className="w-full flex justify-between items-center pl-1 py-1 rounded hover:bg-gray-200/50">
            <p className="font-semibold text-gray-500">Projects</p>
            <div
              className={clsx(
                mouseEnter ? "animate-fadein" : "animate-fadeout"
              )}
            >
              <Tooltip
                id="addIcon"
                style={{ padding: "0px 5px" }}
                classNameArrow="tooltip-arrow-no-tail"
              />
              <button
                data-tooltip-id="addIcon"
                data-tooltip-content="Add project"
                data-tooltip-place="top"
                data-tooltip-delay-show={400}
                className="p-2 rounded hover:bg-white/50"
              >
                <AiOutlinePlus />
              </button>
              <Tooltip
                id="chevron"
                style={{ padding: "0px 5px" }}
                classNameArrow="tooltip-arrow-no-tail"
              />
              <button
                data-tooltip-id="chevron"
                data-tooltip-content="Toggle list of projects"
                data-tooltip-place="top"
                data-tooltip-delay-show={400}
                className="p-2 rounded hover:bg-white/50"
              >
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
      </div>
    </nav>
  );
};

export default NavBar;
