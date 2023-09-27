"use client";
import {
  RiMenuLine,
  AiOutlineHome,
  AiOutlineSearch,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
} from "@/misc/icons";
import { ReactNode, SetStateAction } from "react";
import Avatar from "react-avatar";

import { Tooltip } from "react-tooltip";

const SearchButton = () => {
  return (
    <button className="flex items-center h-full bg-white/20 gap-2 px-2 py-2 pr-20 rounded hover:bg-white hover:text-gray-400 hover:[&>*]:placeholder:text-gray-400 transition-colors duration-300 active:scale-95">
      <AiOutlineSearch className="h-full" />
      <p className="duration-300">Search</p>
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
  return (
    <header className="flex justify-between items-center py-1 px-8 bg-red-700 text-white">
      <div className="flex items-center gap-4">
        <Button
          icon={<RiMenuLine />}
          onClick={() => setNavVisible((prev) => !prev)}
        />
        <Button icon={<AiOutlineHome />} />
        <SearchButton />
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center py-1 px-4 bg-white/20 rounded hover:bg-black/20 transition-colors duration-300">
          <AiFillStar className="text-yellow-200" />
          <p>Upgrade to pro</p>
        </button>
        <Button icon={<AiOutlinePlus />} />
        <Button
          icon={
            <div className="flex gap-2">
              <AiOutlineCheckCircle className="text-2xl" />
              <p className="text-sm">5/7</p>
            </div>
          }
        />
        <Button icon={<AiOutlineInfoCircle />} />

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
