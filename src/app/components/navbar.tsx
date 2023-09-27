import { useEffect, useRef } from "react";
const navItems = ["Inbox", "Today", "Upcoming", "Filters & Labels"];

const Navigation = ({ navVisible }: { navVisible: boolean }) => {
  useEffect(() => {
    !navVisible && console.log(navRef.current);
  }, [navVisible]);

  const navRef = useRef(null);

  return (
    <nav className="min-w-[300px] bg-red-50 p-20 space-y-2" ref={navRef}>
      {navItems.map((d) => (
        <button className="block" key={d}>
          {d}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
