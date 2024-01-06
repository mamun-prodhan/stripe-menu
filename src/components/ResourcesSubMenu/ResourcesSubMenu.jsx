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

const ResourcesSubMenu = () => {
  return (
    <div className="absolute top-14 -left-64 opacity-0 invisible group-hover/resources:visible group-hover/resources:opacity-100 duration-300 ease-in-out group-hover/resources:transform z-50 min-w-[700px] h-[900px]">
      <div className="relative bg-[#EFF3F9] rounded-xl shadow-xl w-full">
        {/* hovered menu pointer */}
        <div className="absolute w-10 h-10 bg-white transform rotate-45 top-0 z-[-1] translate-x-0 transition-transform group-hover/resources:translate-x-[285px] duration-500 ease-in-out rounded-sm"></div>
        <nav className="">
          <div className="text-gray-700 px-8 pt-8">
            <div className="grid grid-cols-2">
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
          <div className=" px-8 py-8 rounded-lg mt-5 bg-[#dce2eb]">
            <div className="grid grid-cols-2">
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
      </div>
    </div>
  );
};

export default ResourcesSubMenu;

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
