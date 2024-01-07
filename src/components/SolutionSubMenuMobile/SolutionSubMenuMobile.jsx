import { AiFillPlusSquare, AiFillSafetyCertificate } from "react-icons/ai";
import {
  BsCarFront,
  BsCart,
  BsCoin,
  BsCurrencyPound,
  BsFillBuildingsFill,
  BsGlobe,
  BsMagnet,
  BsMessenger,
  BsShop,
} from "react-icons/bs";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosBriefcase,
  IoMdArrowForward,
} from "react-icons/io";
import { IoRocket } from "react-icons/io5";
import { Link } from "react-router-dom";

const SolutionSubMenuMobile = ({ activeProductMobile, handleClick }) => {
  return (
    <div className="">
      <div>
        <MenuButtonMobile
          label="Solutions"
          isActive={activeProductMobile === "solutions"}
          handleClick={() => handleClick("solutions")}
        ></MenuButtonMobile>
      </div>
      {/* data */}
      {activeProductMobile === "solutions" && (
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
            {/* by stage menu */}
            <div className="text-gray-700 px-2 pt-8">
              <h4 className="uppercase font-semibold text-gray-500 mb-1">
                by stage
              </h4>
              <div className="grid grid-col-1">
                <MenuWithIcon
                  icon={<IoRocket />}
                  label={"Startups"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsFillBuildingsFill />}
                  label={"Enterprize"}
                ></MenuWithIcon>
              </div>
            </div>
            <hr className="my-5" />
            {/* by use case menu */}
            <div className="text-gray-700 px-2">
              <h4 className="uppercase font-semibold text-gray-500 mb-1">
                by use case
              </h4>
              <div className="grid grid-cols-1">
                <MenuWithIcon
                  icon={<AiFillSafetyCertificate />}
                  label={"SaaS"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsMagnet />}
                  label={"Creator Economy"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<IoIosBriefcase />}
                  label={"Platforms"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsCoin />}
                  label={"Embedded Finance"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsCart />}
                  label={"Ecommerce"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsGlobe />}
                  label={"Global Businesses"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsShop />}
                  label={"Marketplaces"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsCarFront />}
                  label={"Finance Automation"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsCurrencyPound />}
                  label={"Crypto"}
                ></MenuWithIcon>
              </div>
            </div>
            {/* integration and custom solution */}
            <div className=" px-2 py-8 rounded-lg mt-5 bg-white lg:bg-[#dce2eb]">
              <h4 className="uppercase font-semibold text-gray-500 mb-1">
                integrations & custom solutions
              </h4>
              <div className="grid grid-cols-1">
                <MenuWithIcon
                  icon={<AiFillPlusSquare />}
                  label={"App Marketplace"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<BsMessenger />}
                  label={"Partner Ecosystem"}
                ></MenuWithIcon>
                <MenuWithIcon
                  icon={<IoIosBriefcase />}
                  label={"Professionl Services"}
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

export default SolutionSubMenuMobile;

const MenuButtonMobile = ({ label, description, isActive, handleClick }) => {
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

// component for menu with icon
const MenuWithIcon = ({ icon, label }) => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 group my-2">
        <span className="text-gray-400 group-hover:text-gray-800 duration-150">
          {icon}
        </span>
        <p className="text-gray-800 font-semibold">{label}</p>
      </div>
    </Link>
  );
};
