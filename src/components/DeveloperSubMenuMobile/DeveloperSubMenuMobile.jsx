import { FaBookOpen, FaBox, FaCheck, FaCode } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowForward,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { Link } from "react-router-dom";
import MenuWithIcon from "../MenuWithIcon/MenuWithIcon";
import MenuButtonMobile from "../MenuButtonMobile/MenuButtonMobile";

const DeveloperSubMenuMobile = ({ activeProductMobile, handleClick }) => {
  return (
    <div>
      <div>
        <MenuButtonMobile
          label="Developers"
          isActive={activeProductMobile === "developers"}
          handleClick={() => handleClick("developers")}
        ></MenuButtonMobile>
      </div>
      {activeProductMobile === "developers" && (
        <div className=" w-[100%] top-0 right-0  rounded-lg p-4 bg-white absolute">
          <div>
            <button
              className="flex items-center gap-2 text-indigo-500"
              onClick={() => handleClick("")}
            >
              <IoIosArrowBack /> <span>Back</span>
            </button>
          </div>
          <nav className="">
            <Link to="/" className="mt-8 text-black block group">
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
            </Link>
            <div className="text-gray-700 pt-5">
              <div className="grid grid-cols-1 gap-5 ms-5">
                <div className="space-y-2">
                  <h4 className="text-gray-500 font-semibold uppercase">
                    Get Started
                  </h4>
                  <DeveloperMenuLinks text="Prebuilt checkout" />
                  <DeveloperMenuLinks text="Libraries and SDKs" />
                  <DeveloperMenuLinks text="App integrations" />
                  <DeveloperMenuLinks text="Code samples" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-gray-500 font-semibold uppercase">
                    Guides
                  </h4>
                  <DeveloperMenuLinks text="Accept online payments" />
                  <DeveloperMenuLinks text="Manage subscriptions" />
                  <DeveloperMenuLinks text="Send payments" />
                  <DeveloperMenuLinks text="Set up in-person payments" />
                </div>
              </div>
            </div>
            {/* integration and custom solution */}
            <div className="rounded-lg mt-5">
              <div className="grid grid-cols-1">
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

          <div className="mt-20">
            <Link to="/">
              <button className="flex mx-auto items-center gap-2 text-sm ps-3 pe-2 py-1 group font-semibold rounded-full bg-indigo-600 hover:bg-black duration-300">
                <span>Sign in</span>
                <span className="block group-hover:hidden hover:duration-300">
                  <IoIosArrowForward />
                </span>
                <span className="hidden group-hover:block hover:duration-300">
                  <IoMdArrowForward />
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperSubMenuMobile;

const DeveloperMenuLinks = ({ text }) => {
  return (
    <Link to="/" className="block text-gray-500 hover:text-gray-800">
      {text}
    </Link>
  );
};
