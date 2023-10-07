import { InboxIcon } from "@/misc/icons";
const navItems = [
  { name: "Inbox", icon: <InboxIcon /> },
  { name: "Today", icon: <InboxIcon /> },
  { name: "Upcoming", icon: <InboxIcon /> },
  { name: "Filters & Labels", icon: <InboxIcon /> },
];

const NavBar = () => {
  return (
    <nav className="flex flex-col min-w-[300px] bg-gray-50 p-5 space-y-2">
      {navItems.map((d) => (
        <button className="flex gap-5 hover:bg-gray-500/10" key={d.name}>
          <span>{d.icon}</span>
          <p>{d.name}</p>
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
