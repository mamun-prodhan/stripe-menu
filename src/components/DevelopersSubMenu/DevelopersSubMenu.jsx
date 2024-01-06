import { FaBookOpen, FaBox, FaCheck, FaCode } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const DevelopersSubMenu = () => {
  return (
    <div className="absolute top-14 -left-64 opacity-0 invisible group-hover/developers:visible group-hover/developers:opacity-100 duration-300 ease-in-out group-hover/developers:transform z-50 min-w-[700px] h-[900px]">
      <div className="relative bg-[#EFF3F9] rounded-xl shadow-xl w-full">
        {/* hovered menu pointer */}
        <div className="absolute w-10 h-10 bg-white transform rotate-45 top-0 z-[-1] translate-x-0 transition-transform group-hover/developers:translate-x-[285px] duration-500 ease-in-out rounded-sm"></div>
        <nav className="">
          <Link to="/" className="p-8 text-black block group">
            <div className="flex items-center gap-2  mt-2">
              <span className="text-gray-400 group-hover:text-gray-800 duration-150">
                <FaBookOpen></FaBookOpen>
              </span>
              <p className="text-gray-800 font-semibold">
                Documentation
                <span>
                  <IoMdArrowRoundForward className="hidden group-hover:inline ms-2" />
                </span>
              </p>
            </div>
            <p className="text-gray-500 group-hover:text-gray-800 ms-6">
              Start integrating Stripes product and tools
            </p>
          </Link>
          <div className="text-gray-700 px-8 pt-8">
            <div className="grid grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-gray-500 font-semibold uppercase">
                  Get Started
                </h4>
                <Link
                  to="/"
                  className="block text-gray-500 hover:text-gray-800"
                >
                  Prebuilt checkout
                </Link>
                <Link
                  to="/"
                  className="block text-gray-500 hover:text-gray-800"
                >
                  Libraries and SDKs
                </Link>
                <Link
                  to="/"
                  className="block text-gray-500 hover:text-gray-800"
                >
                  App integrations
                </Link>
                <Link
                  to="/"
                  className="block text-gray-500 hover:text-gray-800"
                >
                  Code samples
                </Link>
              </div>
              <div className="space-y-2">
                <h4 className="text-gray-500 font-semibold uppercase">
                  Guides
                </h4>
                <Link
                  to="/"
                  className="block text-gray-500 hover:text-gray-800"
                >
                  Accept online payments
                </Link>
                <Link
                  to="/"
                  className="block text-gray-500 hover:text-gray-800"
                >
                  Manage subscriptions
                </Link>
                <Link
                  to="/"
                  className="block text-gray-500 hover:text-gray-800"
                >
                  Send payments
                </Link>
                <Link
                  to="/"
                  className="block text-gray-500 hover:text-gray-800"
                >
                  Set up in-person payments
                </Link>
              </div>
            </div>
          </div>
          {/* integration and custom solution */}
          <div className=" px-8 py-8 rounded-lg mt-5 bg-[#dce2eb]">
            <div className="grid grid-cols-2">
              <MenuWithIcon
                icon={<FiMenu />}
                label={"Full API Reference"}
              ></MenuWithIcon>
              <MenuWithIcon
                icon={<FaCode />}
                label={"API Changelog"}
              ></MenuWithIcon>
              <MenuWithIcon
                icon={<FaBox />}
                label={"API Status"}
              ></MenuWithIcon>
              <MenuWithIcon
                icon={<FaCheck />}
                label={"Build on Stripe Apps"}
              ></MenuWithIcon>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DevelopersSubMenu;

// component for menu with icon
const MenuWithIcon = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-2 group my-2">
      <span className="text-gray-400 group-hover:text-gray-800 duration-150">
        {icon}
      </span>
      <p className="text-gray-800 font-semibold">{label}</p>
    </div>
  );
};
