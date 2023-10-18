"use client";
import {
  RiMenuLine,
  AiOutlineHome,
  AiOutlineSearch,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineQuestionCircle,
} from "@/misc/icons";
import { ReactNode, SetStateAction } from "react";
import Avatar from "react-avatar";

import { Tooltip } from "react-tooltip";

const SearchButton = () => {
  return (
    <button className="flex-grow md:flex-grow-0 flex items-center bg-white/20 gap-2 px-2 py-[2px] pr-20 rounded hover:bg-white hover:text-gray-400 hover:[&>*]:placeholder:text-gray-400 transition-colors duration-300 active:scale-95">
      <AiOutlineSearch className="hidden sm:block" />
      Search
    </button>
  );
};

const Button = ({
  icon,
  onClick,
}: {
  icon: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="p-1 text-xl rounded hover:bg-black/20 transition-colors duration-300"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

const Header = ({
  setNavVisible,
}: {
  setNavVisible: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const toggleNav = () => {
    setNavVisible((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center gap-2 py-[2px] px-8 bg-red-600/80 text-white">
      <div className="flex-grow flex items-center gap-4">
        <button onClick={toggleNav}>
          <RiMenuLine />
        </button>
        <Button icon={<AiOutlineHome />} />
        <SearchButton />
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 py-[6px] md:py-[1px] px-4 bg-white/20 rounded hover:bg-black/20 transition-colors duration-300 active:scale-95">
          <AiFillStar className="text-yellow-200" />
          <p className="hidden md:block">Upgrade to pro</p>
        </button>
        <Button icon={<AiOutlinePlus />} />
        <Button
          icon={
            <div className="flex gap-2">
              <AiOutlineCheckCircle className="text-2xl" />
              <p className="hidden md:inline-block text-sm">5/7</p>
            </div>
          }
        />
        <Button icon={<AiOutlineQuestionCircle />} />

        <Tooltip id="home" />
        <Button
          icon={
            <AiOutlineHome
              data-tooltip-id="home"
              data-tooltip-content="this is the tooltip content"
              className="text-2xl"
            />
          }
        />
        <Button
          icon={
            <Avatar
              name="lewis"
              size="20"
              round={true}
              fgColor="#f2e018"
              textMarginRatio={8}
              style={{ outline: "1px solid #f2e018" }}
            />
          }
        />
      </div>
    </header>
  );
};

export default Header;
