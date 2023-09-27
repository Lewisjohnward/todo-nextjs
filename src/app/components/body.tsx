import Navigation from "@/components/navbar";
import clsx from "clsx";

const Body = ({ navVisible }: { navVisible: any }) => {
  return (
    <div
      className={clsx(
        "flex h-full bg-white transition-transform duration-1000",
        !navVisible && "-translate-x-[300px]"
      )}
    >
      <Navigation />
      <div className="w-full bg-white ">
        <div className="bg-red-50">hello</div>
      </div>
    </div>
  );
};

export default Body;
