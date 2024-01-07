import { IoIosArrowForward } from "react-icons/io";

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

export default MenuButtonMobile;
