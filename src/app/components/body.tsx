import NavBar from "@/components/navbar";

const Body = () => {
  return (
    <div className={"flex h-full bg-white transition-transform duration-1000"}>
      <div className="flex w-full bg-white ">
        <NavBar />
        <div className="flex-grow bg-red-50">hello</div>
      </div>
    </div>
  );
};

export default Body;
