import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/home/today");
};

export default HomePage;
