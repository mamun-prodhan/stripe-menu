import { IoRocket } from "react-icons/io5";
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
import { AiFillPlusSquare, AiFillSafetyCertificate } from "react-icons/ai";
import { IoIosBriefcase } from "react-icons/io";

const SolutionSubMenu = () => {
  return (
    <div className="absolute top-14 -left-28 opacity-0 invisible group-hover/solutions:visible group-hover/solutions:opacity-100 duration-300 ease-in-out group-hover/solutions:transform z-50 min-w-[700px] h-[900px]">
      <div className="relative bg-[#EFF3F9] rounded-xl shadow-xl w-full">
        {/* hovered menu pointer */}
        <div className="absolute w-10 h-10 bg-white transform rotate-45 top-0 z-[-1] translate-x-0 transition-transform group-hover/solutions:translate-x-[140px] duration-500 ease-in-out rounded-sm"></div>
        <nav className="">
          {/* by stage menu */}
          <div className="text-gray-700 px-8 pt-8">
            <h4 className="uppercase font-semibold text-gray-500 mb-1">
              by stage
            </h4>
            <div className="grid grid-cols-2">
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
          <div className="text-gray-700 px-8">
            <h4 className="uppercase font-semibold text-gray-500 mb-1">
              by use case
            </h4>
            <div className="grid grid-cols-2">
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
          <div className=" px-8 py-8 rounded-lg mt-5 bg-[#dce2eb]">
            <h4 className="uppercase font-semibold text-gray-500 mb-1">
              integrations & custom solutions
            </h4>
            <div className="grid grid-cols-2">
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
      </div>
    </div>
  );
};

export default SolutionSubMenu;

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
