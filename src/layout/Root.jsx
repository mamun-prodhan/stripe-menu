import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="h-[1200px] lg:h-screen bg-gradient-to-br from-indigo-500 to-pink-700 via-blue-800 antialiased bg-no-repeat text-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
