import {
  FaBook,
  FaBookOpen,
  FaBriefcase,
  FaBuilding,
  FaCalendar,
  FaEnvelope,
  FaHandsHelping,
  FaNewspaper,
  FaPenNib,
  FaTag,
  FaUser,
} from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowForward,
} from "react-icons/io";
import { Link } from "react-router-dom";
import MenuWithIcon from "../MenuWithIcon/MenuWithIcon";

const ResourcesSubMenuMobile = ({ activeProductMobile, handleClick }) => {
  return (
    <div>
      <div>
        <MenuButtonMobile
          label="Resources"
          isActive={activeProductMobile === "resources"}
          handleClick={() => handleClick("resources")}
        ></MenuButtonMobile>
      </div>
      {activeProductMobile === "resources" && (
        <div className=" w-[100%] top-0 right-0  rounded-lg p-4 bg-white absolute">
          <div>
            <button
              className="flex items-center gap-2 text-indigo-500"
              onClick={() => handleClick("")}
            >
              <IoIosArrowBack /> <span>Back</span>
            </button>
          </div>
          <nav className="mt-5">
            <div className="text-gray-700">
              <div className="grid grid-cols-1">
                <MenuWithIcon
                  icon={<FaHandsHelping />}
                  label={"Support Center"}
                ></MenuWithIcon>
                <MenuWithIcon icon={<FaPenNib />} label={"Blog"}></MenuWithIcon>
                <MenuWithIcon
                  icon={<FaTag />}
                  label={"Support Plans"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<FaCalendar />}
                  label={"Annual Conference"}
                ></MenuWithIcon>
                <MenuWithIcon icon={<FaBook />} label={"Guides"}></MenuWithIcon>
                <MenuWithIcon
                  icon={<FaEnvelope />}
                  label={"Contact Sales"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<FaBuilding />}
                  label={"Customer Stories"}
                ></MenuWithIcon>
              </div>
            </div>
            {/* integration and custom solution */}
            <div className=" rounded-lg mt-5 ">
              <div className="grid grid-cols-1">
                <MenuWithIcon
                  icon={<FaBriefcase />}
                  label={"Jobs"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<FaBookOpen />}
                  label={"Stripe Press"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<FaNewspaper />}
                  label={"Newsroom"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<FaUser />}
                  label={"Become a Partner"}
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

export default ResourcesSubMenuMobile;

const MenuButtonMobile = ({ label, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between group py-3"
    >
      <div>
        <h4 className="text-gray-600 font-bold group-hover:text-gray-500">
          {label}
        </h4>
      </div>
      <div>
        <IoIosArrowForward className="text-xl text-gray-600 group-hover:text-gray-500" />
      </div>
    </div>
  );
};
