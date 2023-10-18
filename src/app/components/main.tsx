import { SetStateAction } from "react";
import clsx from "clsx";

const Main = ({
  setNavVisible,
  navVisible,
}: {
  navVisible: boolean;
  setNavVisible: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const handleToggleNav = () => {
    setNavVisible((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        "flex-grow bg-red-50 transition-all duration-300",
        navVisible ? "ml-[300px]" : "ml-0"
      )}
    >
      <button onClick={handleToggleNav}>hello</button>
    </div>
  );
};

export default Main;
